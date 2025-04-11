import React, { useState, useRef, useEffect } from 'react';
import { IoMdSend } from 'react-icons/io';
import '../../styles/components/ChatInterface.css'
import WelcomeBanner from '../WelcomeBanner'

import {
    styled,

    Typography,
    Paper,
    Avatar,
} from '@mui/material';

import { useInsight } from '@semoss/sdk-react';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import { Markdown } from '@/components/common';


const StyledTitle = styled('div')(({ theme }) => ({
    background: 'rgba(226, 242, 255, 1)',
    padding: theme.spacing(2),
    borderTopLeftRadius: theme.spacing(2),
    borderTopRightRadius: theme.spacing(2),
    display: 'flex',
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    background: 'white',
    marginRight: theme.spacing(2),
}));

const StyledDescription = styled(Typography)(({ theme }) => ({
    padding: theme.spacing(2),
	fontSize:'14px',
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
    width: '100%',
    borderRadius: theme.spacing(2),
    marginBottom: theme.spacing(2),
}));

export interface Model {
    database_name?: string;
    database_id?: string;
}

interface Answer {
    question: string;
    conclusion: string;
    LLM: string;
    vectorCatalogs: string;
}

const ChatInterface = () => {
	const [messages, setMessages] = useState<Array<{ type: String; content: string }>>([]);
	const [inputValue, setInputValue] = useState('');
	const textareaRef = useRef<HTMLTextAreaElement>(null);
	const messagesEndRef = useRef<HTMLDivElement>(null);

	// ADDED FROM POLICY
	const { actions } = useInsight();
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');
	const [isAnswered, setIsAnswered] = useState(false);
	const [answer, setAnswer] = useState<Answer | null>(null);
	const [limit] = useState(3);
	const [temperature] = useState(0.1);
	const [alertOpen, setAlertOpen] = useState(false);

	const predefinedModels: Model[] = [
        { database_name: " Llama3-70B-Instruct", database_id: '4801422a-5c62-421e-a00c-05c6a9e15de8'}
    ];

	const onboardingVectorDBs: Model [] = [
        {database_name: 'B-PASS Onboarding Data', database_id: 'd9854792-f750-4d94-82b4-36b63e0294f6'},
        // {database_name: 'CAC Onboarding', database_id: '73e9f82e-ff10-4ff9-8cef-0753b39d9476'},
        // {database_name: 'ESA-BAD Onboarding Deck', database_id: '542e9a13-f50c-4f0b-b16b-b13c261819be'},
        // {database_name: 'MTIO and ESA-BAD Onboarding-Offboarding', database_id: '974f878e-2777-4d14-8995-665143afacc2'},
    ];

	const [selectedModel] = useState<Model[]>(predefinedModels);
	const [selectedVectorDB] = useState<Model[]>(onboardingVectorDBs);

	const exampleQuestions = [
		"Tell me about the Defense Health Agency (DHA).",
		"What are DHA Mandatory trainings?",
		"What is a Purchase Requisition Form?",
		"What is a CAC?",
		"How long does a CAC request take?",
		"How do I gain access to DDHQ?",
		"What is SEMOSS?",
		"Why was SEMOSS created?",
		"What is GovConnect.ai?"
	];

	const handleSubmit = async (data: { QUESTION: string }) => {
		// setError('');
        // setIsLoading(true);
        //setIsAnswered(false);

		let finalContent = ``;
        let pixel = '';

		try {
            if (!data.QUESTION) {
                throw new Error('Question is required');
            }

            for (let i = 0; i < selectedVectorDB.length; i++) {
                const pixel = `
                VectorDatabaseQuery(engine="${selectedVectorDB[i].database_id}" , command="${data.QUESTION}", limit=${limit})
                `;

                const response = await actions.run<Record<string, any>[]>(
                    pixel,
                );

                const { output, operationType } = response.pixelReturn[0];

                if (operationType.indexOf('ERROR') > -1) {
					throw new Error(output.response);
				}

                //Looping through Vector Database Query and forming a content string with name, page, and content
                for (let i = 0; i <= output.length - 1; i++) {
                    const content = output[i].content || output[i].Content;
                    finalContent += `\n* `;
                    Object.keys(output[i]).map(
                        (source) => {
                            finalContent += `${source}: ${output[i][source]},`;
						}
                    );
                    finalContent += ` ${content}`;
                }
            }

            const contextDocs = `A context delimited by triple backticks is provided below. This context may contain plain text extracted from paragraphs or images.'\\n \`\`\` ${finalContent} \`\`\`\\n ${data.QUESTION}}`;

            //for (let i=0; i< selectedModel.length; i++){
                    pixel = `
                LLM(engine="${
                    (selectedModel[0] as Model).database_id
                }" , command=["<encode>QUESTION: ${data.QUESTION}, Context: ${contextDocs}</encode>"], paramValues=[{"temperature":${temperature}}])
                `;

                const LLMresponse = await actions.run<[{ response: string }]>(
                    pixel,
                );

                const { output: LLMOutput, operationType: LLMOperationType } =
                    LLMresponse.pixelReturn[0];

                if (LLMOperationType.indexOf('ERROR') > -1) {
                    throw new Error(LLMOutput.response);
                }

                let conclusion = '';
                if (LLMOutput.response) {
                    conclusion = LLMOutput.response;
                }

				return {
					question: data.QUESTION,
					conclusion: conclusion,
					LLM: (selectedModel[0] as Model).database_name,
                    vectorCatalogs: JSON.stringify(
                        selectedVectorDB.map((vector) => vector.database_name),
                    ),
				};
			//}
                // set answer based on data
				/** 
                setAnswer({
                    question: data.QUESTION,
                    conclusion: conclusion,
                    LLM: (selectedModel[i] as Model).database_name,
                    vectorCatalogs: JSON.stringify(
                        selectedVectorDB.map((vector) => vector.database_name),
                    ),
                });
            }
            
            setIsAnswered(true);
			*/
        } catch (e) {
            if (e) {
                setError(e);
                setAlertOpen(true);
            } else {
                setError('There is an error, please check pixel calls');
                setAlertOpen(true);
            }
        } finally {
            setIsLoading(false);
        }
	};

	const handleSend = async () => {
		if (inputValue.trim() && !isLoading) {
			// setMessages(prev => [...prev, {type: 'user', content: inputValue }]);
			// await handleSubmit({ QUESTION: inputValue });

			const question = inputValue.trim();
			setInputValue('');
			setIsLoading(true);

			try {
				setMessages(prev => [...prev, {type: 'user', content: question }]);

				setMessages(prev => [...prev, { type: 'assistant', content: '...'}]);

				const result = await handleSubmit({ QUESTION: question });

				if (result) {
					setMessages(prev => [
						...prev.slice(0, -1), // remove loading ellipsis 
						{
						type: 'assistant',
						content: result.conclusion
					}]);
				}
			} catch (error) {
				setMessages(prev => [
					...prev.slice(0, -1), // remove loading ellipsis
					{
					type: 'assistant',
					content: "Sorry, I encountered an error processing your request."
				}]);
			} finally {
				setIsLoading(false);
				if (textareaRef.current) {
					textareaRef.current.style.height = 'auto';
				}
			}

			/*

			if (answer) {
				setMessages(prev => [...prev, {
					type: 'assistant',
					content: answer.conclusion
				}]);
			}

			setInputValue('');
			if(textareaRef.current) {
				textareaRef.current.style.height = 'auto';
			}
			*/
		}
	};

	const handleExampleClick = async (question: string) => {
		if (!isLoading) {
			setIsLoading(true);

			try {
				setMessages(prev => [...prev, { type: 'user', content: question }]);

				// add temp loading message
				setMessages(prev => [...prev, { type: 'assistant', content: '...'}]);

				const result = await handleSubmit({ QUESTION: question });

				if (result) {
					setMessages(prev => [
						...prev.slice(0, -1), // remove loading ellipsis
						{
						type: 'assistant',
						content: result.conclusion
					}]);
				}
			} catch (error) {
				setMessages(prev => [
					...prev.slice(0, -1), // remove loading ellipsis
					{
					type: 'assistant',
					content: "Sorry, I encountered an error processing your request."
				}]);
			} finally {
				setIsLoading(false);
			}


			/*
			setMessages(prev => [...prev, { type: 'user', content: question }]);

			await handleSubmit({ QUESTION: question });

			if (answer) {
				setMessages(prev => [...prev, {
					type: 'assistant',
					content: answer.conclusion
				}]);
			}
			*/
		}
	};

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			handleSend();
		}
	};

	const handleTextareaInput = () => {
		const textarea = textareaRef.current;
		if (textarea) {
			textarea.style.height = 'auto';
			textarea.style.height = `${textarea.scrollHeight}px`;
		}
	};

	const loadingDotsStyle = {
		display: 'inline-flex',
		gap: '4px',
	};

	const dotStyle = {
		width: '6px',
		height: '6px',
		backgroundColor: '#666',
		borderRadius: '50%',
		animation: 'bouncingDots 1.4s infinite ease-in-out',
	};

	const keyframesStyle = `
		@keyframes bouncingDots {
			0%, 80%, 100% { tansform: translateY(0); }
			40% { transform: translateY(-8px); }
		}
	`;

	const LoadingDots = () => (
		<div style={loadingDotsStyle}>
			<style>{keyframesStyle}</style>
			<div style={{ ...dotStyle, animationDelay: '0s' }} />
			<div style={{ ...dotStyle, animationDelay: '0.2s' }} />
			<div style={{ ...dotStyle, animationDelay: '0.4s' }} />
		</div>
	);


	return (
		<div className="chat-container">
			{/* <div className="assistant-welcome-banner">
				<div className="assistant-welcome-text">
					<div className="text-overlap">
						<div className="assistant-pre-title">{"Welcome to the "}</div>
						<div className="assistant-main-title">{"BPASS Onboarding Assistant"}</div>
					</div>
					<p className="assistant-description">{"Information from the following onboarding documents were used to train this model: BPASS Business Processes (PPT), How to request a CAC card (DOC), ESA-BAD Onboarding-Offboarding Processes (PPT), Deloitte MITO & ESA-BAD Onboarding (PPT), and SEMOSS and GovConnect.ai trainings (PPTs)."}</p>
				</div>
    		</div> */}

<StyledPaper variant={'elevation'} elevation={2} square>
                    <StyledTitle>
                        <StyledAvatar>
                            <SmartToyOutlinedIcon
                                sx={{ color: 'rgba(0, 0, 0, 0.87)' }}
                            />
                        </StyledAvatar>
                        <div>
                            <Typography variant="h6">BPASS Onboarding Assistant </Typography>
                            <Typography
                                variant="body2"
                                sx={{ color: 'rgba(0, 0, 0, 0)' }}
                            >
                                Onboarding Bot
                            </Typography>
                        </div>
                    </StyledTitle>
                    <StyledDescription variant="body1">
                        Information from the following onboarding documents were used to train this model: BPASS Business Processes (PPT), How to request a CAC card (DOC), ESA-BAD Onboarding-Offboarding Processes (PPT), Deloitte MITO & ESA-BAD Onboarding (PPT), and SEMOSS and GovConnect.ai trainings (PPTs).
                    </StyledDescription>
                </StyledPaper> 

			<main className="chat-main-content">
				{messages.length === 0 ? (
					<div className="example-grid-container">
						<div className="example-grid">
							{exampleQuestions.map((question, idx) => (
								<button
									key={idx}
									onClick={() => handleExampleClick(question)}
									className="example-box"
									disabled={isLoading}
								>
									{question}
								</button>
							))}
						</div>
					</div>
				) : (
					<div className="chat-messages">
						{messages.map((message, idx) => (
							<div
								key={idx}
								className={`message-row ${message.type === 'user' ? 'message-row-user' : ''}`}
							>
								<div
									className={`message ${message.type === 'user' ? 'message-user' : ''}`}
								>

									{/* Modified to ahow loading dots for assistant message if loading  */}
									{message.content === '...' ? (
										<LoadingDots />
									) : (
										<Markdown>
											{message.content}
                                    	</Markdown>
									)}

									{/* <Markdown>
										{message.content}
                                    </Markdown> */}
									{/*{message.content}*/}
								</div>
							</div>
						))}
						<div ref={messagesEndRef} />
					</div>
				)}
			</main>

			<div className="input-container">
				<div className="input-wrapper">
					<textarea
						ref={textareaRef}
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						onKeyPress={handleKeyPress}
						onInput={handleTextareaInput}
						placeholder='Type your prompt...'
						className='chat-textarea'
						rows={1}
						disabled={isLoading}
					/>
					<button
						onClick={handleSend}
						className='send-button'
						disabled={!inputValue.trim() || isLoading}
					>
						{isLoading ? <span>...</span> : <IoMdSend size={20} />}
					</button>
				</div>
			</div>
		</div>
	);
};

export default ChatInterface
import { makeAutoObservable, runInAction } from 'mobx';
import { runPixel, partial } from '@semoss/sdk';
import { useInsight } from '@semoss/sdk-react';

import { ChatMessage } from './chat.message';
import { TEMPERATURE, TOKEN_LENGTH } from './chat.constants';

export const chat = () => {
    const { actions } = useInsight();
};

export interface ChatRoomInterface {
    /**
     * ID of the room
     */
    roomId: string;

    /**
     *  Track if the room is initialized
     */
    isInitialized: boolean;

    /**
     *  Track if the room is loading
     */
    isLoading: boolean;

    /**
     *  Track if the room has errored
     */
    error: Error | null;

    /**
     * Metadata associated with the room
     */
    metadata: {
        /**
         * Name of the room
         */
        name: string;

        /**
         * date the room was created
         */
        dateCreated: string;
    };

    /*
     * Model that is being chatted against
     */
    modelId: string;

    /**
     *  Log of messages
     */
    log: ChatMessage[];

    /*
     * Context that is passed to the model
     */
    options: {
        /*
         * Prompt that is passed to the model
         */
        prompt: string;

        /*
         * Context that is passed to the model
         */
        context: string;

        /*
         * Length of the token
         */
        tokenLength: number;

        /*
         * Temperature of the model
         */
        temperature: number;
    };
}

/**
 * Internal state management of the builder object
 */
export class ChatRoom {
    private _store: ChatRoomInterface = {
        roomId: '',
        isInitialized: false,
        isLoading: false,
        error: null,
        metadata: {
            name: '',
            dateCreated: '',
        },
        modelId: '',
        options: {
            prompt: '',
            context: '',
            tokenLength: TOKEN_LENGTH,
            temperature: TEMPERATURE,
        },
        log: [],
    };

    constructor(
        roomId: string,
        modelId?: string,
        metadata?: Partial<ChatRoomInterface['metadata']>,
    ) {
        // register the roomId
        this._store.roomId = roomId;
        this._store.modelId = modelId;

        // register the options
        if (metadata) {
            if (metadata.name) {
                this._store.metadata.name = metadata.name;
            }

            if (metadata.dateCreated) {
                this._store.metadata.dateCreated = metadata.dateCreated;
            }
        }

        // make it observable
        makeAutoObservable(this);
    }

    /**
     * Getters
     */
    /**
     * Get the id of the roomId
     */
    get roomId() {
        return this._store.roomId;
    }

    /**
     * Indicator to chack if it is ready for use
     */
    get isInitialized() {
        return this._store.isInitialized;
    }

    /**
     * Indicator to check if the room is loading
     */
    get isLoading() {
        return this._store.isLoading;
    }

    /**
     * Get the error message if it errored
     */
    get error() {
        return this._store.error;
    }

    /**
     * Metadata associated with the room
     */
    get metadata() {
        return this._store.metadata;
    }

    /**
     * Model that the user is interacting with
     */
    get modelId() {
        return this._store.modelId;
    }

    /**
     * Get the options of the room
     */
    get options() {
        return this._store.options;
    }

    /**
     * Get the log of the room
     */
    get log() {
        return this._store.log;
    }

    /** Actions */
    /**
     * Initialize the room
     *  @param model - model to initialize the room with
     *  @param options - options to initialize in the room
     */
    async initialize(
        modelId: string,
        options: Partial<ChatRoomInterface['options']> = {},
    ) {
        try {
            // cannot set model if initialized
            if (this._store.isInitialized) {
                console.error('Room is initialized');
                return;
            }

            // set the model
            this._store.modelId = modelId;

            // merge the options in
            this._store.options = {
                ...this._store.options,
                ...options,
            };

            // turn on the loading screen
            this.setIsLoading(true);

            // wait for the pixel to run
            const { errors, pixelReturn } = await runPixel<
                [
                    {
                        DATE_CREATED: string;
                        MESSAGE_TYPE: string;
                        MESSAGE_DATA: string;
                        MESSAGE_ID: string;
                    }[],
                ]
            >(
                `GetRoomMessages(roomId=["${this._store.roomId}"]);`,
                this._store.roomId,
            );

            // throw errors
            if (errors.length > 0) {
                throw new Error(errors.join(''));
            }
            const { output } = pixelReturn[0];

            for (const r of output) {
                // create a new message
                const m = new ChatMessage({
                    messageId: r.MESSAGE_ID || '',
                    input: r.MESSAGE_TYPE === 'INPUT' ? 'user' : 'agent',
                    content: r.MESSAGE_DATA,
                });

                // save it
                this.saveMessage(m);
            }
            runInAction(() => {
                // initialize it
                this._store.isInitialized = true;
            });
        } catch (e) {
            /**
             * Log it
             */
            console.error(e);
        } finally {
            // turn off the loading screen
            this.setIsLoading(false);
        }
    }

    /**
     * Send a new user message and recieve a response
     * @param input - user message
     */
    async askModel(input: string): Promise<void> {
        // track if it is collecting
        let isCollecting = false;

        /**
         * Collect information for a messgae
         * @param message - message to collect
         */
        const collectMessage = async (message: ChatMessage) => {
            // only continue if active
            if (!isCollecting) {
                return;
            }

            // get the output
            try {
                const responseOutput = await partial(this._store.roomId);

                // add the martian
                if (responseOutput.message && responseOutput.message.new) {
                    message.addToTypewriter(responseOutput.message.new);
                }

                // set the next one
                setTimeout(() => collectMessage(message), 1000);
            } catch (e) {
                // noop
            }
        };

        let finalContent = ``;

        try {
            if (!this._store.modelId) {
                console.error('Model needs to be set. ModelId is required');
                return;
            }

            // turn on the loading screen
            this.setIsLoading(true);

            // build the userContent
            const userContent = input;

            // build the context if it is there
            const context = this._store.options.context;

            /* ADDED */

            /* ADDED */

            // create a new message
            const userMessage = new ChatMessage({
                messageId: '',
                input: 'user',
                content: userContent,
            });

            // save the message
            this.saveMessage(userMessage);

            // create a new message
            const agentMessage = new ChatMessage({
                messageId: '',
                input: 'agent',
                content: '',
            });

            // save the message
            this.saveMessage(agentMessage);

            // reset the typewriter
            agentMessage.resetTypewriter('');

            // start collecting
            isCollecting = true;

            // initial delay collecting the partial
            setTimeout(() => collectMessage(agentMessage), 500);

            // wait for the pixel to run
            const { errors, pixelReturn } = await runPixel<
                [{ response: string; messageId: string }]
            >(
                `LLM(engine=["${this._store.modelId}"],
                    ${
                        `context=[""],`
                    } command=["<encode>${userContent}</encode>"], paramValues=[${JSON.stringify(
                    {
                        max_new_tokens: this._store.options.tokenLength,
                        temperature: this._store.options.temperature,
                    },
                )}]);`,
                this._store.roomId,
            );

            // stop collecting
            isCollecting = false;

            // throw errors
            if (errors.length > 0) {
                throw new Error(errors.join(''));
            }

            // get the output
            const { output: llmOutput } = pixelReturn[0];

            // update the id
            agentMessage.updateId(llmOutput.messageId);

            // finish based on the full response
            agentMessage.finishTypewriter(llmOutput.response);
        } catch (e) {
            this.setError(e);
        } finally {
            // stop the collecting
            isCollecting = false;

            // turn off the loading screen
            this.setIsLoading(false);
        }
    }

    /**
     * Set the context
     * @param context - context
     */
    async setOptions(options: Partial<ChatRoomInterface['options']>) {
        // merge the options in
        this._store.options = {
            ...this._store.options,
            ...options,
        };
    }

    /**
     *
     * @param messageId
     * @param rating
     * @param text
     */
    async recordFeedback(
        messageId: string,
        rating: boolean,
        text = '',
    ): Promise<void> {
        try {
            // wait for the pixel to run
            const { errors, pixelReturn } = await runPixel<
                [{ response: string; messageId: string }]
            >(
                `SubmitLlmFeedback(messageId = ["${messageId}"], feedbackText=["${text}"], rating=[${rating}]);`,
                this._store.roomId,
            );

            // throw errors
            if (errors.length > 0) {
                throw new Error(errors.join(''));
            }

            // get the output
            const { output } = pixelReturn[0];

            console.log(output);
        } catch (e) {
            this.setError(e);
        } finally {
            // turn off the loading screen
            this.setIsLoading(false);
        }
    }

    /**
     * Helpers
     */

    /**
     * Save a message in the chat
     * @param message - message
     */
    private saveMessage(message: ChatMessage): void {
        // add to the user message
        this._store.log.push(message);
    }

    /**
     * Set the isLoading boolean
     * @param isLoading - is it loading
     */
    private setIsLoading(isLoading: boolean): void {
        this._store.isLoading = isLoading;
    }

    /**
     * Set the error
     * @param error - error
     */
    private setError(error: Error | null): void {
        this._store.error = error;

        // log the error
        console.error(error);
    }
}

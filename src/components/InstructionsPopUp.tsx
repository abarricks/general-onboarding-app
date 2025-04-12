// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { observer } from 'mobx-react-lite';
// import { instructionStore } from '../stores/InstructionStore'; // CHANGE - import instructionStore

// import landingPageImage from '../../images/landingPage.png';
// import taskPageImage from '../../images/taskPage.png';
// import taskProgressImage from '../../images/taskProgress.png';
// import teamPageImage from '../../images/teamPage.png';
// import resourcesPageImage from '../../images/resourcesPage.png';
// import chatPageImage from '../../images/chatPage.png';

// // Overlay for the modal background
// const Overlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background: rgba(0, 0, 0, 0.5);
//   z-index: 1000;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// // Container for the popup
// const PopupContainer = styled.div`
//   background: #fff;
//   width: 80%;
//   max-width: 800px;
//   padding: 20px;
//   border-radius: 8px;
//   position: relative;
//   max-height: 90vh;
//   overflow-y: auto;
// `;

// // Close (X) button for the popup
// const CloseButton = styled.button`
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   background: transparent;
//   border: none;
//   font-size: 1.5rem;
//   cursor: pointer;
// `;

// // Container for the slide content, arranged in a column
// const SlideContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// // Container for the image (displayed at the top)
// // CHANGE - Added margin-top so the image doesn't overlap with the X
// const ImageContainer = styled.div`
//   margin-top: 20px;
//   margin-bottom: 0px;
//   img {
//     max-width: 100%;
//     height: auto;
//   }
// `;

// // Container for the header and description
// const TextContainer = styled.div`
//   text-align: center;
//   h2 {
//     margin-bottom: 10px;
//   }
//   p {
//     line-height: 1.5;
//   }
// `;

// // Footer container for the bottom row; note we removed justify-content so we can use auto margin on the nav container.
// const FooterContainer = styled.div`
//   margin-top: 10px;
//   display: flex;
//   align-items: center;
// `;

// // Container for the navigation buttons on the right
// const NavButtonContainer = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   margin-left: auto; /* CHANGE - ensures the nav buttons stay at the right */
// `;

// // Styled Next button (always visible)
// const NextButton = styled.button`
//   background: #15171c;
//   color: #fff;
//   border: none;
//   padding: 10px 20px;
//   border-radius: 4px;
//   font-size: 1rem;
//   cursor: pointer;
// `;

// // Styled Back button (transparent by default; on hover, becomes semi-transparent light gray)
// const BackButton = styled.button`
//   background: transparent;
//   border: none;
//   color: #15171c;
//   padding: 10px 20px;
//   border-radius: 4px;
//   cursor: pointer;
//   transition: background 0.2s;
//   &:hover {
//     background: rgba(211, 211, 211, 0.5);
//   }
// `;

// // Container for the "Don't show again" checkbox
// const CheckboxContainer = styled.div`
//   display: flex;
//   align-items: center;
//   input {
//     margin-right: 8px;
//   }
// `;

// const InstructionsPopup: React.FC = observer(() => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [dontShowChecked, setDontShowChecked] = useState(false);

//   // Define the slides; note that description is a React element to allow bold formatting.
//   const slides = [
//     {
//       header: 'General Onboarding Dashboard',
//       description: (
//         <>
// 			The landing page consists of several <b>task groups</b> (e.g., Welcome & Getting Started).  When you click on a task group, you are taken to a page with all the tasks associated with that task group.
//         </>
//       ),
//       image: landingPageImage
//     },
// 	{
// 		header: 'The Structure of a Task',
// 		description: (
// 		  <>
// 			  Each task is comprised of a <b>task description</b> and <b>task steps</b>. Some tasks may also have an “Additional Resources” section. To complete a task, <b>carefully read the description and follow the steps</b> outlined underneath it. Reference additional resources as needed.
// 		  </>
// 		),
// 		image: taskPageImage
// 	  },
// 	  {
//       header: 'Tracking Your Progress on Tasks',
//       description: (
//         <>
//           To track your progress on tasks, <b>click the progress icon</b> to the left of the task title and <b>select an option from the dropdown menu</b> (Not Started, In Progress, Pending, or Complete) to update your progress on the task. This will <b>automatically update your overall progress for the task group</b>. NOTE: this feature is meant to help you keep track of your tasks and is currently not being monitored.
//         </>
//       ),
//       image: taskProgressImage
// 	},
// 	{
// 		header: 'Sidebar Navigation and Team Pages',
// 		description: (
// 		  <>
// 			Users can navigate the application using an <b>expandable sidebar</b>. To open and close the sidebar, click the icon in the top left corner of the sidebar. In addition to the onboarding home page, there is a <b>resources page</b>, <b>onboarding assistant page</b>, and <b>team onboarding pages</b>. Each team page has team-specific tasks, which are organized in the same way as the onboarding home page.
// 		  </>
// 		),
// 		image: teamPageImage
// 	  },
// 	  {
// 		header: 'AI Onboarding Assistant',
// 		description: (
// 		  <>
// 			The onboarding assistant is an <b>AI agent trained on onboarding documents</b>. It can assist users with <b>general and team-specific onboarding questions</b>. There are also links to the onboarding assistant from each task group page. The goal of this feature is to save time for incoming and current team members.
// 		  </>
// 		),
// 		image: chatPageImage
// 	  },
//     // Add more slides as needed
//   ];

//   // When closing the popup, check if the user opted out and reset the slideshow.
//   const handleClose = () => {
//     if (dontShowChecked) {
//       instructionStore.setDoNotShow(true); // CHANGE - update store preference
//     }
//     instructionStore.closePopup(); // CHANGE - close popup
//     setCurrentSlide(0); // reset slideshow for next time
//     setDontShowChecked(false); // reset checkbox state
//   };

//   const nextSlide = () => {
//     if (currentSlide < slides.length - 1) {
//       setCurrentSlide(currentSlide + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (currentSlide > 0) {
//       setCurrentSlide(currentSlide - 1);
//     }
//   };

//   // Only render the popup if the store says it is open.
//   if (!instructionStore.isPopupOpen) return null;

//   return (
//     <Overlay>
//       <PopupContainer>
//         <CloseButton onClick={handleClose}>×</CloseButton> {/* X out button */}
//         <SlideContainer>
//           <ImageContainer>
//             <img src={slides[currentSlide].image} alt={slides[currentSlide].header} />
//           </ImageContainer>
//           <TextContainer>
//             <h2>{slides[currentSlide].header}</h2>
//             <p>{slides[currentSlide].description}</p>
//           </TextContainer>
//         </SlideContainer>

//         {/* Footer row: Checkbox on the left (only if not already set), Navigation buttons on the right */}
//         <FooterContainer>
//           {!instructionStore.doNotShowInstructions && (
//             <CheckboxContainer>
//               <input
//                 type="checkbox"
//                 checked={dontShowChecked}
//                 onChange={(e) => setDontShowChecked(e.target.checked)}
//               />
//               <label>Don't show this to me again</label>
//             </CheckboxContainer>
//           )}
//           <NavButtonContainer>
//             <BackButton
//               onClick={prevSlide}
//               style={{ visibility: currentSlide > 0 ? 'visible' : 'hidden' }}
//             >
//               Back
//             </BackButton>
//             <NextButton onClick={currentSlide === slides.length - 1 ? handleClose : nextSlide}>
//               {currentSlide === slides.length - 1 ? 'Finish' : 'Next'}
//             </NextButton>
//           </NavButtonContainer>
//         </FooterContainer>
//       </PopupContainer>
//     </Overlay>
//   );
// });

// export default InstructionsPopup;
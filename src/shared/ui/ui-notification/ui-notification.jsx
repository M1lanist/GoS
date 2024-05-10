// import * as React from "react";
// import "../ui-notification/ui-notification.scss";
// import InfoIcon from "../../assets/icon/info.svg";
// import WarningIcon from "../../assets/icon/warning.svg";
// import SuccessIcon from "../../assets/icon/success.svg";
// import CloseIcon from "../../assets/icon/close.svg";
// import { useState } from "react";




// export default function BasicAlerts() {
//   const [isVisible, setIsVisible] = useState({
//     info:true,
//     success:true,
//     error:true,
//     miniInfo:true,
//     miniSuccess:true,
//     miniError:true,
//   });

//   return (
//     <div className="ParentBox">
//       <div className="alertContainer info " style={{ display: isVisible.info ? 'flex' : 'none' }}>
//         <div className="iconContainer" >
//           <div>
//             <img src={InfoIcon} alt="" />
//           </div>
//         </div>
//         <div className="textContainer">
//           <p className="boldText">Info notification</p>
//           <p className="regularText">
//             Notification message. Here will be information.
//           </p>
//         </div>
//         <div className="iconContainer">
//           <div>
//             <button className="closeButton" onClick={() => setIsVisible({
//               ...isVisible, 
//               info:false,
//             })}>
//                 <img src={CloseIcon} alt="" />
//             </button>
//           </div>
//         </div>
//       </div>


//       <div className="alertContainer error" style={{ display: isVisible.error ? 'flex' : 'none' }}>
//         <div className="iconContainer">
//           <div>
//           <button className="closeErrorButton">
//               <img src={WarningIcon} alt="" />
//               </button>
//           </div>
//         </div>
//         <div className="textContainer">
//           <p className="boldText">Error notification</p>
//           <p className="regularText">
//             Notification message. Here will be information.
//           </p>
//         </div>
//         <div className="iconContainer" onClick={() => setIsVisible({
//               ...isVisible, 
//               error:false,
//             })}>
//           <div>
            
//           <img src={CloseIcon} alt="" />
//           </div>
//         </div>
//       </div>


//       <div className="alertContainer success" style={{ display: isVisible.success ? 'flex' : 'none' }}>
//         <div className="iconContainer">
//           <div>
//               <img src={SuccessIcon} alt="" />
//           </div>
//         </div>
//         <div className="textContainer">
//           <p className="boldText">Success notification</p>
//           <p className="regularText">
//             Notification message. Here will be information.
//           </p>
//         </div>
//         <div className="iconContainer" onClick={() => setIsVisible({
//               ...isVisible, 
//               success:false,
//             })} >
//           <div>
//           <img src={CloseIcon} alt="" />
//           </div>
//         </div>
//       </div>
    
    
//       <div className="noLabelAlertContainer noLabelInfo"  style={{ display: isVisible.miniInfo ? 'flex' : 'none' }}>
//         <div className="noLabelIconContainer">
//           <div>
//             <img src={InfoIcon} alt="" />
//           </div>
//         </div>
//         <div className="textContainer">
//           <p className="regularText">
//             Notification message. Here will be information.
//           </p>
//         </div>
       
//         <div className="noLabelIconContainer" onClick={() => setIsVisible({
//               ...isVisible, 
//               miniInfo:false,
//             })}>
//           <div>
//           <img src={CloseIcon} alt="" />
//           </div>
//         </div>
//       </div>
    
    
//       <div className="noLabelAlertContainer noLabelError" style={{ display: isVisible.miniError ? 'flex' : 'none' }} >
//         <div className="noLabelIconContainer">
//           <div>
//           <img src={WarningIcon} alt="" />
//           </div>
//         </div>
//         <div className="textContainer">
//           <p className="regularText">
//             Notification message. Here will be information.
//           </p>
//         </div>
//         <div className="noLabelIconContainer" onClick={() => setIsVisible({
//           ...isVisible,
//           miniError:false,
//         })}>
//           <div>
//           <img src={CloseIcon} alt="" />
//           </div>
//         </div>
//       </div>
    
    
//       <div className="noLabelAlertContainer noLabelSuccess" style={{ display: isVisible.miniSuccess ? 'flex' : 'none' }} >
//         <div className="noLabelIconContainer">
//           <div>
//             <img src={SuccessIcon} alt="" />
//           </div>
//         </div>
//         <div className="textContainer">
//           <p className="regularText">
//             Notification message. Here will be information.
//           </p>
//         </div>
//         <div className="noLabelIconContainer"onClick={() => setIsVisible({
//           ...isVisible,
//           miniSuccess:false,
//         })}>
//           <div>
//           <img src={CloseIcon} alt="" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
//           }

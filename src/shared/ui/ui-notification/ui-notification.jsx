import * as React from "react";
import "../ui-notification/ui-notification.scss";
import { useState } from "react";
import { CircleAlert, CircleCheckBig, TriangleAlert, X } from "lucide-react";




export default function UiNotification() {
  const [isVisible, setIsVisible] = useState({
    info:true,
    success:true,
    error:true,
    miniInfo:true,
    miniSuccess:true,
    miniError:true, 
  });

  return (
    <div className="ParentBox">
      <div className="alertContainer info " style={{ display: isVisible.info ? 'flex' : 'none' }}>
        <div className="iconContainer" >
          <div>
                <CircleAlert className="text-[rgb(96,93,236,1)]"/>
          </div>
        </div>
        <div className="textContainer">
          <p className="boldText">Info notification</p>
          <p className="regularText">
            Notification message. Here will be information.
          </p>
        </div>
        <div className="iconContainer">
          <div>
            <button className="closeButton" onClick={() => setIsVisible({
              ...isVisible, 
              info:false,
            })}>
                    <X  className="text-[rgb(201,200,211,1)]"/>
            </button>
          </div>
        </div>
      </div>


      <div className="alertContainer error" style={{ display: isVisible.error ? 'flex' : 'none' }}>
        <div className="iconContainer">
          <div>
          <button className="closeErrorButton">
                <TriangleAlert className="text-[rgb(249,50,50,1)]"/>        
        </button>
          </div>
        </div>
        <div className="textContainer">
          <p className="boldText">Error notification</p>
          <p className="regularText">
            Notification message. Here will be information.
          </p>
        </div>
        <div className="iconContainer" onClick={() => setIsVisible({
              ...isVisible, 
              error:false,
            })}>
          <div>
            
                <X className="text-[rgb(201,200,211,1)]"/>
          </div>
        </div>
      </div>


      <div className="alertContainer success" style={{ display: isVisible.success ? 'flex' : 'none' }}>
        <div className="iconContainer">
          <div>
                <CircleCheckBig className="text-[rgb(67,159,110,1)]"/>
          </div>
        </div>
        <div className="textContainer">
          <p className="boldText">Success notification</p>
          <p className="regularText">
            Notification message. Here will be information.
          </p>
        </div>
        <div className="iconContainer" onClick={() => setIsVisible({
              ...isVisible, 
              success:false,
            })} >
          <div>
                <X  className="text-[rgb(201,200,211,1)]"/>
          </div>
        </div>
      </div>
    
    
      <div className="noLabelAlertContainer noLabelInfo"  style={{ display: isVisible.miniInfo ? 'flex' : 'none' }}>
        <div className="noLabelIconContainer" >
          <div>
                <CircleAlert className="text-[rgb(96,93,236)] "/>
          </div>
        </div>
        <div className="textContainer">
          <p className="regularText">
            Notification message. Here will be information.
          </p>
        </div>
       
        <div className="noLabelIconContainer" onClick={() => setIsVisible({
              ...isVisible, 
              miniInfo:false,
            })}>
          <div>
                <X  className="text-[rgb(201,200,211,1)]"/>
          </div>
        </div>
      </div>
    
    
      <div className="noLabelAlertContainer noLabelError" style={{ display: isVisible.miniError ? 'flex' : 'none' }} >
        <div className="noLabelIconContainer">
          <div>
          <TriangleAlert className="text-[rgb(249,50,50,1)]"/>        
          </div>
        </div>
        <div className="textContainer">
          <p className="regularText">
            Notification message. Here will be information.
          </p>
        </div>
        <div className="noLabelIconContainer" onClick={() => setIsVisible({
          ...isVisible,
          miniError:false,
        })}>
          <div>
                <X  className="text-[rgb(201,200,211,1)]"/>
          </div>
        </div>
      </div>
    
    
      <div className="noLabelAlertContainer noLabelSuccess" style={{ display: isVisible.miniSuccess ? 'flex' : 'none' }} >
        <div className="noLabelIconContainer">
          <div>
          <CircleCheckBig className="text-[rgb(67,159,110,1)]"/>
          </div>
        </div>
        <div className="textContainer">
          <p className="regularText">
            Notification message. Here will be information.
          </p>
        </div>
        <div className="noLabelIconContainer"onClick={() => setIsVisible({
          ...isVisible,
          miniSuccess:false,
        })}>
          <div>
                <X  className="text-[rgb(201,200,211,1)]"/>
          </div>
        </div>
      </div>
    </div>
  );
          }

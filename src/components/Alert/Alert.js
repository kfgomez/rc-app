import React from 'react';
import ok from '../../assets/ok.svg';
import exclamation from '../../assets/exclamation-mark.svg';
import './Alert.css';

const Alert=(props)=>{
    let illustrationObject={
        src: '',
        alt: '',
        textClass: '',
    };
    if(props.type==='success'){
        illustrationObject.src=ok;
        illustrationObject.alt="ok icon";
    }else{
        illustrationObject.src=exclamation;
        illustrationObject.alt="error icon";
    }
    return(
    <div className="alert">
        <div className="alert-wrapper">
            <div 
            className={`alert-text ${props.type}`}>{props.message}</div>
            <div className="alert-image">
                <img 
                alt={illustrationObject.alt}
                src={illustrationObject.src} 
                style={{heigth: '100%', width: '100%'}}/>
            </div>
        </div>
        <div className="button-wrapper">
            <button onClick={props.closeAlertHandler}>close</button>
        </div>
    </div>
    )};
    
export default Alert;
import { useState } from 'react'
import '../ui-button/ui-button.scss'

const UiButton=({text, className})=>{
    const [buttonClass , setbuttonClass] = useState('button')
    return(
        <div className="buttonContainer">
            <button onClick={()=>setbuttonClass('disabledButton')} 
            className={`${buttonClass} ${className}`} >
                {text}
            </button>
        </div>
    )
}
export default UiButton;
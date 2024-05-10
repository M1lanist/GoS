import { useState } from 'react'
import '../ui-button/ui-button.scss'

const UiButton=()=>{
    const [buttonClass , setbuttonClass] = useState('button')
    return(
        <div className="buttonContainer">
            <button onClick={()=>setbuttonClass('disabledButton')} className={buttonClass}>
                Label
            </button>
        </div>
    )
}
export default UiButton;
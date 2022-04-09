import React from 'react';
import './body.scss';

function TaskSelect({name, spanishName, img}) {
    const speak= (text) =>{
        let utter = new SpeechSynthesisUtterance();
        utter.lang = 'es';
        utter.text = text;
        utter.volume = 0.5;
        window.speechSynthesis.speak(utter);
    }
    return(
        <div className="col-sm-6 col-md-4">
        <div className="task d-flex flex-column align-items-center">
            <span key={name}>{spanishName}</span>
            <div className="task__img d-flex align-items-center justify-content-center">
                <img src={img} alt={name} className="img-fluid"/>
            </div>
            <button className="bi bi-megaphone-fill" onClick={() => speak(`{${spanishName}`)}>Click</button>
            <span>{name}</span>

        </div>
        </div>
    )
}

export default TaskSelect
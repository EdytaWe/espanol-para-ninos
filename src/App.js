import React, { useEffect, useState } from 'react';
import Header from "./components/Header/Header";
import "./scss/main.scss"
import numbers from "./components/database/numbers";

const number = {
    number: 1,
    text: "hola fafu. que tal? te gusta tu amiga?",
}

function App() {
    const buttonClick= () =>{
        let utter = new SpeechSynthesisUtterance();
        utter.lang = 'es';
        utter.text = number.text;
        utter.volume = 0.5;
        window.speechSynthesis.speak(utter);
    }
    return (

        <>
            <Header />
        <button onClick={buttonClick}> klik</button>
        </>
    );

}

export default App;

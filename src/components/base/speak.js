
export const speak= (text) =>{
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'es';
    utter.text = text;
    utter.volume = 0.5;
    window.speechSynthesis.speak(utter);
}

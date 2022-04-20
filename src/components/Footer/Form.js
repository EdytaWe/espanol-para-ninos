import React, {useState} from 'react';
import './footer.scss'


function Form(){
    const [name, setName] = useState("Twoje Imię")
    const [mail, setMail] = useState("e-mail@mail.pl")
    const [message, setMessage] = useState("Twoja wiadomość")

    const submit = (e) =>{
        e.preventDefault()
    }

    return(
        <>
            <form>
                <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                <input type="email" value={mail} onChange={e => setMail(e.target.value)}/>
                <label>Wiadomość:
                    <textarea value={message} onChange={e => setMessage(e.target.value)} rows={5}/>
                </label>
                <button type="submit" onClick={submit}>Wyślij</button>
            </form>
        </>
    )
}

export default Form
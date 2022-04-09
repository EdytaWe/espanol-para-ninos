import React, {useState, useEffect} from 'react';
import './header.scss';

function User() {
    const [user, setUser] = useState("");

    useEffect(() =>{
        if(localStorage.getItem('name')){
            setUser(user);
        }else{
            // const newUser = prompt("Cześć! Wygląda na to, że jesteś tu pierwszy raz! Jak masz na imię?");
            // setUser(newUser);
            window.localStorage.setItem("name", prompt("Cześć! Wygląda na to, że jesteś tu pierwszy raz! Jak masz na imię?"));
            setUser(localStorage.getItem('name'));
        }
    })
    // const newUser = prompt("Cześć! Wygląda na to, że jesteś tu pierwszy raz! Jak masz na imię?")
    // useEffect sprawdzic czy w ls mamy zapisane if(localStorage.getItem('user')) jesli jestt to da state jesli nie to prompt
    return(
        <>
        <span className="user__name">HOLA {user}</span>
        </>
    )
}
export default User
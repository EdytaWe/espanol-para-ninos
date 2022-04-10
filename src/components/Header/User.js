import React, {useState, useEffect} from 'react';
import './header.scss';

function User() {
    const [user, setUser] = useState("");

    useEffect(() => {
        if (localStorage.getItem('name')) {
            setUser(localStorage.getItem('name'));
        } else {
            const newUser = prompt("Cześć! Wygląda na to, że jesteś tu pierwszy raz! Jak masz na imię?");
            if (newUser.length >= 2) {
                setUser(newUser);
                localStorage.setItem("name", newUser)
            }

        }
    }, [])

    return (
        <>
            <span className="user__name">HOLA {user}</span>
        </>
    )
}

export default User
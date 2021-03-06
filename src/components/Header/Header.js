import React from 'react';
import './header.scss';
import Icons from "./Icons";
import User from "./User";

function Header() {
    return (
        <header className="header">
            <nav className="navbar navbar-light bg-light">
                <div className="container d-flex flex-column flex-md-row justify-content-center justify-content-md-between">
                    <div className="navbar-brand d-flex flex-column flex-xl-row align-items-center justify-content-center">
                        <img src="./img/sombrero.png" alt="sombrero" className="img-fluid"/>
                        <p className="ms-3">ESPAÑOL PARA NIÑOS</p>
                    </div>
                    <User />
                </div>
            </nav>
            <Icons/>
        </header>
    );
}

export default Header;
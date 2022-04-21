import React from 'react';
import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import Header from "./components/Header/Header";
import "./scss/main.scss"
import Main from "./components/Main/Main";
import Numbers from "./components/Numbers/Numbers";
import FooterTwo from "./components/Footer/FooterTwo";
import Greetings from "./components/greetings/Greetings";
import Family from "./components/Family/Family";
import Animals from "./components/Animals/Animals";
import Room from "./components/Room/Room";
import Clothes from "./components/Clothes/Clothes";

function App() {
    return (

            <>
                <Header />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="numbers" element={<Numbers />} />
                        <Route path="greetings" element={<Greetings />} />
                        <Route path="family" element={<Family />} />
                        <Route path="animals" element={<Animals />} />
                        <Route path="room" element={<Room />} />
                        <Route path="clothes" element={<Clothes />} />
                    </Routes>
                </BrowserRouter>
                <FooterTwo />



            </>


    );

}

export default App;

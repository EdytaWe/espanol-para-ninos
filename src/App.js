import React from 'react';
import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import Header from "./components/Header/Header";
import "./scss/main.scss"
import Body from "./components/Main/Body";
import Numbers from "./components/Numbers/Numbers";




function App() {
    return (

            <>
                <Header />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Body />} />
                        <Route path="numbers" element={<Numbers />} />
                    </Routes>
                </BrowserRouter>




            </>


    );

}

export default App;

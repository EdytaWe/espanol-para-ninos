import React from 'react';
import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import Header from "./components/Header/Header";
import "./scss/main.scss"
import Main from "./components/Main/Main";
import Numbers from "./components/Numbers/Numbers";




function App() {
    return (

            <>
                <Header />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="numbers" element={<Numbers />} />
                    </Routes>
                </BrowserRouter>




            </>


    );

}

export default App;

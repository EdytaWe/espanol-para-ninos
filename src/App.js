import React, { useEffect, useState } from 'react';
// import {HashRouter, Route, Link, Switch, NavLink,} from 'react-router-dom';
import Header from "./components/Header/Header";
import "./scss/main.scss"
import Body from "./components/Main/Body";
import Numbers from "./components/Numbers/Numbers";




function App() {
    return (

            <>

                <Header />

                {/*<Route exact path='/' component={Body}/>*/}
                    {/*<Route path='/numbers' component={Numbers}/>*/}
                <Body />
                <Numbers />



            </>


    );

}

export default App;

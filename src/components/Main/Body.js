import React from 'react';
import './body.scss';
import TaskSelect from "./TaskSelect";
// import {HashRouter, Route, Link, Switch, NavLink,} from 'react-router-dom';

function Body() {
    return(

            <body>
            <div className="container">
                <div className="row tasks">
                    <TaskSelect name="Liczby" spanishName="Números" img="./img/numbers.jpg"/>
                    <TaskSelect name="Rodzina" spanishName="Familia" img="./img/family.png"/>
                    <TaskSelect name="Powitania" spanishName="Saludos" img="./img/welcome.png"/>

                </div>

            </div>

            </body>


    )
}
export default Body
import React from 'react';
import './main.scss';
import TaskSelect from "./TaskSelect";

function Main() {
    return(
        <main>
            <div className="container">
                <div className="row tasks">
                    <TaskSelect name="Liczby" spanishName="Números" img="./img/numbers.jpg"/>
                    <TaskSelect name="Rodzina" spanishName="Familia" img="./img/family.png"/>


                </div>
            </div>
        </main>
    )
}
export default Main
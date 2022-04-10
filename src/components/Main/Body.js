import React from 'react';
import './body.scss';
import TaskSelect from "./TaskSelect";


function Body() {
    return(

            <body>
            <div className="container">
                <div className="row tasks">
                    <TaskSelect name="Liczby" spanishName="Números" img="./img/numbers.jpg" link="/numbers"/>
                    <TaskSelect name="Rodzina" spanishName="Familia" img="./img/family.png" link="/numbers"/>
                    <TaskSelect name="Powitania" spanishName="Saludos" img="./img/welcome.png" link="/numbers"/>

                </div>

            </div>

            </body>


    )
}
export default Body
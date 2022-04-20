import React from 'react';
import './body.scss';
import TaskSelect from "./TaskSelect";
import FooterOne from "../Footer/FooterOne";


function Main() {
    return(

            <>
            <div className="container pb-5">
                <div className="row tasks">
                    <p>Wybierz czego chcesz się dziś nauczyć:</p>
                    <TaskSelect name="Powitania" spanishName="Saludos" img="./img/welcome.png" link="/numbers"/>
                    <TaskSelect name="Liczby" spanishName="Números" img="./img/numbers.jpg" link="/numbers"/>
                    <TaskSelect name="Rodzina" spanishName="Familia" img="./img/family.png" link="/numbers"/>
                    <TaskSelect name="Zwierzęta" spanishName="Animales" img="./img/animals.png" link="/numbers"/>
                    <TaskSelect name="Pokój" spanishName="Habitación" img="./img/room.jpg" link="/numbers"/>
                    <TaskSelect name="Ubrania" spanishName="Ropa" img="./img/clothes.jpg" link="/numbers"/>
                </div>

            </div>

                <FooterOne />

            </>


    )
}
export default Main
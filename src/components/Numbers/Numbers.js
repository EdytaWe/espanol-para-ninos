import React from 'react';
import './numbers.scss';
import numbersArray from "./numbersArray";
import Tile from "../base/Tile";
import Quiz from "../base/Quiz";



function Numbers() {
    return(
        <div>
        <div className="container numbers">
            <div className="row">
                {
                    numbersArray.map(el =>{
                        return(
                            <div className="col-sm-6 col-md-4 col-lg-3 my-3" key={el.id}>
                                <Tile name={el.polish} spain={el.spain} sound={el.spain} picture={el.picture}/>
                            </div>
                        )
                    })
                }
            </div>
            <section className="row py-5 song">
                <span className="col-md-6 mb-3 mb-md-0 text-center align-self-center">By utrwalić to, czego się nauczyłeś posłuchaj piosenki!</span>
                <div className="col-md-6">
                    <figure>
                        <iframe src="https://www.youtube.com/embed/8ydJr1Is8xI" title="numbers song">
                        </iframe>
                    </figure>
                </div>
            </section>
            <section>
            <p className="text-center py-3 exercises__title">A teraz czas na zadania:</p>
                <p className="text-center py-3 exercise__one">1. Posłuchaj słowa i wybierz poprawny obrazek.</p>
            <div className="row py-3">
                <Quiz key={numbersArray[0].id} sound={numbersArray[0].spain} img1={numbersArray[0].picture} id1={1} img2={numbersArray[0].alternate} id2={2}/>


            </div>
            </section>
        </div>

        </div>
    )
}
export default Numbers
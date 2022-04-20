import React from 'react';
import './numbers.scss';
import numbersArray from "./numbersArray";
import Tile from "../base/Tile";
import Quiz from "../base/Quiz";
import {Link} from "react-router-dom";



function Numbers() {
    return(
        <div>
        <div className="container numbers">
            <Link to="/"><span>&lt;&lt; Powrót</span></Link>
            <div className="row">
                {
                    numbersArray.map(el =>{
                        return(
                            <div className="col-sm-6 col-md-4 col-lg-3 my-3" key={el.id}>
                                <Tile element={el}/>
                            </div>
                        )
                    })
                }
            </div>
            <section className="row py-5 px-2 song">
                    <span className="col-md-6 mb-3 mb-md-0 text-center align-self-center">By utrwalić to, czego się nauczyłeś posłuchaj piosenki!</span>
                    <figure className="col-md-6">
                        <iframe src="https://www.youtube.com/embed/8ydJr1Is8xI" title="numbers song">
                        </iframe>
                    </figure>
            </section>
            <section className="py-5 exercises">
            <p className="text-center py-3 exercises__title">A teraz czas na zadania:</p>
                <p className="text-center py-3 exercise__one">1. Posłuchaj słowa i wybierz poprawny obrazek.</p>
            <div className="row py-3">
                <Quiz key={numbersArray[0].id} sound={numbersArray[0].spain} img1={numbersArray[0].picture} id1={1} img2={numbersArray[0].alternate} id2={2}/>
                <Quiz key={numbersArray[9].id} sound={numbersArray[9].spain} img1={numbersArray[9].alternate} id1={2} img2={numbersArray[9].picture} id2={1}/>
                <Quiz key={numbersArray[3].id} sound={numbersArray[3].spain} img1={numbersArray[3].alternate} id1={2} img2={numbersArray[3].picture} id2={1}/>
                <Quiz key={numbersArray[2].id} sound={numbersArray[2].spain} img1={numbersArray[2].picture} id1={1} img2={numbersArray[2].alternate} id2={2}/>
                <Quiz key={numbersArray[8].id} sound={numbersArray[8].spain} img1={numbersArray[8].picture} id1={1} img2={numbersArray[8].alternate} id2={2}/>
                <Quiz key={numbersArray[1].id} sound={numbersArray[1].spain} img1={numbersArray[1].alternate} id1={2} img2={numbersArray[1].picture} id2={1}/>
                <Quiz key={numbersArray[6].id} sound={numbersArray[6].spain} img1={numbersArray[6].picture} id1={1} img2={numbersArray[6].alternate} id2={2}/>
                <Quiz key={numbersArray[5].id} sound={numbersArray[5].spain} img1={numbersArray[5].alternate} id1={2} img2={numbersArray[5].picture} id2={1}/>
                <Quiz key={numbersArray[7].id} sound={numbersArray[7].spain} img1={numbersArray[7].picture} id1={1} img2={numbersArray[7].alternate} id2={2}/>
                <Quiz key={numbersArray[4].id} sound={numbersArray[4].spain} img1={numbersArray[4].alternate} id1={2} img2={numbersArray[4].picture} id2={1}/>

            </div>
            </section>
        </div>

        </div>
    )
}
export default Numbers
import React from "react";
import {animals} from "./animalsArray";
import "./animals.scss";
import Tile from "../base/Tile";
import Song from "../base/Song";
import {Link} from "react-router-dom";
import Quiz from "../base/Quiz";

function Animals(){
    return(
        <section className="animals">
            <div className="container">
                <Link to="/"><span>&lt;&lt; Powrót</span></Link>
                <div className="row">
                    {
                        animals.map(el=>{
                            return(
                                <div className="col-sm-6 col-lg-4 col-xl-3 my-3">
                                    <Tile element={el} key={el.index}/>
                                </div>
                            )
                        })
                    }
                </div>
                <Song link="https://www.youtube.com/embed/84SlqWqk49c" title="YouTube video player" />
                <div className="exercises py-5">
                    <p>A teraz czas na zadania!</p>
                    <p className="pt-4">1. Posłuchaj słowa i wybierz poprawny obrazek:</p>
                    <div className="row">
                        <Quiz key={animals[0].id} sound={animals[0].spain} img1={animals[0].picture} id1={1} img2={animals[0].alternate} id2={2}/>
                        <Quiz key={animals[9].id} sound={animals[9].spain} img1={animals[9].alternate} id1={2} img2={animals[9].picture} id2={1}/>
                        <Quiz key={animals[3].id} sound={animals[3].spain} img1={animals[3].alternate} id1={2} img2={animals[3].picture} id2={1}/>
                        <Quiz key={animals[2].id} sound={animals[2].spain} img1={animals[2].picture} id1={1} img2={animals[2].alternate} id2={2}/>
                        <Quiz key={animals[8].id} sound={animals[8].spain} img1={animals[8].picture} id1={1} img2={animals[8].alternate} id2={2}/>
                        <Quiz key={animals[1].id} sound={animals[1].spain} img1={animals[1].alternate} id1={2} img2={animals[1].picture} id2={1}/>
                        <Quiz key={animals[6].id} sound={animals[6].spain} img1={animals[6].picture} id1={1} img2={animals[6].alternate} id2={2}/>
                        <Quiz key={animals[5].id} sound={animals[5].spain} img1={animals[5].alternate} id1={2} img2={animals[5].picture} id2={1}/>
                        <Quiz key={animals[7].id} sound={animals[7].spain} img1={animals[7].picture} id1={1} img2={animals[7].alternate} id2={2}/>
                        <Quiz key={animals[4].id} sound={animals[4].spain} img1={animals[4].alternate} id1={2} img2={animals[4].picture} id2={1}/>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Animals
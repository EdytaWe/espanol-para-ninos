import React from "react";
import "./clothes.scss";
import {clothes} from "./clothesArray";
import {Link} from "react-router-dom";
import Tile from "../base/Tile";
import Song from "../base/Song";
import Quiz from "../base/Quiz";

function Clothes(){
    return(
        <section className="clothes">
            <div className="container">
                <Link to="/"><span>&lt;&lt; Powrót</span></Link>
                <div className="row">
                    {
                        clothes.map(el=>{
                            return(
                                <div className="col-md-6 col-lg-4 col-xl-3 my-3" key={el.id}>
                                    <Tile element={el} />
                                </div>
                            )
                        })
                    }
                </div>
                <Song link="https://www.youtube.com/embed/S2ueD2IT2Ls" title="YouTube video player" />
                <div className="exercises py-4">
                    <p>A teraz czas na zadania!</p>
                    <p className="pt-4">1. Posłuchaj słowa i wybierz poprawny obrazek:</p>
                    <div className="row">
                        <Quiz key={clothes[5].id} sound={clothes[5].spain} img1={clothes[5].picture} id1={1} img2={clothes[5].alternate} id2={2}/>
                        <Quiz key={clothes[1].id} sound={clothes[1].spain} img1={clothes[1].picture} id1={1} img2={clothes[1].alternate} id2={2}/>
                        <Quiz key={clothes[0].id} sound={clothes[0].spain} img1={clothes[0].alternate} id1={2} img2={clothes[0].picture} id2={1}/>
                        <Quiz key={clothes[4].id} sound={clothes[4].spain} img1={clothes[4].picture} id1={1} img2={clothes[4].alternate} id2={2}/>
                        <Quiz key={clothes[2].id} sound={clothes[2].spain} img1={clothes[2].alternate} id1={2} img2={clothes[2].picture} id2={1}/>
                        <Quiz key={clothes[8].id} sound={clothes[8].spain} img1={clothes[8].alternate} id1={2} img2={clothes[8].picture} id2={1}/>
                        <Quiz key={clothes[6].id} sound={clothes[6].spain} img1={clothes[6].picture} id1={1} img2={clothes[6].alternate} id2={2}/>
                        <Quiz key={clothes[3].id} sound={clothes[3].spain} img1={clothes[3].alternate} id1={2} img2={clothes[3].picture} id2={1}/>
                        <Quiz key={clothes[7].id} sound={clothes[7].spain} img1={clothes[7].picture} id1={1} img2={clothes[7].alternate} id2={2}/>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Clothes
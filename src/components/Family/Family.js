import React from "react";
import {family} from "./familyArray";
import "./family.scss";
import {Link} from "react-router-dom";
import Tile from "../base/Tile";
import Song from "../base/Song";
import Quiz from "../base/Quiz";

function Family(){
    return(
        <div className="family">
            <div className="container">
                <Link to="/"><span>&lt;&lt; Powrót</span></Link>
                <div className="row">
                    {
                        family.map(el =>{
                            return(
                                <div className="col-md-6 col-lg-4 col-xl-3 my-3" key={el.id}>
                                    <Tile element={el} />
                                </div>
                            )
                        })
                    }
                </div>
                <Song link="https://www.youtube.com/embed/_T1svGpYS28"
                      title="YouTube video player" />
                <div className="exercises">
                    <p>A teraz czas na zadania!</p>
                    <p className="pt-4">1. Posłuchaj słowa i wybierz poprawny obrazek:</p>
                    <div className="row py-5">
                        <Quiz key={family[0].id} sound={family[0].spain} img1={family[0].picture} id1={1} img2={family[0].alternate} id2={2}/>
                        <Quiz key={family[9].id} sound={family[9].spain} img1={family[9].alternate} id1={2} img2={family[9].picture} id2={1}/>
                        <Quiz key={family[3].id} sound={family[3].spain} img1={family[3].alternate} id1={2} img2={family[3].picture} id2={1}/>
                        <Quiz key={family[2].id} sound={family[2].spain} img1={family[2].picture} id1={1} img2={family[2].alternate} id2={2}/>
                        <Quiz key={family[8].id} sound={family[8].spain} img1={family[8].picture} id1={1} img2={family[8].alternate} id2={2}/>
                        <Quiz key={family[1].id} sound={family[1].spain} img1={family[1].alternate} id1={2} img2={family[1].picture} id2={1}/>
                        <Quiz key={family[6].id} sound={family[6].spain} img1={family[6].picture} id1={1} img2={family[6].alternate} id2={2}/>
                        <Quiz key={family[5].id} sound={family[5].spain} img1={family[5].alternate} id1={2} img2={family[5].picture} id2={1}/>
                        <Quiz key={family[7].id} sound={family[7].spain} img1={family[7].picture} id1={1} img2={family[7].alternate} id2={2}/>
                        <Quiz key={family[4].id} sound={family[4].spain} img1={family[4].alternate} id1={2} img2={family[4].picture} id2={1}/>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Family

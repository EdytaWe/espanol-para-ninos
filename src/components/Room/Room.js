import React from "react";
import {room} from "./roomArray";
import "./room.scss";
import {Link} from "react-router-dom";
import Tile from "../base/Tile";
import Song from "../base/Song";
import Quiz from "../base/Quiz";

function Room(){
    return(
        <section className="room">
            <div className="container">
                <Link to="/"><span>&lt;&lt; Powrót</span></Link>
                <div className="row">
                    {
                        room.map(el=>{
                            return(
                                <div className="col-sm-6 col-lg-4 col-xl-3 my-3">
                                    <Tile element={el}/>
                                </div>
                            )
                        })
                    }
                </div>
                <Song link="https://www.youtube.com/embed/u1A4f2IsOD0" title="YouTube video player" />
                <div className="exercises">
                    <p>A teraz czas na zadania!</p>
                    <p>Posłuchaj słowa i wybierz odpowiedni obrazek:</p>
                    <div className="row">
                        <Quiz key={room[7].id} sound={room[7].spain} img1={room[7].picture} id1={1} img2={room[7].alternate} id2={2} />
                        <Quiz key={room[0].id} sound={room[0].spain} img1={room[0].alternate} id1={2} img2={room[0].picture} id2={1} />
                        <Quiz key={room[4].id} sound={room[4].spain} img1={room[4].picture} id1={1} img2={room[4].alternate} id2={2} />
                        <Quiz key={room[2].id} sound={room[2].spain} img1={room[2].alternate} id1={2} img2={room[2].picture} id2={1} />
                        <Quiz key={room[5].id} sound={room[5].spain} img1={room[5].picture} id1={1} img2={room[5].alternate} id2={2} />
                        <Quiz key={room[1].id} sound={room[1].spain} img1={room[1].alternate} id1={2} img2={room[1].picture} id2={1} />
                        <Quiz key={room[6].id} sound={room[6].spain} img1={room[6].alternate} id1={2} img2={room[6].picture} id2={1} />
                        <Quiz key={room[3].id} sound={room[3].spain} img1={room[3].picture} id1={1} img2={room[3].alternate} id2={2} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Room
import React from "react";
import {room} from "./roomArray";
import "./room.scss";
import {Link} from "react-router-dom";
import Tile from "../base/Tile";
import Song from "../base/Song";

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
                <Song link="https://www.youtube.com/embed/u1A4f2IsOD0"
                      title="YouTube video player" />
            </div>
        </section>
    )
}

export default Room
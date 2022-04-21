import React from "react";
import "./clothes.scss";
import {clothes} from "./clothesArray";
import {Link} from "react-router-dom";
import Tile from "../base/Tile";
import Song from "../base/Song";

function Clothes(){
    return(
        <section className="clothes">
            <div className="container">
                <Link to="/"><span>&lt;&lt; Powrót</span></Link>
                <div className="row">
                    {
                        clothes.map(el=>{
                            return(
                                <div className="col-sm-6 my-3">
                                    <Tile element={el}/>
                                </div>
                            )
                        })
                    }
                </div>
                <Song link="https://www.youtube.com/embed/S2ueD2IT2Ls"
                      title="YouTube video player" />
            </div>
        </section>
    )
}
export default Clothes
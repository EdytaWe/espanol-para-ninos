import React from "react";
import {animals} from "./animalsArray";
import "./animals.scss";
import Tile from "../base/Tile";
import Song from "../base/Song";
import {Link} from "react-router-dom";

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
                <Song link="https://www.youtube.com/embed/84SlqWqk49c"
                      title="YouTube video player" />
            </div>
        </section>
    )
}

export default Animals
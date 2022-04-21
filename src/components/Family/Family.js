import React from "react";
import {family} from "./familyArray";
import "./family.scss";
import {Link} from "react-router-dom";
import Tile from "../base/Tile";
import Song from "../base/Song";

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
            </div>
        </div>
    )
}
export default Family

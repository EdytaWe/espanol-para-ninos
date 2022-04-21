import React from "react";
import {greetings} from "./greetingsArray";
import {Link} from "react-router-dom";
import Tile from "../base/Tile";
import './greetings.scss';
import Song from "../base/Song";

function Greetings(){
    return(
        <section className="greetings">
            <div className="container">
                <Link to="/"><span>&lt;&lt; Powrót</span></Link>
                <div className="row">
                    {
                        greetings.map(el=>{
                            return(
                                <div className="col-md-6 col-lg-4 col-xl-3 my-3" key={el.id}>
                                    <Tile element={el}/>
                                </div>
                            )
                        })
                    }
                </div>
                <Song link="https://www.youtube.com/embed/tK0vp8LlDiM" title="YouTube video player"/>
                <div className="row py-md-5 py-lg-0"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores aut, autem ducimus in molestias nobis nulla placeat, porro, quasi qui ullam vero voluptatem? Architecto cupiditate fugiat iste reiciendis suscipit.</p>
            </div>
        </section>
    )
}
export default Greetings

import React from "react";
import "./song.scss";

function Song({link, title}){
    return(
        <section className="row py-5 px-2 song">
            <span className="col-lg-6 mb-3 mb-lg-0 text-center justify-content-center align-items-center">Piosenka pomoże Ci zapamiętać słowa!</span>
            <div className="col-lg-6">
                <figure>
                    <iframe src={link} title={title}/>
                </figure>
            </div>
        </section>
    )
}

export default Song
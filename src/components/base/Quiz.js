import React, {useState} from 'react';
import './quiz.scss';
import {speak} from "./speak";

function Quiz({sound, img1, id1, img2, id2}) {
    const [anime, setAnime] = useState(["quiz__img"])
    const check = (e) =>{
        if(e.id1 === 1 || e.id2 === 1){
           console.log(e.target)
            console.log("jest 1")

        } else{
            console.log("jest 0")
            setAnime(anime => [...anime, "shake__horizontal"])

        }
    }
    return(
        <>
            <div className="col-12 text-center">
                <span className="bi bi-megaphone-fill display-1" onClick={() => speak(`{${sound}`)}/>
                <div className="quiz d-flex justify-content-center">
                    <div className="quiz__container mx-1 mx-sm-4 p-sm-3">
                        <div className={anime} style={{backgroundImage: `url(${img1})`,
                            backgroundRepeat: "no-repeat"}} onClick={(el) => check({id1})}></div>
                    </div>
                    <div className="quiz__container mx-1 mx-sm-4 p-sm-3">
                        <div className="quiz__img shake__horizontal" style={{backgroundImage: `url(${img2})`,
                            backgroundRepeat: "no-repeat"}} onClick={() => check({id2})}></div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Quiz;


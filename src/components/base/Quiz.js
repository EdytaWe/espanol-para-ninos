import React from 'react';
import './quiz.scss';
import {speak} from "./speak";

function Quiz({sound, img1, id1, img2, id2}) {
    const check = (e) =>{
        if(e.id1 === 1 || e.id2 === 1){
           console.log("jest 1")
        } else{
            console.log("jest 0")
        }
    }
    return(
        <>
            <div className="col-12 text-center">
                <span className="bi bi-megaphone-fill" onClick={() => speak(`{${sound}`)}/>
                <div className="quiz d-flex justify-content-center">
                    <div className="quiz__container mx-1 mx-sm-4 p-sm-3">
                        <div className="quiz__img" style={{backgroundImage: `url(${img1})`,
                            backgroundRepeat: "no-repeat"}} onClick={() => check({id1})}></div>
                    </div>
                    <div className="quiz__container mx-1 mx-sm-4 p-sm-3">
                        <div className="quiz__img" style={{backgroundImage: `url(${img2})`,
                            backgroundRepeat: "no-repeat"}} onClick={() => check({id2})}></div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Quiz;


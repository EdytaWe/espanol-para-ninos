import React, {useState} from 'react';
import './quiz.scss';
import {speak} from "./speak";
import classnames from 'classnames';

function Quiz({sound, img1, id1, img2, id2}) {
    const [shake, setShake] = useState(false)
    const [rotate, setRotate] = useState(false)
    const check = (e) =>{
        if(e.id1 === 1 || e.id2 === 1){
            console.log("jest 1")
            setShake(false);
            setRotate(true);
        } else{
            console.log("jest 0")
            setShake(true)
            setRotate(false)

        }
    }
    return(
        <>
            <div className="col-12 text-center pt-5">
                <img src="./img/sombrero.png" alt="sombrero" className={classnames('sombrero', {'win': rotate})}/>
                <span className="bi bi-megaphone-fill display-1" onClick={() => speak(`{${sound}`)}/>
                <div className="quiz d-flex justify-content-center">
                    <div className="quiz__container mx-1 mx-sm-4 p-sm-3">
                        <div className={classnames('quiz__img', {'shake__horizontal': shake })} style={{backgroundImage: `url(${img1})`,
                            backgroundRepeat: "no-repeat"}} onClick={(el) => check({id1})} />
                    </div>
                    <div className="quiz__container mx-1 mx-sm-4 p-sm-3">
                        <div className={classnames('quiz__img', {'shake__horizontal': shake })} style={{backgroundImage: `url(${img2})`,
                            backgroundRepeat: "no-repeat"}} onClick={() => check({id2})} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Quiz;


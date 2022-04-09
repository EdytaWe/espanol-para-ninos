import React from 'react';
import './numbers.scss';
import numbersArray from "./numbersArray";
import {speak} from "../Main/speak";

function Numbers() {
    return(
        <body>
        <div className="container">
            <div className="row">
                {
                    numbersArray.map(el =>{
                        return(
                            <div className="col-sm-6 col-md-4 col-lg-3" key={el.id}>
                                <div className="tile">
                                    <div className="d-flex">
                                        <span>{el.spain}</span>
                                        <button className="bi bi-megaphone-fill" onClick={() => speak(`{${el.spain}`)}/>
                                    </div>
                                    <div>
                                        <img src={el.picture} alt={el.name}/>
                                    </div>
                                    <span>{el.name}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

        </body>
    )
}
export default Numbers
import React from 'react';
import {speak} from "./speak";
import './tile.scss'

function Tile({element}){
    return(
        <>
            <div className="tile d-flex flex-column align-items-center py-3">
                <div className="d-flex flex-column align-items-center pb-5">
                    <span>{element.spain}</span>
                    <span className="bi bi-megaphone-fill pt-3" onClick={() => speak(`{${element.spain}`)}/>
                </div>
                <div className="tile__img">
                    <img src={element.picture} alt={element.polish}/>
                </div>
                <span className="pt-5">{element.polish}</span>
            </div>
        </>
    )
}
export default Tile
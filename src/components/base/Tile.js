import React from 'react';
import {speak} from "./speak";

function Tile({name, spain, sound, picture}){
    return(
        <>
            <div className="tile d-flex flex-column align-items-center py-3">
                <div className="d-flex pb-5">
                    <span>{spain}</span>
                    <span className="bi bi-megaphone-fill" onClick={() => speak(`{${sound}`)}/>
                </div>
                <div className="tile__img">
                    <img src={picture} alt={name}/>
                </div>
                <span className="pt-5">{name}</span>
            </div>
        </>
    )
}
export default Tile
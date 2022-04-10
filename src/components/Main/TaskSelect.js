import React from 'react';
import './body.scss';
import {speak} from "../base/speak";
import {Link} from "react-router-dom";

function TaskSelect({name, spanishName, img, link}) {
    return (
        <Link to={link} className="col-sm-6 col-md-4 my-3">
            <div>
                <div className="task d-flex flex-column align-items-center">
                    <span key={name}>{spanishName}</span>
                    <div className="task__img d-flex align-items-center justify-content-center">
                        <img src={img} alt={name} className="img-fluid"/>
                    </div>
                    <button className="bi bi-megaphone-fill" onClick={() => speak(`{${spanishName}`)}/>
                    <span>{name}</span>

                </div>
            </div>
        </Link>
    )
}

export default TaskSelect
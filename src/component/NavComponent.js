import freeIcon from "../img/freeIcon.svg";
import changeIcon from "../img/changeIcon.svg";
import partyIcon from "../img/partyIcon.svg";
import recipeIcon from "../img/recipeIcon.svg";
import React from "react";
import { Link } from "react-router-dom";


function Nav(){
    const data = "나눔";
    return(
        <nav>
            <ul className="nav-img">
                <li className="free nav-icon">
                    <Link to={{pathname:`/post/free`}}><img src={freeIcon} alt=""/></Link>
                </li>
                <li className="change nav-icon" >
                    <Link to="/post/change"><img src={changeIcon} alt=""/></Link>
                </li>
                <li className="party nav-icon">
                    <Link to="/post/party"><img src={partyIcon} alt=""/></Link>
                </li>
                <li className="recipe nav-icon">
                    <Link to="/post/recipe"><img src={recipeIcon} alt=""/></Link>
                </li>
            </ul>

            <ul className="nav-text">
                <li className="free">
                    <span className="nav-text">나눔</span>
                </li>
                <li className="change">
                    <span className="nav-text">교환</span>
                </li>
                <li className="party">
                    <span className="nav-text">파티</span>
                </li>
                <li className="recipe">
                    <span className="nav-text">레시피</span>
                </li>
            </ul>
        </nav>
    )
}

export {Nav};
import freeIcon from "../img/freeIcon.svg";
import changeIcon from "../img/changeIcon.svg";
import partyIcon from "../img/partyIcon.svg";
import recipeIcon from "../img/recipeIcon.svg";
import React from "react";

function Nav(){
    return(
        <nav>
            <ul className="nav-img">
                <li className="free">
                    <a href="./PostComponent.js"><img src={freeIcon} alt=""/></a>
                </li>
                <li className="change">
                    <img src={changeIcon} alt=""/>
                </li>
                <li className="party">
                    <img src={partyIcon} alt=""/>
                </li>
                <li className="recipe">
                    <img src={recipeIcon} alt=""/>
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
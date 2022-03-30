import React from 'react';
import freeIcon from "../img/freeIcon.svg";
import changeIcon from "../img/changeIcon.svg";
import partyIcon from "../img/partyIcon.svg";
import recipeIcon from "../img/recipeIcon.svg";
import {RiArrowDropDownLine} from "react-icons/ri";
import {HiSearch} from "react-icons/hi";
import MainImg from "../img/mainimage.svg";


function Post() {
    return (
        <div className="postpage">
            <div className="choice-area">
                <div className="area-text">덕명동</div>
                <div className="area-dropdown-icon">
                    <RiArrowDropDownLine/>
                </div>
            </div>

            <div className="postContent">
                <div className="post-image"></div>
                <div className="post-title"></div>
                <div className="post-user-image"></div>
                <div className="post-like-image"></div>
                <div className="post-like-count"></div>
                <div className="post-regist-time"></div>
            </div>

            <div className="writePost">
                <div className="write-icon"></div>
                <div className="write-text">글쓰기</div>
            </div>
        </div>

    )
}

export {Post};
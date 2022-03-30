import freeIcon from "../img/freeIcon.svg";
import {RiArrowDropDownLine} from "react-icons/ri";
import {HiSearch} from "react-icons/hi";
import MainImg from "../img/mainimage.svg";
import React from "react";

import Main from '../App.js';

function PostHeader(props){
    return(
        <header className="post-header">
            <div className="post-icon">
                <link to="" > <img src={freeIcon} alt=""/> </link>
            </div>
            <div className="post-title">{'title-name'} 게시판</div>
            <div className="post-dropdown-icon">
                <RiArrowDropDownLine/>
            </div>
            <div className="search-icon">
                <HiSearch/>
            </div>
            <div className="mypage-icon">
                <a href=""> <img src={MainImg} alt=""/> </a>
            </div>
        </header>
    )
}
export {PostHeader};
import React, {useEffect, useState} from 'react';
import freeIcon from "../img/freeIcon.svg";
import changeIcon from "../img/changeIcon.svg";
import partyIcon from "../img/partyIcon.svg";
import recipeIcon from "../img/recipeIcon.svg";
import {RiArrowDropDownLine} from "react-icons/ri";
import {HiSearch} from "react-icons/hi";
import mainIcon from "../img/mainimage.svg";
import {Link} from "react-router-dom";
import {TiPencil} from "react-icons/ti";
import {useLocation} from "react-router-dom";



function Post() {
    const [postname, setPostname] = useState('나눔');
    let name ='나눔';
    let icon = freeIcon;
    const data = useLocation().pathname;
    console.log(data);
    if(data=='/post/free'){
        name='나눔';
        icon = freeIcon;
    }else{
        name='교환';
        icon = changeIcon;

    }

    return (
        <div className="postpage">
            <div className="post-header" style={postHeaderStyle}>
                <Link to="/"><img src={icon} alt=""/></Link>
                <span>{name} 게시판</span>
                <RiArrowDropDownLine size="30"/>
                <HiSearch/>
                <img src={mainIcon} alt=""/>
            </div>
            <div className="choice-area" style={areaStyle}>
                <span className="area-text">덕명동</span>
                <span className="area-dropdown-icon">
                    <RiArrowDropDownLine size="30"/>
                </span>
            </div>

            <div className="postContent">
                <div className="post-image">

                </div>
                <div className="post-title">

                </div>
                <div className="post-user-image">

                </div>
                <div className="post-like-image">

                </div>
                <div className="post-like-count">

                </div>
                <div className="post-regist-time">

                </div>
            </div>

            <div className="writePost">
                <span className="write-icon">
                    <TiPencil/>
                </span>
                <span className="write-text">글쓰기</span>
            </div>
        </div>

    )
}

const postHeaderStyle = {
    display: 'flex',
    margin: "10px 20px 10px 0",
    fontSize: "20px",
}

const areaStyle = {
    display: 'flex',
    margin: "10px 10px 10px 0",
    textAlign: 'right',
    height: "33px",
    width: "100%",
    backgroundColor: "rgba(255,225,117,0.75)",
}


export default Post;
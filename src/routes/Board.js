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
import {FaRegHeart} from "react-icons/fa";
import {useParams} from 'react-router-dom';
import "./board.css";
import Post from "../component/PostComponent";


function Board() {
    // const [postname, setPostname] = useState('나눔');
    // const {data} = useParams();
    let name = '나눔';
    let icon = freeIcon;
    const data = useLocation().pathname;

    if (data == '/post/free') {
        name = '나눔';
        icon = freeIcon;
    } else if (data == '/post/change') {
        name = '교환';
        icon = changeIcon;

    } else if (data == '/post/party') {
        name = '푸대원';
        icon = partyIcon;

    } else {
        name = '레시피';
        icon = recipeIcon;
    }


    return (
        <div className="postpage">
            <div className="post-header">
                <Link to="/"><img src={icon} alt=""/></Link>
                <h4>{name} 게시판</h4>
                <span className="header-drop-icon">
                    <RiArrowDropDownLine size="35"/>
                </span>
                <span className="header-search-icon">
                    <HiSearch size={20}/>
                </span>
                <span className="header-main-img">
                   <Link to="/mypage">
                       <img src={mainIcon} alt=""/>
                   </Link>
                </span>
            </div>
            <div className="choice-area">
                <span className="area-text">덕명동</span>
                <span className="area-dropdown-icon">
                    <RiArrowDropDownLine size="25"/>
                </span>
            </div>

            <Link to="/post/number">
                <Post/>
            </Link>

            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>


            <Link to={{pathname: `${data}/write`}}>
                <div className="writePost">
                    <span className="write-icon" >
                        <TiPencil size={18}/>
                    </span>
                    <span className="write-text">글쓰기</span>
                </div>
            </Link>
        </div>

    )
}


export default Board;
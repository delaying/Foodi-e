import React from 'react';
import {HiSearch} from "react-icons/hi";
import MainImg from "../img/mainimage.svg";
import {Link} from "react-router-dom";



function Header(){
    return(
        <header className="main-header">
            <div className="title">Foodi:e</div>
            <div className="search">
                <div className="search-text">
                    검색어를 입력하세요.
                </div>
                <div className="search-icon">
                    <HiSearch size="18" color="white"/>
                </div>
            </div>
            <div className="my-page"><Link to="/login">
                <img src={MainImg} alt="메인이미지"/>
            </Link>
            </div>
        </header>
    )
}

export {Header};
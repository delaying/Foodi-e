import React from 'react';
import {HiSearch} from "react-icons/hi";
import MainImg from "../img/mainimage.svg";
import {Link} from "react-router-dom";


function Header() {
    return (
        <header className="main-header">
            <div className="title">Foodi:e</div>
            <div className="search">
                <input type="search" placeholder="검색어를 입력하세요"/>

                <div className="search-icon">
                    <HiSearch size="18" color="white"/>
                </div>
            </div>
            <div className="header-write-button">
                <button>글쓰기</button>
            </div>
            <div className="my-page"><Link to="/login">
                <img src={MainImg} alt="메인이미지"/>
            </Link>
            </div>
        </header>
    )
}

export {Header};
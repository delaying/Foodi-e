import './App.css';
import React from 'react';
import { MainBanner } from './component/BannerComponent';
import {HiSearch} from "react-icons/hi";
import {FaMapMarkerAlt} from "react-icons/fa";
import {VscSettings} from "react-icons/vsc";
import MainImg from "./img/mainimage.svg";
import changeIcon from "./img/changeIcon.svg";
import freeIcon from "./img/freeIcon.svg";
import partyIcon from "./img/partyIcon.svg";
import recipeIcon from "./img/recipeIcon.svg";

function App() {
    return (
        <div className="App">
            {/*header*/}
            <header>
                <div className="title">Foodi:e</div>
                <div className="search">
                    <div className="search-text">
                        검색어를 입력하세요.
                    </div>
                    <div className="search-icon">
                        <HiSearch size="18" color="white"/>
                    </div>
                </div>
                <div className="my-page">
                    <img src={MainImg} alt="메인이미지"/>
                </div>
            </header>

            {/*Banner*/}
            <section className="banner">
                <MainBanner/>
            </section>

            {/*nav-bar*/}
            <nav>
                <ul className="nav-img">
                    <li className="free">
                        <img src={freeIcon} alt=""/>
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

            {/*ChoiceAddress*/}
            <section className="choiceAddress">
                <div className="logo">
                    <FaMapMarkerAlt/>
                </div>
                <div className="addressDetail">
                    <span className="firstAddr">서울 ></span>
                    <span className="secondAddr">전체</span>
                    <span className="thirdAddr"> </span>
                </div>
                <div className="setting">
                    <div className="settingIcon">
                        <VscSettings/>
                    </div>
                    <div className="settingTitle">설정</div>
                </div>
            </section>

            {/*latest-Post*/}
            <section className="latest-post">
                <div className="title">최근 게시물</div>
                <div className="post-nav">나눔</div>
                <div className="post-list">
                    <ul>
                        <li>
                            <img className="post-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQavZS77mInKpbajzhaGj9JG6K4gJJt4ndKfw&usqp=CAU" alt=""/>
                            <span className="area">청주시 상당구</span>
                            <span className="title">사과 나눔</span>
                            <span className="userNickname">민도리</span>
                        </li>
                        <li>
                            <img className="post-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQavZS77mInKpbajzhaGj9JG6K4gJJt4ndKfw&usqp=CAU" alt=""/>
                            <span className="area">청주시 상당구</span>
                            <span className="title">사과 나눔</span>
                            <span className="userNickname">민도리</span>
                        </li>
                        <li>
                            <img className="post-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQavZS77mInKpbajzhaGj9JG6K4gJJt4ndKfw&usqp=CAU" alt=""/>
                            <span className="area">청주시 상당구</span>
                            <span className="title">사과 나눔</span>
                            <span className="userNickname">민도리</span>
                        </li>
                        <li>
                            <img className="post-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQavZS77mInKpbajzhaGj9JG6K4gJJt4ndKfw&usqp=CAU" alt=""/>
                            <span className="area">청주시 상당구</span>
                            <span className="title">사과 나눔</span>
                            <span className="userNickname">민도리</span>
                        </li>
                    </ul>
                </div>
            </section>

        </div>
    );
}

export default App;

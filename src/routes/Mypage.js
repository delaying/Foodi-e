import React from 'react';
import "./mypage.css";
import mainIcon from "../img/mainimage.svg";
import {ImArrowLeft2} from "react-icons/im";
import Post from "../component/PostComponent";

function Mypage() {
    return (
        <>
            <div className="mypage-header">
                <div className="prev-arrow-icon">
                    <ImArrowLeft2 size={20}/>
                </div>
                <div className="main-img">
                    <img src={mainIcon} alt=""/>
                </div>
                <div className="header-text"><h4>마이페이지</h4></div>
            </div>
            <div className="profile">
                <div className="profile-setting">
                    프로필 설정
                </div>
                <div className="profile-img">

                </div>
                <div className="user-nickname">
                    민도리
                </div>
                <div className="user-grade">
                    직급
                </div>
                <div className="user-area">
                    우리 동네
                </div>
            </div>
            <div className="mypost">
                <button>
                    나의 게시물
                </button>
            </div>
            <div className="like-post">
                <button>
                    찜 목록
                </button>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </>
    )
}

export default Mypage;
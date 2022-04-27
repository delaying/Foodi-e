import React from 'react';
import "./mypage.css";
import mainIcon from "../img/mainimage.svg";
import {ImArrowLeft2} from "react-icons/im";
import Post from "../component/PostComponent";
import { Link } from "react-router-dom";

function Mypage() {
    return (
        <>
            <div className="mypage-header">
                <div className="prev-arrow-icon">
                    <Link to="">
                        <ImArrowLeft2 size={20}/>
                    </Link>

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
                    <img src="data:image/jpeg;base64,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" alt=""/>
                </div>
                <div className="profile-right">
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
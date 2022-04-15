import React from 'react';
import "./login.css";

function Mypage() {
    return (
        <>
            <div className="mypage-header">
                <div className="prev-arrow-icon"></div>
                <div className="main-img"></div>
                <div className="header-text"><h4>마이페이지</h4></div>
            </div>
            <div className="profile">
                <div className="profile-setting">
                    프로필 설정
                </div>
                <div className="profile-img"></div>
                <div className="user-nickname"></div>
                <div className="user-grade"></div>
                <div className="user-area"></div>
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
            </div>
        </>
    )
}

export default Mypage;
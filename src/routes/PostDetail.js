import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import './postDetail.css';

function PostDetail() {
    return (
        <>
            <div className="post-header"></div>
            <div className="post-title">
                사과 나눔해요
            </div>
            <div className="post-photos">
            </div>
            <div className="post-user">
                <div className="user-nickname">메에롱</div>
                <div className="user-level">Lv.7</div>
                <div className="user-picture"></div>
            </div>
            <div className="post-detail">
                <div className="locate">위치 : 대전광역시 유성구</div>
                <div className="area">거래 장소 : 한밭대학교</div>
                <div className="time">거래 시간 : pm 3:00</div>
                <div className="storage">식품 보관 방법 : 냉장</div>
            </div>
            <div className="post-content">
                사과가 많아서 나눔합니당.
            </div>
            <div className="post-button">
                <div className="like-button">
                    <button>찜하기</button></div>
                <div className="prev-button">
                    <button>닫기</button></div>
                <div className="chat-button">
                    <button>채팅</button>
                </div>
            </div>
        </>
    )
}

export default PostDetail;
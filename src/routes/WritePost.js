import React, { useEffect } from 'react';
import {Link} from "react-router-dom";
import {TiPencil} from "react-icons/ti";
import {ImArrowLeft2} from "react-icons/im";
import {BsCamera} from "react-icons/bs";
import './writePost.css';



function WritePost({history}){

    const goBack = ( )=>{
        //이전 페이지로 이동
        history.goBack();
    };


    return(
        <>
            <div className="header">
                <div onClick={goBack} className="prev-arrow" style={headerStyle}>
                    <ImArrowLeft2/>
                </div>
                <div className="header-content" style={headerStyle}>
                    <h3>게시물 작성중 ...</h3>
                </div>
                <div className="header-button" style={headerStyle}>
                    <TiPencil size={20}/>
                    <span>
                        완료
                    </span>
                </div>

            </div>
            <div className="post-title">
                <div className="post-title-option">
                    <p>제목을 입력해주세요.</p>
                </div>
            </div>
            <div className="post-category">
                <div className="category-choice">카테고리</div>
                <div className="area-choice">지역 선택</div>
                <div className="detail-choice">세부사항</div>
            </div>
            <div className="post-photo">
                <div className="add-photo">
                    <BsCamera size={40} color={'lightGray'}/>
                    <p>사진을 등록해주세요</p>
                </div>

            </div>
            <div className="post-content">
                <p>설명을 등록해주세요</p>

            </div>
            <div className="post-precations">
                <ul>
                    <li>상한 음식 또는 유통기한이 지난 음식을 공유할 경우 계정에 조치가
                        취해질 수 있음을 알립니다.</li>
                    <li>관련된 설명이 아닌 정치 사회 관련 행위, 홍보 및 판매 관련 행위를
                        금지합니다.</li>
                    <li>타인에게 불쾌감을 주는 행위, 범죄, 불법 행위를 금지합니다.</li>
                    <li>욕설,비하,음란물 등의 행위를 금지합니다.</li>
                </ul>
                <div className="check-agree">
                    <p>위 안내사항을 확인하였나요? <input type="checkbox"/></p>

                </div>

            </div>


        </>
    )
}

const headerStyle={
    display: 'inline-block',
    marginLeft:'20px',
}



export default WritePost;
import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {TiPencil} from "react-icons/ti";
import {ImArrowLeft2} from "react-icons/im";
import {BsCamera} from "react-icons/bs";
import {MdKeyboardArrowRight} from "react-icons/md";
import './writePost.css';


function WritePost({history}) {
    //사진등록
    const [myImage, setMyImage] = useState("");

    const addImage = e => {
        const nowSelectImageList = e.target.files;
        const nowImageURLList = [...myImage];

        for (let i = 0; i < nowImageURLList.length; i++) {
            const nowImageUrl = URL.createObjectURL(nowSelectImageList[i]);
            nowImageURLList.push(nowImageUrl);
        }
        setMyImage(nowImageURLList);
        console.log(nowImageURLList);
    };

    const goBack = () => {
        //이전 페이지로 이동
        history.goBack();
    };


    return (
        <>
            <div className="header">
                {/*이전페이지로 이동*/}
                {/*<div onClick={goBack} className="prev-arrow">*/}
                {/*    <ImArrowLeft2/>*/}
                {/*</div>*/}
                <div className="prev-arrow">
                    <Link to="/post">
                        <ImArrowLeft2 size={20}/>
                    </Link>
                </div>

                <div className="header-content">
                    <h3>게시물 작성중 ...</h3>
                </div>
                <div className="header-complete-button">
                    <button>
                        <TiPencil size={20}/>
                        완료
                    </button>

                </div>

            </div>
            <div className="post-title">
                <input type="search" placeholder="제목을 입력해주세요"/>

            </div>
            <div className="post-category">
                <div className="top-line">
                    <div className="category-choice">
                        <span className="category-choice-title">카테고리</span>
                        <div className="choice-top-button">
                            <span className="category-first-choice">나눔</span>
                            <span className="arrowRight-icon"><MdKeyboardArrowRight size={25}/></span>
                            <span className="category-second-choice">라면</span>
                        </div>

                    </div>

                    <div className="detail-choice">
                        <p>세부사항</p>
                        <div className="choice-button">
                            <div className="top-line">
                            <span>거래 장소
                                <a href="">한밭대학교 N4동</a>
                            </span>
                                <span>물품 개수
                               <select>
                                   <option>1</option>
                                   <option>2</option>
                                   <option>3</option>
                                   <option>4</option>
                                   <option>5</option>
                                </select>
                            </span>
                            </div>
                            <div className="bottom-line">
                            <span>거래 시간
                                <input type="datetime-local"/>
                            </span>
                                <span>식품 보관 방법
                            <select>
                                   <option>냉장 보관</option>
                                   <option>냉동 보관</option>
                                   <option>실온 보관</option>
                                   <option>기타</option>
                                </select>
                            </span>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="post-photo">

                    <form action="" method="post" encType="multiple/form-data">
                        <div className="add-photo">
                            <label htmlFor="chooseFile">
                                <img src={myImage} alt=""/>
                                <BsCamera size={40} color={'lightGray'}/>
                                <p>사진을 등록해주세요</p>
                            </label>
                        </div>
                        <input type="file" multiple="multiple" id="chooseFile" placeholder="사진을 등록해주세요"
                               accept=".jpg,.jpeg,.png" onChange={addImage}/>
                    </form>
                    <p className="date-explanation">유통기한이 보이는 사진도 등록해주세요</p>
                </div>
                <div className="post-input-content">
                    <input type="text" placeholder="설명을 등록해주세요"/>

                </div>
                <div className="post-precations">
                    <ul>
                        <li>상한 음식 또는 유통기한이 지난 음식을 공유할 경우 계정에 조치가
                            취해질 수 있음을 알립니다.
                        </li>
                        <li>관련된 설명이 아닌 정치 사회 관련 행위, 홍보 및 판매 관련 행위를
                            금지합니다.
                        </li>
                        <li>타인에게 불쾌감을 주는 행위, 범죄, 불법 행위를 금지합니다.</li>
                        <li>욕설,비하,음란물 등의 행위를 금지합니다.</li>
                    </ul>
                    <div className="check-agree">
                        <p>위 안내사항에 동의하나요? <input type="checkbox"/></p>
                    </div>

                </div>

            </div>
            </>
            )
            }


            export default WritePost;
import React, {useState} from 'react';
import "./deskWritePost.css";
import {BsCamera} from "react-icons/bs";
import {Link} from "react-router-dom";
import {ImArrowLeft2} from "react-icons/im";
import {TiPencil} from "react-icons/ti";
import MainImg from "../img/mainimage.svg";

function DeskWritePost() {
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

    return (
        <>
           <div className="desk-write-post">

               <div className="desk-write-header">
                   <div className="desk-write-main">
                       <Link to="/">
                           <img src={MainImg} alt="메인이미지"/>
                            Foodi:e
                       </Link>
                   </div>
                   <div className="desk-write-name">
                       <p>게시글 작성중...</p>
                   </div>
                   <div className="desk-write-complete">
                       <button> <TiPencil size={20}/> 완료</button>
                   </div>
               </div>

               <div className="desk-write">
                   <div className="desk-write-input-title">
                       <input type="text" placeholder={"글 제목을 입력하세요"}/>
                   </div>
                   <div className="desk-write-middle-input">
                       <div className="desk-input-photo">
                           <form method="post" encType="multiple/form-data">
                               <div className="add-photo">
                                   <label htmlFor="chooseFile">
                                       <img src={myImage} alt=""/>
                                       <BsCamera size={40} color={'lightGray'}/>
                                       <p>사진을 끌어오거나 추가하기 버튼을 눌러</p>
                                       <p>식재료 사진을 업로드해주세요</p>
                                   </label>
                               </div>
                               <input type="file" multiple="multiple" id="chooseFile" placeholder="사진을 등록해주세요"
                                      accept=".jpg,.jpeg,.png" onChange={addImage}/>
                           </form>
                       </div>
                       <div className="desk-input-info">
                           <div className="desk-input-category">
                               카테고리
                               <p>나눔 > 라면</p>
                           </div>
                           <div className="desk-input-area">
                               지역
                               <p>서울특별시 > 강남구 > 전체</p>
                           </div>
                           <div className="desk-input-detail">
                               세부사항
                           </div>
                       </div>
                   </div>
                   <div className="desk-write-input-content">
                       <input type="text" placeholder={"내용을 입력해주세요"}/>
                   </div>

               </div>

               <div className="desk-write-alert">
                   <div className="desk-write-alert-text">
                       <ul>
                           <li>상한 음식 또는 유통기한이 지난 음식을 공유할 경우 계정에 조치가 취해질 수 있음을 알립니다.</li>
                           <li>육류의 경우 진공포장 및 개인의 조리 및 변형시키지 않은 상품에 대해서만 공유가 허용됩니다.</li>
                           <li>관련된 설명이 아닌 정치 사회 관련 행위, 홍보 및 판매 관련 행위를 금지합니다..</li>
                           <li>타인에게 불쾌감을 주는 행위, 범죄, 불법 행위를 금지합니다.</li>
                           <li>욕설,비하,음란물 등의 행위를 금지합니다.</li>
                       </ul>
                   </div>
                   <div className="desk-write-agree">
                       <p>위 안내사항에 동의하나요? <input type="checkbox"/></p>
                   </div>

               </div>
           </div>
        </>
    )
}


export default DeskWritePost;
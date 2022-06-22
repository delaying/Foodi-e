import React, {useState} from 'react';
import "./deskWritePost.css";
import {BsCamera} from "react-icons/bs";
import {Link} from "react-router-dom";
import {ImArrowLeft2} from "react-icons/im";
import {TiPencil} from "react-icons/ti";
import MainImg from "../img/mainimage.svg";
import {MdKeyboardArrowRight} from "react-icons/md";



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


//시군구선택
    function categoryChange(e) {
        const state = document.getElementById("state");
        let add=[];

        const gangwon = ["강릉시","동해시","삼척시","속초시","원주시","춘천시","태백시","고성군","양구군","양양군","영월군","인제군","정선군","철원군","평창군","홍천군","화천군","횡성군"];
        const gyeonggi = ["고양시","과천시","광명시","광주시","구리시","군포시","김포시","남양주시","동두천시","부천시","성남시","수원시","시흥시","안산시","안성시","안양시","양주시","오산시","용인시","의왕시","의정부시","이천시","파주시","평택시","포천시","하남시","화성시","가평군","양평군","여주군","연천군"];
        const gyeongsangnam = ["거제시", "김해시", "마산시", "밀양시", "사천시", "양산시", "진주시", "진해시", "창원시", "통영시", "거창군", "고성군", "남해군", "산청군", "의령군", "창녕군", "하동군", "함안군", "함양군", "합천군"];
        const gyeongsangbuk = ["경산시","경주시","구미시","김천시","문경시","상주시","안동시","영주시","영천시","포항시","고령군","군위군","봉화군","성주군","영덕군","영양군","예천군","울릉군","울진군","의성군","청도군","청송군","칠곡군"];
        const gwangju = ["광산구", "남구", "동구", "북구", "서구"];
        const daegu = ["남구", "달서구", "동구", "북구", "서구", "수성구", "중구", "달성군"];
        const daejeon = ["대덕구", "동구", "서구", "유성구", "중구"];
        const busan = ["강서구","금정구","남구","동구","동래구","부산진구","북구","사상구","사하구","서구","수영구","연제구","영도구","중구","해운대구","기장군"];
        const seoul = ["강남구","강동구","강북구","강서구","관악구","광진구","구로구","금천구","노원구","도봉구","동대문구","동작구","마포구","서대문구","서초구","성동구","성북구","송파구","양천구","영등포구","용산구","은평구","종로구","중구","중랑구"];
        const ulsan = ["남구","동구","북구","중구","울주군"];
        const incheon = ["계양구","남구","남동구","동구","부평구","서구","연수구","중구","강화군","옹진군"];
        const jeonnam = ["광양시","나주시","목포시","순천시","여수시","강진군","고흥군","곡성군","구례군","담양군","무안군","보성군","신안군","영광군","영암군","완도군","장성군","장흥군","진도군","함평군","해남군","화순군"];
        const jeonbuk = ["군산시", "김제시", "남원시", "익산시", "전주시", "정읍시", "고창군", "무주군", "부안군", "순창군", "완주군", "임실군", "장수군", "진안군"];
        const jeju = ["서귀포시","제주시","남제주군","북제주군"];
        const chungbuk = ["제천시","청주시","충주시","괴산군","단양군","보은군","영동군","옥천군","음성군","증평군","진천군","청원군"];
        const chungnam = ["계룡시", "공주시", "논산시", "당진시", "보령시", "서산시", "아산시", "천안시"];

        if (e.value == "general01") {
            add = gangwon;
        } else if (e.value == "general02") {
            add = gyeonggi;
        } else if (e.value == "general03") {
            add = gyeongsangnam;
        } else if (e.value == "general04") {
            add = gyeongsangbuk;
        } else if (e.value == "general05") {
            add = gwangju;
        } else if (e.value == "general06") {
            add = daegu;
        } else if (e.value == "general07") {
            add = daejeon;
        } else if (e.value == "general08") {
            add = busan;
        } else if (e.value == "general09") {
            add = seoul;
        } else if (e.value == "general10") {
            add = ulsan;
        } else if (e.value == "general11") {
            add = incheon;
        } else if (e.value == "general12") {
            add = jeonnam;
        } else if (e.value == "general13") {
            add = jeonbuk;
        } else if (e.value == "general14") {
            add = jeju;
        } else if (e.value == "general15") {
            add = chungnam;
        } else if (e.value == "general16") {
            add = chungbuk;
        }

        state.options.length = 1;
        // 군/구 갯수;

        for (let property in add) {
            let opt = document.createElement("option");
            opt.value = add[property];
            opt.innerHTML = add[property];
            state.appendChild(opt);
        }
    }


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
                               <div className="area-choice">
                                   <span className="category-choice-title">지역 선택</span>
                                   <div className="choice-top-button">
                                       <div className="search_boxes">
                                           <div className="search_box">
                                               <select name="" id="" onChange="categoryChange(this)">
                                                   <option value>시/도 선택</option>
                                                   <option value="general01">강원</option>
                                                   <option value="general02">경기</option>
                                                   <option value="general03">경남</option>
                                                   <option value="general04">경북</option>
                                                   <option value="general05">광주</option>
                                                   <option value="general06">대구</option>
                                                   <option value="general07">대전</option>
                                                   <option value="general08">부산</option>
                                                   <option value="general09">서울</option>
                                                   <option value="general10">울산</option>
                                                   <option value="general11">인천</option>
                                                   <option value="general12">전남</option>
                                                   <option value="general13">전북</option>
                                                   <option value="general14">제주</option>
                                                   <option value="general15">충남</option>
                                                   <option value="general16">충북</option>
                                               </select>
                                           </div>

                                           <div className="search_box">
                                               <select name="" id="state">
                                                   <option>군/구 선택</option>
                                               </select>
                                           </div>

                                       </div>
                                   </div>
                               </div>
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
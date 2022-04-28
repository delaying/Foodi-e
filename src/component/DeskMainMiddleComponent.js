import {FaMapMarkerAlt} from "react-icons/fa";
import {VscSettings} from "react-icons/vsc";
import React from "react";

function DeskMainMiddle() {
    return(
        <div className="middle-line">
            <section className="choiceAddress">
                <div className="address-title">
                    <div className="logo">
                        <FaMapMarkerAlt color="red"/>
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
                </div>

                <div className="map-img">
                    <img src="https://images.unsplash.com/photo-1508885368104-a4871600f1e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fG1hcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                </div>
            </section>

            <section className="hot-post-section">
                <div>인기 게시물</div>
                <div className="hot-posts">
                    <div className="simple-hot-post">
                        <img src="https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt=""/>
                        <div>망고 나눠요</div>
                    </div>
                    <div className="simple-hot-post">
                        <img src="https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt=""/>
                        <div>망고 나눠요</div>
                    </div>
                    <div className="simple-hot-post">
                        <img src="https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt=""/>
                        <div>망고 나눠요</div>
                    </div>
                    <div className="simple-hot-post">
                        <img src="https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt=""/>
                        <div>망고 나눠요</div>
                    </div>
                </div>

            </section>

            <section className="today-recipe-section">
                <div>오늘의 레시피</div>
                <h5>[ 리조또 ]</h5>
                <div className="today-recipes">
                    <span className="recipe-img">
                        <img src="https://images.unsplash.com/photo-1595908129746-57ca1a63dd4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmlzb3R0b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                    </span>
                    <span className="recipe-detail">
                        <ol>
                            <li>쌀 씻고 불리기</li>
                            <li>재료 먹기좋게 손질하기</li>
                            <li>올리브유에 마늘 볶기</li>
                            <li>불린 쌀 넣어 볶기</li>
                            <li>우유넣고 볶기. 물 조금씩 추가!</li>
                            <li>밥 익으면 재료넣고 볶기</li>
                            <li>파스타용 소스 넣고 볶기</li>
                        </ol>
                    </span>
                </div>
            </section>
        </div>

    )
}

export default DeskMainMiddle;
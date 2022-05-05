import React from 'react';
import {HiSearch} from "react-icons/hi";
import MainImg from "../img/mainimage.svg";
import {Link} from "react-router-dom";
import {Header} from "./HeaderComponent";
import {Nav} from "./NavComponent";
import Footer from "./FooterComponent";
import {Icon } from '@iconify/react';
import canIcon from "../img/canicon.svg";
import ramenIcon from "../img/ramenicon.svg";
import vegetableIcon from "../img/vegetableicon.svg";

// 카테코리 메인화면
function DeskPost() {
    return (
        <>
            <div className="DeskPost">
                <Header/>
                <Nav/>

                <div className="desk-hot-post">
                    <div className="desk-hot-title">
                        <h4>인기 게시물</h4>
                    </div>
                    <div className="desk-latest-contents">
                        <div className="desk-latest-content">
                            <img src="https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2luZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                            <div>와인 나눠 드려요</div>
                        </div>
                        <div className="desk-latest-content">
                            <img src="https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2luZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                            <div>와인 나눠 드려요</div>
                        </div>
                        <div className="desk-latest-content">
                            <img src="https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2luZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                            <div>와인 나눠 드려요</div>
                        </div>
                        <div className="desk-latest-content">
                            <img src="https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2luZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                            <div>와인 나눠 드려요</div>
                        </div>
                        <div className="desk-latest-content">
                            <img src="https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2luZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                            <div>와인 나눠 드려요</div>
                        </div>
                    </div>

                </div>
                <div className="desk-category">
                    <div className="desk-category-title">
                        <h4>카테고리</h4>
                    </div>
                    <div className="desk-category-icon">
                        <div className="category-meat">
                            <Icon icon="noto:meat-on-bone" color="#ffc700" style={{ fontSize: '40px' }}/>
                        </div>
                        <div className="category-fruit">
                            <Icon icon="fxemoji:banana" color="#ffc700" style={{ fontSize: '40px' }}/>
                        </div>
                        <div className="category-vegetable">
                            <img src={vegetableIcon} alt=""/>
                        </div>
                        <div className="category-can">
                            <img src={canIcon} alt=""/>
                        </div>
                        <div className="category-snack">
                            <Icon icon="emojione-v1:cookie" color="#ffc700" style={{ fontSize: '40px' }}/>
                        </div>
                        <div className="category-ramen">
                            <img src={ramenIcon} alt=""/>
                        </div>
                        <div className="category-frozen-food">
                            <Icon icon="twemoji:dumpling" style={{ fontSize: '40px' }}/>
                        </div>
                    </div>
                    <div className="desk-category-icon-name">
                        <div className="category-meat">육류</div>
                        <div className="category-fruit">과일</div>
                        <div className="category-vegetable">채소</div>
                        <div className="category-can">통조림</div>
                        <div className="category-snack">간식</div>
                        <div className="category-ramen">라면</div>
                        <div className="category-frozen-food">냉동식품</div>
                    </div>

                </div>
                <div className="desk-recent-posts">
                    <div className="desk-recent-title">
                        <h4>최근 게시물</h4>
                    </div>

                </div>

            </div>
            <Footer/>
        </>

    )
}

export default DeskPost;
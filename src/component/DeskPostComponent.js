import React from 'react';
import {HiSearch} from "react-icons/hi";
import MainImg from "../img/mainimage.svg";
import {Link} from "react-router-dom";
import {Header} from "./HeaderComponent";
import {Nav} from "./NavComponent";
import Footer from "./FooterComponent";

// 카테코리 메인화면
function DeskPost() {
    return (
        <>
            <div className="DeskPost">
                <Header/>
                <Nav/>

                <div className="desk-hot-post">
                    인기 게시물

                </div>
                <div className="desk-category">
                    카테고리
                </div>
                <div className="desk-recent-posts">
                    최근 게시물

                </div>

            </div>
            <Footer/>
        </>

    )
}

export default DeskPost;
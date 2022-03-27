import React from "react";
import {RiArrowDropDownLine} from "react-icons/ri";


function LatestPost(){
    return(
        <section className="latest-post">
            <div className="title">최근 게시물</div>
            <div className="post-nav">
                <div className="post-nav-text">나눔</div>
                <div className="post-nave-dropIcon"><RiArrowDropDownLine size={25}/></div>
            </div>
            <div className="post-list">
                <ul>
                    <li>
                        <img className="post-img"
                             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQavZS77mInKpbajzhaGj9JG6K4gJJt4ndKfw&usqp=CAU"
                             alt=""/>
                        <br/>
                        <span className="area">청주시 상당구</span><br/>
                        <span className="title">사과 나눔</span>
                        <span className="userNickname">민도리</span>
                    </li>
                    <li>
                        <img className="post-img"
                             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQavZS77mInKpbajzhaGj9JG6K4gJJt4ndKfw&usqp=CAU"
                             alt=""/>
                        <br/>
                        <span className="area">청주시 상당구</span><br/>
                        <span className="title">사과 나눔</span>
                        <span className="userNickname">민도리</span>
                    </li>
                    <li>
                        <img className="post-img"
                             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQavZS77mInKpbajzhaGj9JG6K4gJJt4ndKfw&usqp=CAU"
                             alt=""/>
                        <br/>
                        <span className="area">청주시 상당구</span><br/>
                        <span className="title">사과 나눔</span>
                        <span className="userNickname">민도리</span>
                    </li>
                    <li>
                        <img className="post-img"
                             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQavZS77mInKpbajzhaGj9JG6K4gJJt4ndKfw&usqp=CAU"
                             alt=""/>
                        <br/>
                        <span className="area">청주시 상당구</span><br/>
                        <span className="title">사과 나눔</span>
                        <span className="userNickname">민도리</span>
                    </li>
                </ul>
            </div>
            <div className="addPost">
                <button><a href="">더보기</a></button>
            </div>
        </section>
    )
}

export {LatestPost};
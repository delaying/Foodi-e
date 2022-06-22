import React from 'react';
import {ImArrowLeft2} from "react-icons/im";
import {Link} from "react-router-dom";
import mainIcon from "../img/mainimage.svg";
import {FcGoogle} from "react-icons/fc";
import {DiApple} from "react-icons/di";
import kakaoIcon from "../img/kakao vector.png";
import naverIcon from "../img/simple-icons_naver.png";
import "./login.css";

function Login() {
    return (
        <>
            <div className="login-head">

                <Link to="/"><span>
                    <ImArrowLeft2 size="25" color="gray"/>
                </span>
                    </Link>

                <img src={mainIcon} alt=""/>

                <span>로그인</span>
            </div>
            <div className="input-login">
                <form action="/auth/signup" encType="multipart/form-data" method="post">
                    <h1>Sign Up</h1>
                    EMAIL : <input type="text" name="email"/><br/>
                    PASSWORD : <input type="password" name="password"/><br/>
                    <input type="submit"/>
                </form>
            </div>
            <div className="oauth-login">
                <div className="kakao">

                    <a href="https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=79ef8000df154e40bb0f8efcf460e477&redirect_uri=http://localhost:8080/login/kakao">
                        <button><img src={kakaoIcon} alt=""/>카카오로 로그인</button>
                    </a>
                </div>
                <div className="google">

                    <a href="https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email&client_id=509614173781-loe251uu4s8osmsdroq8h4h9e6ipi6k5.apps.googleusercontent.com&response_type=code&redirect_uri=http://localhost:8080/login/google&access_type=offline">
                       <button>
                           <span><FcGoogle size={20}/></span>
                          구글로 로그인</button>
                    </a>
                </div>
                <div className="naver" >
                    <a href="https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=t0ileSQ7AIkXzPHtjLZm&redirect_uri=http://localhost:8080/login/naver">
                        <button><img src={naverIcon} alt=""/><span> 네이버로 로그인</span></button>
                    </a>
                </div>
                <div className="apple">
                    <button>
                        <span>
                        <DiApple color="white" size={23}/>
                        </span>
                        애플로 로그인</button>

                </div>
                {/*<div className="github">*/}
                {/*    <a href="https://github.com/login/oauth/authorize?client_id=abd2e29eec7d7a629d88&scope=id,name,email,avatar_url">*/}
                {/*        <input type="button" style={githubBtnStyle} value="깃허브로 로그인"/>*/}
                {/*    </a>*/}
                {/*</div>*/}
            </div>

        </>
    )
}


export default Login;
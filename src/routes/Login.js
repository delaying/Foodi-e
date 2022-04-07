import React from 'react';
import {ImArrowLeft2} from "react-icons/im";
import {Link} from "react-router-dom";
import mainIcon from "../img/mainimage.svg";

function Login() {
    return (
        <>
            <div className="login-head">

                <Link to="/" style={arrowStyle}><ImArrowLeft2 size="30" color="gray"/></Link>

                <img style={logoStyle} src={mainIcon} alt=""/>

                <span style={textStyle}>로그인</span>
            </div>
            <div className="oauth-login">
                <div className="kakao">
                    <a href="https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=79ef8000df154e40bb0f8efcf460e477&redirect_uri=http://localhost:8080/login/kakao">
                        <input type="button" style={kakaoBtnStyle} value="카카오로 로그인"/></a>
                </div>
                <div className="google">
                    <a href="https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email&client_id=509614173781-loe251uu4s8osmsdroq8h4h9e6ipi6k5.apps.googleusercontent.com&response_type=code&redirect_uri=http://localhost:8080/login/google&access_type=offline">
                        <input type="button" style={googleBtnStyle} value="구글로 로그인"/></a>
                </div>
                <div className="naver">
                    <a href="https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=t0ileSQ7AIkXzPHtjLZm&redirect_uri=http://localhost:8080/login/naver">
                        <input type="button" style={naverBtnStyle} value="네이버로 로그인"/></a>
                </div>
                <div className="apple">
                    <input type="button" style={appleBtnStyle} value="애플로 로그인"/>
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

const arrowStyle = {
    margin: "200px 10px 10px 50px",
    display: "inline",
};
const logoStyle = {
    margin: "100px 10px 10px 30px",
    display: "inline",
};
const textStyle = {
    margin: "100px 10px 10px 50px",
    display: "inline",
    fontSize: "2.5em"
};

const kakaoBtnStyle = {
    margin: "100px 50px 10px 60px",
    width: "250px",
    height: "35px",
    borderRadius: "12px",
    backgroundColor: "#FEE500",
    border: "none",
}

const naverBtnStyle = {
    margin: "10px 50px 10px 60px",
    width: "250px",
    height: "35px",
    borderRadius: "12px",
    backgroundColor: "#03C75A",
    border: "none",
    color: "white",
}

const googleBtnStyle = {
    margin: "10px 50px 10px 60px",
    width: "250px",
    height: "35px",
    borderRadius: "12px",
    backgroundColor: "#FFF",
    border: "1px solid #E0E0E0",
}

const appleBtnStyle = {
    margin: "10px 50px 10px 60px",
    width: "250px",
    height: "35px",
    borderRadius: "12px",
    backgroundColor: "#000000",
    color: "white",
    border: "none",
}

// const githubBtnStyle = {
//     margin:"10px 50px 10px 60px",
//     width: "250px",
//     height: "35px",
//     borderRadius: "12px",
//     backgroundColor: "#FEE500",
//     border:"none",
// }


export default Login;
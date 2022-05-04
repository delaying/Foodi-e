import React from 'react';
import "../App.css";
import MainIcon from "../img/mainimage.svg";


function Footer() {
    return (
        <footer>
            <div className="footer-top">
                <div className="footer-logo">
                    <img src={MainIcon} alt=""/>
                </div>
                <div className="footer-title">
                    Foodi:e
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-info">
                    <div className="enterprise-name">
                        (주) 박박사와 김연구원
                    </div>
                    <div className="enterprise-contact">
                        phone : 010-9163-5638
                    </div>
                    <div className="enterprise-locate">
                        email: pgy5638@naver.com
                    </div>

                </div>
                <div className="footer-copyright">
                    <div className="copyright">
                        &copy; Since 2022. 박박사와 김연구원 corp. All Right reserved.
                    </div>

                </div>
            </div>

        </footer>
    )
}

export default Footer;
import {FaMapMarkerAlt} from "react-icons/fa";
import {VscSettings} from "react-icons/vsc";
import React from "react";


function ChoiceAddress() {
    return(
        <div className="mobile-choice-address">
            <section className="choiceAddress">
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
            </section>
        </div>

    )
}

export {ChoiceAddress};
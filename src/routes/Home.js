import {Header} from "../component/HeaderComponent";
import {MainBanner} from "../component/BannerComponent";
import {Nav} from "../component/NavComponent";
import {ChoiceAddress} from "../component/ChoiceAddressComponent";
import {LatestPost} from "../component/LatestPostComponent";
import React from "react";
import "../App.css";

function Home() {
    return (
        <>
            <Header/>

            {/*<section className="banner">*/}
            {/*    <MainBanner/>*/}
            {/*</section>*/}
            <div className="banner-img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvlNLQwsGTwFE-e8r60Gfx6jnrTUedvUsTTg&usqp=CAU" alt=""/>
            </div>

            <Nav/>

            <ChoiceAddress/>

            <LatestPost/>
        </>

    )
}

export default Home;
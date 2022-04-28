import {Header} from "../component/HeaderComponent";
import {MainBanner} from "../component/BannerComponent";
import {Nav} from "../component/NavComponent";
import {ChoiceAddress} from "../component/ChoiceAddressComponent";
import {LatestPost} from "../component/LatestPostComponent";
import DeskMainMiddle from "../component/DeskMainMiddleComponent";
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

            <div className="banner-desk-img">
                <img src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="banner-img"/>
            </div>

            <ChoiceAddress/>
            <DeskMainMiddle/>

            <LatestPost/>
        </>

    )
}

export default Home;
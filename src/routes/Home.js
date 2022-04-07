import {Header} from "../component/HeaderComponent";
import {MainBanner} from "../component/BannerComponent";
import {Nav} from "../component/NavComponent";
import {ChoiceAddress} from "../component/ChoiceAddressComponent";
import {LatestPost} from "../component/LatestPostComponent";
import React from "react";


function Home() {
    return (
        <>
            <Header/>

            <section className="banner">
                <MainBanner/>
            </section>

            <Nav/>

            <ChoiceAddress/>

            <LatestPost/>
        </>

    )
}

export default Home;
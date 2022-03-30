import './App.css';
import React from 'react';

// component
import {MainBanner} from './component/BannerComponent';
import {Header} from './component/HeaderComponent';
import {Nav} from './component/NavComponent';
import {ChoiceAddress} from './component/ChoiceAddressComponent';
import {LatestPost} from './component/LatestPostComponent';

import {Post} from './component/PostComponent';
import {PostHeader} from './component/PostHeaderComponent';





function App() {
    return (
        <div className="App">
            {/*header*/}
            <Header/>

            {/*Banner*/}
            <section className="banner">
                <MainBanner/>
            </section>

            {/*nav-bar*/}
            <Nav/>

            {/*ChoiceAddress*/}
            <ChoiceAddress/>

            {/*latest-Post*/}
            <LatestPost/>




            {/*test*/}
            {/*<PostHeader/>*/}
            {/*<Post/>*/}


        </div>
    );
}

export default App;

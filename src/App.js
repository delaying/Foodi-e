import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Board from "./routes/Board";
import Home from "./routes/Home";
import Login from "./routes/Login";
import WritePost from "./routes/WritePost";
import Mypage from "./routes/Mypage";
import PostDetail from "./routes/PostDetail";

function App() {
    return (
        <Router>
            <Switch>
                {/*나중에 게시물번호로 이동*/}
                <Route path="/post/number">
                    <PostDetail/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/mypage">
                    <Mypage/>
                </Route>
                <Route path="/post/:name/write">
                    <WritePost/>
                </Route>
                <Route path="/post/:name">
                    <Board/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>


            </Switch>
        </Router>
    );
}

export default App;

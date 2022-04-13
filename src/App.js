import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Board from "./routes/Board";
import Home from "./routes/Home";
import Login from "./routes/Login";
import WritePost from "./routes/WritePost";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <Login/>
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

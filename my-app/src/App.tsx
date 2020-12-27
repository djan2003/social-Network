import React from 'react';
import s from './App.module.css';
import Dialogs from './component/Dialogs/Dialogs';
import Header from "./component/Header/Header";
import Nav from "./component/Nav/Nav";
import Profile from "./component/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Users from "./component/Users/Users";
import Friends from "./component/Friends/Friends";

function App() {
    return (
        <BrowserRouter>
        <div className={s.appWrapper}>
            <Header/>

            <Nav/>
            <div className={s.content}>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Route path="/Profile" component={Profile}/>
                <Route path="/Dialogs" component={Dialogs}/>
                <Route path="/Users" component={Users}/>
                <Route path="/Friends" component={Friends}/>

            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;

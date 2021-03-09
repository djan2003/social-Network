import React from 'react';
import s from './App.module.css';
import Nav from "./component/Nav/Nav";
import {BrowserRouter, Route} from "react-router-dom";
import Friends from "./component/Friends/Friends";
import  {DialogContainer1} from "./component/Dialogs/DialogsContainer";
import UsersContainer from "./component/Users/UsersContainer";
import ProfileMainContainer from "./component/Profile/ProfileContainer";
import { MainHaderContainer} from "./component/Header/HeaderContainer";
import {Login} from "./component/Login/Login";

function App() {

    return (
        <BrowserRouter>
            <div className={s.appWrapper}>
                <MainHaderContainer/>

                <Nav/>
                <div className={s.content}>
                    <Route path="/Profile/:userID?" render={() => <ProfileMainContainer/>}/>
                    <Route path="/Dialogs" render={() =><DialogContainer1/>
                    }/>
                    <Route path="/Users" render={() => <UsersContainer/>}/>
                    <Route path="/Friends" render={() => <Friends/>}/>
                    <Route path="/Login" render={() => <Login/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

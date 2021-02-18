import React from 'react';
import s from './App.module.css';
import Header from "./component/Header/Header";
import Nav from "./component/Nav/Nav";
import Profile from "./component/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Friends from "./component/Friends/Friends";
import {ActionType, diaologsDataType, messageDataType, newPostDataType} from "./redux/stateType";
import {StoreType} from "./redux/redux-store";
import  {DialogContainer1} from "./component/Dialogs/DialogsContainer";
import {UsersContainer} from "./component/Users/UsersContainer";
import {ProfileContainer, ProfileMainContainer} from "./component/Profile/ProfileContainer";

function App() {
    return (
        <BrowserRouter>
            <div className={s.appWrapper}>
                <Header/>

                <Nav/>
                <div className={s.content}>
                    <Route path="/Profile/:userID?" render={() => <ProfileMainContainer/>}/>
                    <Route path="/Dialogs" render={() =><DialogContainer1/>
                    }/>
                    <Route path="/Users" render={() => <UsersContainer/>}/>
                    <Route path="/Friends" render={() => <Friends/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

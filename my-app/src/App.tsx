import React, {useEffect} from 'react';
import s from './App.module.css';
import Nav from "./component/Nav/Nav";
import {BrowserRouter, Route} from "react-router-dom";
import Friends from "./component/Friends/Friends";
import  {DialogContainer1} from "./component/Dialogs/DialogsContainer";
import UsersContainer from "./component/Users/UsersContainer";
import ProfileMainContainer from "./component/Profile/ProfileContainer";
import { MainHaderContainer} from "./component/Header/HeaderContainer";
import {Login2} from "./component/Login/Login";
import {InitializedThunk} from "./redux/AppReducer";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./redux/redux-store";
import {Preloader} from "./accets/Preloader";

function App() {
    const dispatch = useDispatch();
    let initialized = useSelector((state:RootState)=>state.app.initialized)
    useEffect(()=>{
        dispatch(InitializedThunk())
    },[initialized])

if(!initialized){
    return <Preloader/>
}
else

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
                    <Route path="/Login" render={() => <Login2/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

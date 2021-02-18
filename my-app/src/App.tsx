import React from 'react';
import s from './App.module.css';
import Header from "./component/Header/Header";
import Nav from "./component/Nav/Nav";
import Profile from "./component/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Friends from "./component/Friends/Friends";
import {diaologsDataType, messageDataType, newPostDataType} from "./redux/stateType";
import {ActionType, store} from "./redux/state";
import {StoreType} from "./redux/redux-store";
import  {DialogContainer1} from "./component/Dialogs/DialogsContainer";
import {UsersContainer} from "./component/Users/UsersContainer";
import {ProfileContainer, ProfileMainContainer} from "./component/Profile/ProfileContainer";


type PropsType = {
    store: StoreType
    state: any
    dispatch: (action: ActionType) => void
    newPostData: Array<newPostDataType>
    dialodsData: Array<diaologsDataType>
    messageData: Array<messageDataType>
    newPostText: string
    newMessageText: string
}


function App(props: PropsType) {


    return (
        <BrowserRouter>
            <div className={s.appWrapper}>
                <Header/>

                <Nav/>
                <div className={s.content}>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <Route path="/Profile/:userID?" render={() => <ProfileMainContainer
                       store={props.store}
                        // @ts-ignore
                        newPostData={props.newPostData} />}/>
                    <Route path="/Dialogs" render={() =><DialogContainer1/>
                        /*<DialogsContainer dialodsData={props.dialodsData}
                                          messageData={props.messageData}
                                          newMessageText={props.newMessageText}
                                          dispatch={props.dispatch}
                                          store={props.store}/>*/
                    }/>
                    <Route path="/Users" render={() => <UsersContainer/>}/>
                    <Route path="/Friends" render={() => <Friends/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

import React from 'react';
import './index.css';
import {store} from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";


const rerenderTree=()=>{
    const state=store.getState();
    ReactDOM.render(
        <React.StrictMode>
            <App
                store={store}
                state={state}
                dispatch={store.dispatch.bind(store)}
                newPostData={state.profilePageReduser.newPostData}
                dialodsData={state.dialogsPageReduser.dialodsData}
                messageData={state.dialogsPageReduser.messageData}
                newPostText={state.profilePageReduser.newPostText}
                newMessageText={state.dialogsPageReduser.newMessageText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderTree();
store.subscribe(rerenderTree);
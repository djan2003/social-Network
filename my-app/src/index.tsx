import React from 'react';
import './index.css';
import {addPost, chageTextForPost, state, subscriber} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";


const rerenderTree=()=>{
    ReactDOM.render(
        <React.StrictMode>
            <App
                chageTextForPost={chageTextForPost}
                addPost={addPost}
                newPostData={state.newPostData}
                dialodsData={state.dialodsData}
                messageData={state.messageData}
                newPostText={state.newPostText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderTree();
subscriber(rerenderTree);
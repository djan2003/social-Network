import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import {addPost, chageTextForPost, state, stateType} from "./redux/state";


export const rerenderTree=(state:stateType)=>{
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



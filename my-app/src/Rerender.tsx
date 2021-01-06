import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import {addPost, state} from "./redux/state";

export const rerenderTree=()=>{
    ReactDOM.render(
        <React.StrictMode>
            <App
                addPost={addPost}
                newPostData={state.newPostData}
                dialodsData={state.dialodsData}
                messageData={state.messageData}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}



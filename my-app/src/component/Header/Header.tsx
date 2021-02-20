import React from 'react';
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

function Header(props:any) {
    return(
        <header className={s.header}>
            <img className={s.logotip}
                 src="https://avatars.mds.yandex.net/get-pdb/933338/94068ff5-61aa-43bd-909a-a47aade07a8b/orig"/>
                 <div className={s.login}>
                     {props.isAuth
                         ?props.email
                         :<NavLink to={"/login"}> LOGIN</NavLink>}


                 </div>
        </header>

    )

}
export default Header;
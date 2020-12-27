import React from "react";
import s from "./Nav.module.css"
import {NavLink} from "react-router-dom";


function Nav() {
return(
    <nav className={s.nav}>
        <div>
            <NavLink activeClassName={s.active} to="/Profile">Profile</NavLink>
        </div>
        <div>
            <NavLink activeClassName={s.active} to="/Dialogs">Dialogs</NavLink>
        </div>
        <div>
            <NavLink activeClassName={s.active}  to="/Users">Users</NavLink>
        </div>
        <div>
            <NavLink  activeClassName={s.active} to="/Friends" >Friends</NavLink>
        </div>
    </nav>
)
}
export default Nav;
import React from 'react';
import s from "./Header.module.css"

function Header() {
    return(
        <header className={s.header}>
            <img className={s.logotip}
                 src="https://avatars.mds.yandex.net/get-pdb/933338/94068ff5-61aa-43bd-909a-a47aade07a8b/orig"/>
        </header>

    )

}
export default Header;
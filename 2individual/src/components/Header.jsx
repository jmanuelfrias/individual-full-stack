import React from "react";
import '../styles/Header.css'
import {Link} from "react-router-dom";

export const Header = () =>{
    return (
        <header className="header">
            <Link to='/'>
                <h1 className="header__text header-footer__text">UNIR Library</h1>
            </Link>
        </header>
    );
}
import React from "react";
import '../styles/Header.css'
import {Link} from "react-router-dom";

export const Header = () =>{
    return (
        <header className="header">
            <Link to='/home'>
                <h1 className="header-text header-footer-text">UNIR Library</h1>
            </Link>
        </header>
    );
}
import React, {useContext} from "react";
import '../styles/Header.css'
import {Link} from "react-router-dom";
import {LibraryContext} from "../context/LibraryContext";

export const Header = () =>{
    const { isDarkMode, toggleDarkMode } = useContext(LibraryContext);

    return (
        <header className={`header ${isDarkMode ? "header--dark" : "header--light"} `}>
            <div className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" id="darkSwitch" onClick={toggleDarkMode} />
                        <label className="custom-control-label" htmlFor="darkSwitch">Cambiar a Modo Oscuro</label>
            </div>
            <Link to='/'>
                <h1 className={`header__text header-footer__text ${isDarkMode ? "mainText--dark" : "mainText--light"}`}>UNIR Library</h1>
            </Link>
        </header>
    );
}
import React, {useContext} from "react";
import '../styles/Header.css'
import sun_dark from '../resources/icons/sun.svg'
import sun_light from '../resources/icons/sun-fill.svg'
import {Link} from "react-router-dom";
import {LibraryContext} from "../context/LibraryContext";

//Header de la aplicación
export const Header = () =>{
    const { isDarkMode, toggleDarkMode } = useContext(LibraryContext);

    return (
        <header className={`header ${isDarkMode ? "header--dark" : "header--light"} `}>
            <Link to='/'>
                <h1 className={`header__text header-footer__text ${isDarkMode ? "mainText--dark" : "mainText--light"}`}>UNIR Library</h1>
            </Link>
            <div className="header__darkMode">
                {/*Icono en cargado de cambiar entre modo noche y modo dia*/}
                <img className="darkMode__icon" src={isDarkMode ? sun_dark : sun_light} alt="Cambio a DarkMode" onClick={toggleDarkMode}/>
            </div>
        </header>
    );
}
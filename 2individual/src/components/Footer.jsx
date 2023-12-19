import React, {useContext} from "react";
import '../styles/Footer.css'
import {LibraryContext} from "../context/LibraryContext";

export const Footer = () => {
    const { isDarkMode } = useContext(LibraryContext);

    return (
        <footer className={`footer ${isDarkMode ? " background--dark" : "header--light "}  `}>
            <p className={`header-footer__text  ${isDarkMode ? "mainText--dark  background--dark" : "mainText--light header--light" }`}>
                © 2023 UNIR Library</p>
        </footer>
    );
}
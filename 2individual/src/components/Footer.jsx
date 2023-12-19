import React, {useContext} from "react";
import '../styles/Footer.css'
import {LibraryContext} from "../context/LibraryContext";

export const Footer = () => {
    const { isDarkMode } = useContext(LibraryContext);

    return (
        <footer className={`footer ${isDarkMode ? " background--dark" : "background--light"}  `}>
            <p className={`header-footer__text  ${isDarkMode ? "mainText--dark  background--dark" : "mainText--light background--light" }`}>
                © 2023 UNIR Library</p>
        </footer>
    );
}
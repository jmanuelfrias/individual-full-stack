import React from "react";
import '../styles/Header.css'

export const Header = () =>{
    return (
        <header className="header">
            <h1 className="header-text header-footer-text">UNIR Library</h1>
            {/*Repensar el header para que tenga enlaces a acada una de las partes de una aplicación de libreria y una search bar que puede ser otro compnent*/}
        </header>
    );
}
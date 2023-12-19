import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {NavBarData} from "../resources/data/NavBarData";
import '../styles/navBar.css'
import {LibraryContext} from "../context/LibraryContext";

//Barra de navegación a la izquierda para ir entre las vistas
export const NavBar = () => {
    const { isDarkMode } = useContext(LibraryContext);

    return (
        <div>
            {/*Cogemos las entradas que haya en el NavBar data*/}
            {NavBarData.map((item, index) => {
                return (
                    <Link to={item.path}>
                        <div className="navBar">
                            <img className="navBar__icon" src={isDarkMode ? item.icon[0] : item.icon[1]} alt="icono"></img>
                            <p className="navBar__text">{item.title}</p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}
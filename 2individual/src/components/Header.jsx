import React from "react";
import '../styles/Header.css'
import {Link} from "react-router-dom";

export const Header = () =>{
    const toggleDarkMode = () => {
        let elements = [...document.getElementsByClassName("background--color")];
        elements.forEach(element => {
            element.classList.toggle('background--dark');
            element.classList.toggle('background--light');
        });
        elements = [...document.getElementsByClassName("details--color")];
        elements.forEach(element => {
            element.classList.toggle('details--dark');
            element.classList.toggle('details--light');
        });
        elements = [...document.getElementsByClassName("mainText--color")];
        elements.forEach(element => {
            element.classList.toggle('mainText--dark');
            element.classList.toggle('mainText--light');
        });
        elements = [...document.getElementsByClassName("subText--color")];
        elements.forEach(element => {
            element.classList.toggle('subText--dark');
            element.classList.toggle('subText--light');
        });
        elements = [...document.getElementsByClassName("header--color")];
        elements.forEach(element => {
            element.classList.toggle('header--dark');
            element.classList.toggle('header--light');
        });
        elements = [...document.getElementsByClassName("overview--color")];
        elements.forEach(element => {
            element.classList.toggle('overview--dark');
            element.classList.toggle('overview--light');
        });
        elements = [...document.getElementsByClassName("boxes--color")];
        elements.forEach(element => {
            element.classList.toggle('boxes--dark');
            element.classList.toggle('boxes--light');
        });

    };


    return (
        <header className="header header--color header--dark">
            <div className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" id="darkSwitch" onClick={toggleDarkMode} />
                        <label className="custom-control-label" htmlFor="darkSwitch">Cambiar a Modo Oscuro</label>
            </div>
            <Link to='/'>
                <h1 className="header__text header-footer__text mainText--color mainText--dark  ">UNIR Library</h1>
            </Link>
        </header>
    );
}
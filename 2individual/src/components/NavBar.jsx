import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {SidebarData} from "../resources/data/NavBarData";
import '../styles/navBar.css'
import {LibraryContext} from "../context/LibraryContext";



export const NavBar = () => {
    const [sidebar, setSidebar] = useState(false);
    const { isDarkMode } = useContext(LibraryContext);

    return (
        <div>
                {SidebarData.map((item, index) => {
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
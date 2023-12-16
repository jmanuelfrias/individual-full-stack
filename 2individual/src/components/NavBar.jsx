import React, {useState} from "react";
import {Link} from "react-router-dom";
import {SidebarData} from "../resources/data/NavBarData";
import '../styles/navBar.css'



export const NavBar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div>
                {SidebarData.map((item, index) => {
                    return (
                         <Link to={item.path}>
                                    <div className="menu-items-box">
                                    <img className="items-box-image" src={item.icon} alt="icono"></img>
                                    <p className="items-box-text">{item.title}</p>
                                    </div>
                         </Link>
                    );
                })}
        </div>
    );
}
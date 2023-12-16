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
                                    <img src={item.icon} className="items-box-image"/>
                                    <p>{item.title}</p>
                                    </div>
                         </Link>
                    );
                })}
        </div>
    );
}
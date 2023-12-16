import React from "react";
import logo from '../resources/images/Spinner-0.5s-314px.gif'
import '../styles/Loading.css'

export const Loading = () => {
    return (
        <div >
            <img src={logo} alt="Loading..."/>
        </div>
    );
}
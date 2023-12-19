import React from "react";
import logo from '../resources/images/Spinner-0.5s-314px.gif'
import '../styles/Loading.css'

//Simbolo de Loading usado en la aplicación
export const Loading = () => {
    return (
        <div >
            <img src={logo} alt="Loading..."/>
        </div>
    );
}
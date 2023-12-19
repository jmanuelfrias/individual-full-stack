import React from 'react';
import {Link} from "react-router-dom";
import {Loading} from "../components/Loading";
import '../styles/Landing.css'
import useRedirection from "../hooks/useRedirection";

//Pantalla de entrada en la aplicación
function BookLanding() {
    useRedirection("/home", 3000);
    return (
        <div className="landing ">
            <Link to={"/home"}>
                <h1>Cargando Librería</h1>
            </Link>
            <Loading />
        </div>
    );
}

export default BookLanding;

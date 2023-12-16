import React from 'react';
import {Link} from "react-router-dom";
import {Loading} from "../components/Loading";
import useRedirection from "../hooks/useRedirection";


function BookLanding() {

    useRedirection("/books", 3000); // Redireccionamos a la vista de restaurantes en 3 segundos

    return (
        <div className="landing">
            <Link to={"/books"}> {/* Añadimos un enlace a la vista de restaurantes */}
                <h1>Bienvenidos a la biblioteca</h1>
            </Link>
            <Loading />

        </div>
    );
}

export default BookLanding;

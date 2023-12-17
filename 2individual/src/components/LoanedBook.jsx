import React from "react";
import '../styles/Book.css'
import {Link} from "react-router-dom";

export const LoanedBook= ({id,title, yearPublication, author, caratula, availability}) =>{
    return (
        <div className="bookcard">
            <h3>{title} ({yearPublication})</h3>
            <h4>{author}</h4>
            <img className="bookcard-caratula" src={caratula} alt="Portada del libro"/>
            <p>Volumenes disponibles : {availability}</p>
            <Link to={`/loan/${id}`}>
                <button>Ver detalles</button>
            </Link>
        </div>
    );
}
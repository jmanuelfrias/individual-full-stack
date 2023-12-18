import React, {useContext} from "react";
import '../styles/Book.css'
import {Link} from "react-router-dom";
import {LibraryContext} from "../context/LibraryContext";

export const Book= ({id,title, yearPublication, author, caratula, availability, loaned}) =>{

    const { books, handleDevolution } = useContext(LibraryContext);
    const book = books.find(r => r.id === id);


    return (
        <div className="bookcard">
            <h3 className="bookcard-title bookcard-text">{title} ({yearPublication})</h3>
            <h4 className="bookcard-text">{author}</h4>
            <img className="bookcard-caratula" src={caratula} alt="Portada del libro"/>
            <p className="bookcard-disponibility bookcard-text">Volumenes disponibles : {availability}</p>
            <Link to={`/books/${id}`}>
                <button className="bookcard-button">Ver detalles</button>
            </Link>
            { (loaned==="yes") ?(
                <button onClick={()=>handleDevolution(book)}>Devolver libro</button>):null
            }
        </div>
    );
}
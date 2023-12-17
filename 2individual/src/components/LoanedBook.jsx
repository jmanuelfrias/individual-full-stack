import React, {useContext} from "react";
import '../styles/LoanedBook.css'
import {Link} from "react-router-dom";
import {LibraryContext} from "../context/LibraryContext";

export const LoanedBook= ({id,title, yearPublication, author, caratula,initialDate, loanedDate, availability}) =>{

    const { books, updateBookAvailability } = useContext(LibraryContext);
    const book = books.find(r => r.id === id);

    const handleDevolution = () => {
        updateBookAvailability(book.id, book.availability + 1,"","",true);
    };



    return (
        <div className="loaned-bookcard">
            <div  className="loaned-bookcard-caratula">
                <img className="bookcard-caratula" src={caratula} alt="Portada del libro"/>
            </div>
            <div>
                <h3>{title} ({yearPublication})</h3>
                <h4>{author}</h4>
                <p>Recogido el día : {initialDate}</p>
                <p>Disponible hasta el día : {loanedDate}</p>
                <div className="loaned-bookcard-buttons">
                    <Link to={`/books/${id}`}>
                        <button>Ver detalles</button>
                    </Link>
                    <button onClick={handleDevolution}>Devolver libro</button>
                </div>

            </div>

        </div>
    );
}
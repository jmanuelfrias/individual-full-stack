import React, {useContext} from "react";
import {useParams} from "react-router-dom";
import {LibraryContext} from "../context/LibraryContext";
//import '../styles/movie.css'
import '../styles/BookDetails.css'

export const BookDetails = () => {
    const { bookId } = useParams();
    const { books } = useContext(LibraryContext);
    const book = books.find(r => r.id === bookId);

    if (!book) {
        return <h2>Ese libro no está en la biblioteca</h2>;
    }

    return (
        <div className="book-details">
            <div className="details-caratula container">
                <img className="details-caratula" src={book.caratula} alt="Carátula del libro" />
            </div>
            <div className="details-information">
                <h1>{book.title} </h1>
                <h2>{book.author}</h2>
                <p className="information-publication">Publicado por primera vez en {book.yearPublication}</p>
                <div className="information-sinopsis">
                    <p>Sinopsis: {book.sinopsis}</p>
                </div>
                <p>Género: {book.genre}</p>
                <p>Calificación: {book.puntuation} / 10</p>
                <p>Volumenes disponibles : {book.availability}</p>
                <button>Coger prestado el libro</button>
            </div>

        </div>
    );
}
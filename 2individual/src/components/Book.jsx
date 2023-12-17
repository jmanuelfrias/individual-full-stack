import React, {useContext} from "react";
import '../styles/Book.css'
import {Link} from "react-router-dom";
import {LibraryContext} from "../context/LibraryContext";

export const Book= ({id,title, yearPublication, author, caratula, availability, loaned}) =>{

    const { books, updateBookAvailability } = useContext(LibraryContext);
    const book = books.find(r => r.id === id);

    const handleDevolution = () => {
        // Update the availability with the bookId and the selected date
        // Assuming updateBookAvailability is a function that updates book availability
        updateBookAvailability(book.id, book.availability + 1,"",true);
        // Optionally, you can also log the updated availability
        console.log(`Book ${book.title} availability updated to ${book.availability + 1}`);
    };


    return (
        <div className="bookcard">
            <h3>{title} ({yearPublication})</h3>
            <h4>{author}</h4>
            <img className="bookcard-caratula" src={caratula} alt="Portada del libro"/>
            <p>Volumenes disponibles : {availability}</p>
            { (loaned==="yes") ?(
                <button onClick={handleDevolution}>devolver</button>):null
            }
            <Link to={`/books/${id}`}>
                <button>Ver detalles</button>
            </Link>
        </div>
    );
}
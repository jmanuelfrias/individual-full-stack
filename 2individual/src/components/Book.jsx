import React, {useContext} from "react";
import '../styles/Book.css'
import {Link} from "react-router-dom";
import {LibraryContext} from "../context/LibraryContext";
import {DevolverButton} from "./DevolverButton";
import {BookcardCaratula} from "./BookcardCaratula";

//Instancias de los libros en las vistas de Home y Overview central
export const Book= ({id,title, yearPublication, author, caratula, availability, loaned}) =>{

    const { isDarkMode } = useContext(LibraryContext);
    const { books } = useContext(LibraryContext);
    const book = books.find(r => r.id === id);


    return (
        <div className={`bookcard  ${isDarkMode ? "boxes--dark mainText--dark" : "boxes--light mainText--light" }` }>
            <h3 className="bookcard__title bookcard__text">{title} ({yearPublication})</h3>
            <h4 className="bookcard__text">{author}</h4>
            <BookcardCaratula image={caratula} />
            <p className="bookcard__disponibility bookcard__text">Volumenes disponibles : {availability}</p>
            <Link to={`/books/${id}`}>
                <button className="bookcard__button">Ver detalles</button>
            </Link>
            {/*Si el libro esta prestado, le añadimos un botón de devolución*/}
            { (loaned==="yes") ?(
               <DevolverButton book={book} />):null
            }
        </div>
    );
}
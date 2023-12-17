import React, {useContext, useState} from "react";
import {useParams} from "react-router-dom";
import {LibraryContext} from "../context/LibraryContext";
//import '../styles/movie.css'
import '../styles/BookDetails.css'
//import {useNavigate} from "react-router";
import {handleButtonClick, handlePopupClose} from "../hooks/usePopup";
import BookPopUp from "./BookPopUp.jsx";

export const BookDetails = () => {
    const { bookId } = useParams();
    const { books, updateBookAvailability } = useContext(LibraryContext);
    const book = books.find(r => r.id === bookId);

    const handleDevolution = () => {
        updateBookAvailability(book.id, book.availability + 1,"","",true);
    };
    //const navigate = useNavigate();
    const [isPopupVisible, setPopupVisible] = useState(false);



    if (!book) {
        return <h2>Ese libro no está en la biblioteca</h2>;
    }

    const handleBorrowButtonClick = () => {
        handleButtonClick(setPopupVisible);
        //updateBookAvailability(book.id, book.availability - 1);
    };

    const handleBorrow = (selectedDate) => {
        const today = new Date();

        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Month is zero-based, so we add 1
        const year = today.getFullYear();

        const todayFormatted = `${day}/${month}/${year}`;

         updateBookAvailability(book.id, book.availability - 1,selectedDate, todayFormatted ,false);
    };


    return (
        <div className="book-details main-div">
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
                <p>Calificación: {book.puntuation} / 5</p>
                <p>Volumenes disponibles : {book.availability}</p>

                {/*Ahora tengo control de mirar si el libro está prestado al usuario o no*/}
                {book.loaned === "no" && (
                   <div className="information-handling">
                    <button onClick={handleBorrowButtonClick}>Coger prestado el libro</button>
                    {isPopupVisible && <BookPopUp onClose={() => handlePopupClose(setPopupVisible)} onBorrow={handleBorrow} />}
                   </div>
                       )}
                    {book.loaned === "yes" && (
                    <>
                        <p className="loaned-message">Ya tienes este libro en tu biblioteca</p>
                        <button onClick={handleDevolution}>Devolver libro</button>
                    </>
                    )}

            </div>

        </div>
    );
}
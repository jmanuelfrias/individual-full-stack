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
    //const navigate = useNavigate();
    const [isPopupVisible, setPopupVisible] = useState(false);

    const book = books.find(r => r.id === bookId);


    if (!book) {
        return <h2>Ese libro no está en la biblioteca</h2>;
    }

    const handleBorrowButtonClick = () => {
        handleButtonClick(setPopupVisible);
    };

    const handleBorrow = (selectedDate) => {
        // Update the availability with the bookId and the selected date
        // Assuming updateBookAvailability is a function that updates book availability
        updateBookAvailability(book.id, book.availability - 1);
        // Optionally, you can also log the updated availability
        console.log(`Book ${book.title} availability updated to ${book.availability - 1}`);
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
                <p>Calificación: {book.puntuation} / 10</p>
                <p>Volumenes disponibles : {book.availability}</p>
                <button onClick={handleBorrowButtonClick}>Coger prestado el libro</button>
                {isPopupVisible && <BookPopUp onClose={() => handlePopupClose(setPopupVisible)} onBorrow={handleBorrow}/>}
            </div>

        </div>
    );
}
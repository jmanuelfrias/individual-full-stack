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
    const { books, updateBookAvailability,handleDevolution, handleLoan } = useContext(LibraryContext);
    const book = books.find(r => r.id === bookId);

    const [isPopupVisible, setPopupVisible] = useState(false);



    if (!book) {
        return <h2>Ese libro no está en la biblioteca</h2>;
    }

    const handleBorrowButtonClick = () => {
        handleButtonClick(setPopupVisible);
    };

    const handleBorrow = (selectedDate) => {
        handleLoan(book,selectedDate);
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

                {book.loaned === "no" && (
                   <div className="information-handling">
                    <button onClick={handleBorrowButtonClick}>Coger prestado el libro</button>
                    {isPopupVisible && <BookPopUp onClose={() => handlePopupClose(setPopupVisible)} onBorrow={handleBorrow} />}
                   </div>
                       )}
                    {book.loaned === "yes" && (
                    <>
                        <p className="loaned-message">Ya tienes este libro en tu biblioteca</p>
                        <button onClick={()=>handleDevolution(book)}>Devolver libro</button>
                    </>
                    )}

            </div>

        </div>
    );
}
import React, {useContext, useState} from "react";
import {useParams} from "react-router-dom";
import {LibraryContext} from "../context/LibraryContext";
import '../styles/BookDetails.css'
import {handleButtonClick, handlePopupClose} from "../hooks/usePopup";
import BookPopUp from "./BookPopUp.jsx";
import {DevolverButton} from "./DevolverButton";

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
        <div className="book__details main__div mainText--color mainText--dark details--color details--dark">
            <div className="details__caratula container">
                <img className="details__caratula" src={book.caratula} alt="Carátula del libro" />
            </div>
            <div className="details__information">
                <h1>{book.title} </h1>
                <h2>{book.author}</h2>
                <p className="information__publication">Publicado por primera vez en {book.yearPublication}</p>
                <div className="information__sinopsis">
                    <p>Sinopsis: {book.sinopsis}</p>
                </div>
                <p>Género: {book.genre}</p>
                <p>Calificación: {book.puntuation} / 5</p>
                <p>Volumenes disponibles : {book.availability}</p>

                {book.loaned === "no" && (
                   <div className="information__handling">
                    <button onClick={handleBorrowButtonClick}>Coger prestado el libro</button>
                    {isPopupVisible && <BookPopUp onClose={() => handlePopupClose(setPopupVisible)} onBorrow={handleBorrow} />}
                   </div>
                       )}
                    {book.loaned === "yes" && (
                    <>
                        <p className="information__loaned">Ya tienes este libro en tu biblioteca</p>
                        <DevolverButton book={book} />
                    </>
                    )}

            </div>

        </div>
    );
}
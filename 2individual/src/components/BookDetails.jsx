import React, {useContext, useState} from "react";
import {useParams} from "react-router-dom";
import {LibraryContext} from "../context/LibraryContext";
import '../styles/BookDetails.css'
import {handleButtonClick, handlePopupClose} from "../hooks/usePopup";
import BookPopUp from "./BookPopUp.jsx";
import {DevolverButton} from "./DevolverButton";
import {BookcardCaratula} from "./BookcardCaratula";

//Details del libro. También contiene la funcionalidad para pedir el libro y que acabe en nuestro prestamo
export const BookDetails = () => {
    const { isDarkMode } = useContext(LibraryContext);
    const [isPopupVisible, setPopupVisible] = useState(false);

    const { bookId } = useParams();
    const { books, handleLoan } = useContext(LibraryContext);

    //Intentar encontrar el libro que se quiere mostrar
    const book = books.find(r => r.id === bookId);
    if (!book) {
        return <h2>Ese libro no está en la biblioteca</h2>;
    }

    //Encargado de invocar el despliegue del popup para coger prestado el libro
    const handleBorrowButtonClick = () => {
        handleButtonClick(setPopupVisible);
    };

    //Si el Popup va bien y devuelve el onBorrow, invocamos la acción de coger el p´restamo
    const handleBorrow = (selectedDate) => {
        handleLoan(book,selectedDate);
    };


    return (
        <div className={`book__details main__div ${isDarkMode ? " mainText--dark details--dark" : "mainText--light details--light"}`}>
            <div className="details__caratula container">
                <BookcardCaratula image={book.caratula} />
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

                {/*Si el libro no está prestado, ponemos el botón para desplegar el popup de reserva
                   Si lo está, ponemos un mensaje de información y el botón de devolución*/}
                {book.loaned === "no" ? (
                   <div className="information__handling">
                    <button onClick={handleBorrowButtonClick}>Coger prestado el libro</button>
                       {/*Dependiendo del estado de isPopupVisible, enseñamos el popup o no.
                          Si está abierto y devuelve un handleBorrow, activamos esta función de préstamo */}
                    {isPopupVisible ?
                        (<BookPopUp onClose={() => handlePopupClose(setPopupVisible)} onBorrow={handleBorrow} />)
                        : (<></>)
                    }
                   </div>
                ) : (
                    <>
                        <p className={`information__loaned   ${isDarkMode ? "notification--dark" : "notification--light"}`}>Ya tienes este libro en tu biblioteca</p>
                        <DevolverButton book={book} />
                    </>
                )}

            </div>

        </div>
    );
}
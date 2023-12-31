import React, {useContext} from "react";
import '../styles/LoanedBook.css'
import {Link} from "react-router-dom";
import {LibraryContext} from "../context/LibraryContext";
import {DevolverButton} from "./DevolverButton";
import {BookcardCaratula} from "./BookcardCaratula";

//Bookcard de los libros prestados
export const LoanedBook= ({id,title, yearPublication, author, caratula,initialDate, loanedDate}) =>{
    const { isDarkMode } = useContext(LibraryContext);
    const { books } = useContext(LibraryContext);
    const book = books.find(r => r.id === id);


    //Comprobar si la fecha de hoy es superior a la fecha máxima de prestamo del libro
    const checkDate =() => {
        const fechaPartida = loanedDate.split('/');
        const fechaLoaned = new Date(fechaPartida[2], fechaPartida[1] - 1, fechaPartida[0]);
        const today = new Date();
        let result =false;
        if (fechaLoaned <= today){
            result =true;
        }
        return result;
    }


    return (
        <div className={`loaned__bookcard ${isDarkMode ? "mainText--dark boxes--dark": "mainText--light boxes--light"}`}>
            <div  className="loaned__bookcard__caratula">
                <BookcardCaratula image={caratula} />
            </div>
            <div>
                <h3>{title} ({yearPublication})</h3>
                <h4>{author}</h4>
                <p>Recogido el día : {initialDate}</p>
                <p className={ checkDate() ? (isDarkMode ? "error--dark" : "error--light")  : ""}>Disponible hasta el día : {loanedDate}</p>
                <div className="loaned__bookcard__buttons">
                    <Link to={`/books/${id}`}>
                        <button>Ver detalles</button>
                    </Link>
                    <DevolverButton book={book} />
                </div>

            </div>
        </div>
    );
}
import React, {useContext} from "react";
import '../styles/LoanedBook.css'
import {Link} from "react-router-dom";
import {LibraryContext} from "../context/LibraryContext";
import {DevolverButton} from "./DevolverButton";

export const LoanedBook= ({id,title, yearPublication, author, caratula,initialDate, loanedDate, availability}) =>{

    const { books, handleDevolution } = useContext(LibraryContext);
    const book = books.find(r => r.id === id);


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
        <div className="loaned__bookcard mainText--color mainText--dark boxes--color boxes--dark">
            <div  className="loaned__bookcard__caratula">
                <img className="bookcard__caratula" src={caratula} alt="Portada del libro"/>
            </div>
            <div>
                <h3>{title} ({yearPublication})</h3>
                <h4>{author}</h4>
                <p>Recogido el día : {initialDate}</p>
                <p className={ checkDate() ? "bookcard__error" : ""}>Disponible hasta el día : {loanedDate}</p>
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
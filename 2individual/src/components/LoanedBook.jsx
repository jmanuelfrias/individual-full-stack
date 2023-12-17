import React, {useContext} from "react";
import '../styles/LoanedBook.css'
import {Link} from "react-router-dom";
import {LibraryContext} from "../context/LibraryContext";

export const LoanedBook= ({id,title, yearPublication, author, caratula,initialDate, loanedDate, availability}) =>{

    const { books, updateBookAvailability } = useContext(LibraryContext);
    const book = books.find(r => r.id === id);
    const today =new Date();

    const handleDevolution = () => {
        updateBookAvailability(book.id, book.availability + 1,"","",true);
    };

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
        <div className="loaned-bookcard">
            <div  className="loaned-bookcard-caratula">
                <img className="bookcard-caratula" src={caratula} alt="Portada del libro"/>
            </div>
            <div>
                <h3>{title} ({yearPublication})</h3>
                <h4>{author}</h4>
                <p>Recogido el día : {initialDate}</p>
                <p className={ checkDate() ? "bookcard-error" : ""}>Disponible hasta el día : {loanedDate}</p>
                <div className="loaned-bookcard-buttons">
                    <Link to={`/books/${id}`}>
                        <button>Ver detalles</button>
                    </Link>
                    <button onClick={handleDevolution}>Devolver libro</button>
                </div>

            </div>

        </div>
    );
}
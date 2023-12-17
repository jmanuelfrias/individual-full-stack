import React, {useContext} from 'react';
import '../styles/styles.css';
import '../styles/Overview.css'
import {Book} from "../components/Book";

import {BookList} from "../components/BookList";
import {LibraryContext} from "../context/LibraryContext";
import {LoanedBookList} from "../components/LoanedBookList";

export const Prestamos = () => {

    const { books } = useContext(LibraryContext);

    return (
        <div className="loaned-div main-div">
            <h2 className="center-text div-header">Tienes prestados los siguientes libros </h2>
            <BookList filter="loaned"/>
        </div>
    );
}
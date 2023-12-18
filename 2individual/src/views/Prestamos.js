import React, {useContext} from 'react';
import '../styles/styles.css';
import '../styles/Overview.css'
import {Book} from "../components/Book";

import {BookList} from "../components/BookList";
import {LibraryContext} from "../context/LibraryContext";

export const Prestamos = () => {

    const { books } = useContext(LibraryContext);

    return (
        <div className="loaned main__div">
            <h2 className="center-text loaned__header">Tienes prestados los siguientes libros </h2>
            <BookList filter="loaned"/>
        </div>
    );
}
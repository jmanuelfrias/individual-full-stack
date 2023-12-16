import React, {useContext} from 'react';
import '../styles/styles.css';
import '../styles/Overview.css'
import {Book} from "../components/Book";

import {BookList} from "../components/BookList";
import {LibraryContext} from "../context/LibraryContext";

export const BookOverview = () => {

    const { books } = useContext(LibraryContext);

    return (
        <div className="overview-div">
            <h2 className="center-text div-header">Available Books</h2>
            <BookList />
        </div>
    );
}
import React, {useContext} from 'react';
import '../styles/styles.css';
import '../styles/colors/colors--dark.css'
import '../styles/colors/colors--light.css'
import '../styles/Overview.css'
import {BookList} from "../components/BookList";
import {LibraryContext} from "../context/LibraryContext";

//Vista de exposicion de los libros
export const BookOverview = () => {
    const { isDarkMode } = useContext(LibraryContext);
    return (
        <div className={`overview main__div  ${isDarkMode ? " overview--dark" : "overview--light"}  `}>
            <h2 className="center-text overview__header">Libros Disponibles</h2>
            <BookList />
        </div>
    );
}
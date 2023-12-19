import React, {useContext} from 'react';
import '../styles/styles.css';
import '../styles/Overview.css'
import {BookList} from "../components/BookList";

//Vista de los libros que nos han prestado
export const Prestamos = () => {
    return (
        <div className="loaned main__div">
            <h2 className="center-text loaned__header">Tienes prestados los siguientes libros </h2>
            <BookList filter="loaned"/>
        </div>
    );
}
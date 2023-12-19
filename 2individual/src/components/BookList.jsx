import React, {useContext, useEffect, useState} from "react";
import {Book} from "./Book";
import {LibraryContext} from "../context/LibraryContext";
import {LinearProgress} from "@mui/material";
import '../styles/BookList.css'
import Filter from "./Filter";
import {LoanedBook} from "./LoanedBook";

//Despliegue de las bookcards para las pantallas princiapales
export const BookList =({ filter }) => {
    const { books } = useContext(LibraryContext);
    const { selectedFilter } = useContext(LibraryContext);
    const { selectedSearch } = useContext(LibraryContext)

    const [showLoading, setShowLoading] = useState(true);

    //Define el tipo de libros que se van a mostrar dependiendo del parámeto filter del componente (en qué view estamos)
    const viewFilter = () => {
        if (filter === "new") {
            return books.filter(item => item.tags.toLowerCase().includes("new"));
        } else if (filter === "loaned") {
            return books.filter(item => item.loaned === "yes");
        } else {
            return books;
        }
    };

    //Aplica los filtros de la barra de filtros
    const filteredData = viewFilter().filter(item =>
        item.genre.toLowerCase().includes(selectedFilter.toLowerCase()) && item.title.includes(selectedSearch)
    );

    // Esperamos 3 segundos a que esté el filteredData disponible. Mientras tanto mostramos un icono de Loading
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowLoading(false);
        }, 3000);
        return () => {
            clearTimeout(timeoutId);
        };
    }, [filteredData]);


    return (
        <>
            <Filter />
            <div className={`book__container ${filter !== "loaned" ? "main__layout" : ""}`}>
                {showLoading ? (
                    <LinearProgress color="inherit" />
                ) : (
                    filteredData.length > 0 ? (
                        filteredData.map((book, index) => (
                            //Dependiendo de la pantalla que sea mostramos un tipo de libros u otros
                            filter === "loaned" ? (
                                    <LoanedBook
                                        key={index}
                                        id={book.id}
                                        title={book.title}
                                        yearPublication={book.yearPublication}
                                        author={book.author}
                                        caratula={book.caratula}
                                        availability={book.availability}
                                        sinopsis={book.sinopsis}
                                        genre={book.genre}
                                        puntuation={book.puntuation}
                                        loaned={book.loaned}
                                        initialDate={book.initialDate}
                                        loanedDate={book.loanedDate}
                                    />
                                ) : (
                                <Book
                                    key={index}
                                    id={book.id}
                                    title={book.title}
                                    yearPublication={book.yearPublication}
                                    author={book.author}
                                    caratula={book.caratula}
                                    availability={book.availability}
                                    sinopsis={book.sinopsis}
                                    genre={book.genre}
                                    puntuation={book.puntuation}
                                    loaned={book.loaned}
                                />
                                )
                        ))
                    ) : (
                        <h3>Lo siento, no hemos encontrado ningún libro con estas características</h3>
                    )
                )}
            </div>
        </>
    );
};

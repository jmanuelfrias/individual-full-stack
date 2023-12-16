import React, {useContext} from "react";
import {Book} from "./Book";
import {LibraryContext} from "../context/LibraryContext";
import {LinearProgress} from "@mui/material";
import '../styles/BookList.css'

export const BookList =() => {
    const { books } = useContext(LibraryContext);

    return(
        <div className="book-container">
            {
                books.length > 0 ? (
                    books.map((book, index) => (
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
                        />
                    ))
                ) : (
                    <LinearProgress color="secondary"/>
                )
            }
        </div>

    )

}


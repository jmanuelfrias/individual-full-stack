import React, {useContext} from "react";
import {Book} from "./Book";
import {LibraryContext} from "../context/LibraryContext";
import {LinearProgress} from "@mui/material";
import '../styles/BookList.css'
import Filter from "./Filter";
import {LoanedBook} from "./LoanedBook";

export const LoanedBookList =() => {
    const { books } = useContext(LibraryContext);
    const { selectedFilter } = useContext(LibraryContext);

    const filteredData = books.filter(item =>
        item.genre.toLowerCase().includes(selectedFilter.toLowerCase()) && item.loaned==="yes"
    );


    return(
        <>
            <Filter />
            <div className="book-container">
                {
                    filteredData.length > 0 ? (
                        filteredData.map((book, index) => (
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
                                selectedDate={book.selectedDate}
                            />
                        ))
                    ) : (
                        <LinearProgress color="secondary"/>
                    )
                }
            </div>

        </>
    )

}


import React, {useContext, useEffect, useState} from "react";
import {Book} from "./Book";
import {LibraryContext} from "../context/LibraryContext";
import {LinearProgress} from "@mui/material";
import '../styles/BookList.css'
import Filter from "./Filter";

export const BookList =({ filter }) => {
    const { books } = useContext(LibraryContext);
    const { selectedFilter } = useContext(LibraryContext);

    const [showLoading, setShowLoading] = useState(true);

    // Define viewFilter based on the provided filter
    const viewFilter = () => {
        if (filter === "new") {
            return books.filter(item => item.tags.toLowerCase().includes("new"));
        } else if (filter === "loaned") {
            return books.filter(item => item.loaned === "yes");
        } else {
            return books;
        }
    };

    const filteredData = viewFilter().filter(item =>
        item.genre.toLowerCase().includes(selectedFilter.toLowerCase())
    );


    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowLoading(false);
        }, 2000); // Set the timeout duration in milliseconds (e.g., 5000 milliseconds = 5 seconds)

        return () => {
            // Clear the timeout if the component unmounts or if filteredData becomes available
            clearTimeout(timeoutId);
        };
    }, [filteredData]);


    return (
        <>
            <Filter />
            <div className="book-container ">
                {showLoading ? (
                    <LinearProgress color="secondary" />
                ) : (
                    filteredData.length > 0 ? (
                        filteredData.map((book, index) => (
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
                        ))
                    ) : (
                        <h3>Lo siento, no hemos ecnontrado ningún libro con estas características</h3>
                    )
                )}
            </div>
        </>
    );
};

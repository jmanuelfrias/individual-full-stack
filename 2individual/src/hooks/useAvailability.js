// useAvailability.js
import {useCallback, useContext} from 'react';
import {LibraryContext} from "../context/LibraryContext";

//En la seccion de devolution si esta es true, quitaremos el loaned y la loanedDate
//Si lo que estamos haceidno es coger un libro, devolution sera false y marcaremos loanes a yes y pondremos un selected Date
const useAvailability = (setBooks) => {
    // Custom hook for updating book availability
    const updateBookAvailability = useCallback((bookId, newAvailability, selectedDate, today ,devolution) => {
        setBooks((prevBooks) =>
            prevBooks.map((book) =>
                book.id === bookId
                    ? devolution
                        ? { ...book, availability: newAvailability, loaned: 'no', loanedDate: '', initialDate: '' }
                        : { ...book, availability: newAvailability, loaned: 'yes', loanedDate: selectedDate, initialDate:today }
                    : book
            )
        );
    }, [setBooks]);


    const handleDevolution = useCallback((book) => {
        updateBookAvailability(book.id, book.availability + 1,"","",true);
    }, []);

    const handleLoan = useCallback((book ,selectedDate) => {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Month is zero-based, so we add 1
        const year = today.getFullYear();
        const todayFormatted = `${day}/${month}/${year}`;

        updateBookAvailability(book.id, book.availability - 1,selectedDate, todayFormatted ,false);
    }, []);

    return { updateBookAvailability, handleDevolution,handleLoan };
};

export default useAvailability;

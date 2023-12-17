// useAvailability.js
import { useCallback } from 'react';

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

    return { updateBookAvailability };
};

export default useAvailability;

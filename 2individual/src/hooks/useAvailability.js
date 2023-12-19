// useAvailability.js
import {useCallback} from 'react';

//Metodos para cotrolar la avilability de los libros
const useAvailability = (setBooks) => {

    //Utilizamos la función de setBooks para cargar los libros que ya hay en la aplicación modificando el que corresponda con el id que se pase
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

    //Para las devoluciones sumamos uno al availability del libro y quitamos las fechas
    const handleDevolution = useCallback((book) => {
        updateBookAvailability(book.id, book.availability + 1,"","",true);
    }, []);

    //Para los prestamos tenemos que calcular el día que es hoy y formatearlo a dd/mm/yyyy para incluirlo cuando cambiamos la availability
    const handleLoan = useCallback((book ,selectedDate) => {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();
        const todayFormatted = `${day}/${month}/${year}`;

        updateBookAvailability(book.id, book.availability - 1,selectedDate, todayFormatted ,false);
    }, []);

    return { updateBookAvailability, handleDevolution,handleLoan };
};

export default useAvailability;

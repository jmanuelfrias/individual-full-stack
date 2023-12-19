import {useEffect, useState} from "react";
import useAvailability from "./useAvailability";
import {BookData} from "../resources/data/BookData";

//Todos los métodos relacionados con los libros de la libreria
export const useBooks = () => {
    let [books, setBooks] = useState([]);

    //Simula que tardamos 1 segundo en obtener los libros de la base de datos o del API
    useEffect(() => {
        setTimeout(() => {
            setBooks([
                ...BookData
            ]);
        }, 1000);
    }, []);

    //Incluye en este hook, los metodos de cambio de disponibilidad
    const {updateBookAvailability,handleDevolution,handleLoan} = useAvailability(setBooks);

    return {books, setBooks,updateBookAvailability,handleDevolution,handleLoan};
}
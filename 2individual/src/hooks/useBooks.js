import {useEffect, useState} from "react";
import useAvailability from "./useAvailability";
import {BookData} from "../resources/data/BookData";

export const useBooks = () => {
    let [books, setBooks] = useState([]);



    useEffect(() => {

        setTimeout(() => {
            setBooks([
                ...BookData
            ]);
        }, 1000);
    }, []);

    const {updateBookAvailability,handleDevolution,handleLoan} = useAvailability(setBooks);


    return {books, setBooks,updateBookAvailability,handleDevolution,handleLoan};

}
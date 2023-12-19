import React, {useContext} from "react";
import {LibraryContext} from "../context/LibraryContext";

//Botón que llama al hook para devolver un libro. Usado en todos los cards de libros
export const DevolverButton = ({book}) => {
    const { handleDevolution } = useContext(LibraryContext);

    return (
        <>
            <button onClick={()=>handleDevolution(book)}>Devolver libro</button>
        </>
    );

}


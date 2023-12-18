import React, {useContext} from "react";
import {LibraryContext} from "../context/LibraryContext";


export const DevolverButton = ({book}) => {
    const { handleDevolution } = useContext(LibraryContext);

    return (
        <>
            <button onClick={()=>handleDevolution(book)}>Devolver libro</button>
        </>
    );

}


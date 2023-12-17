import React from "react";
import '../styles/styles.css';


export const BooksHelp=() =>{

    return (
        <div className="help-div main-div container">
            <h1>Sección de ayuda</h1>
            <p>Para tomar prestado un libro, sigue los siguientes pasos:</p>
            <ol>
                <li>Selecciona la opción "Libros" en la barra de navegación de la izquierda</li>
                <li>En el libro que parezca más interesante, haz click en detalles</li>
                <li>Una vez se hayan desplegado sus detalles, haz click en tomar prestado</li>
                <li> Tras esto, el libro aparecerá en la sección de "Préstamos"</li>
            </ol>
        </div>


    );
}


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
                <li>Una vez se hayan desplegado sus detalles, haz click en "Coger Prestado el libro"</li>
                <li> Ponga la fecha hasta que la que desea tener el libro</li>
                <li> Haga click en "Pedir Préstamo"</li>
                <li> Tras esto, el libro aparecerá en la sección de "Préstamos"</li>
            </ol>
            <p>Para devolver los libros solo tienes que:</p>
            <ol>
                <li>Ir a cualquier página con libros desplegados</li>
                <li>Hacer click en el botón de "Devolver Libro"</li>
            </ol>
        </div>


    );
}


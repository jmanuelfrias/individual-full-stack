import React from "react";
import '../styles/styles.css';


export const BookHomePage=() =>{

    return (
      <div className="home-div container">
          <h1>Bienvenido a la UNIR Library!!</h1>
          <p>Aquí podrás tomar prestado libros durante un período de tiempo</p>
          <p>Para tomar prestado un libro, sigue los siguientes pasos:</p>
          <ol>
              <li>Selecciona la opción "Libros" en la barra de navegación de la izquierda</li>
              <li>Haz Click en el libro que parezca más interesante</li>
              <li>Una vez se hayan desplegado sus detalles, haz click en tomar prestado</li>
              <li> Tras esto, el libro aparecerá en la sección de "Préstamos"</li>
          </ol>
      </div>


    );
}


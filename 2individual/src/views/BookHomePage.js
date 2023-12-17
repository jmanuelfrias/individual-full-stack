import React from "react";
import '../styles/styles.css';
import '../styles/Home.css'
import {BookList} from "../components/BookList";


export const BookHomePage=() =>{

    return (
      <div className="home-div container main-div">
          <h1>Bienvenido a la UNIR Library!!</h1>
          <div className="home-libros">
              <div className="libros-informacion">
                  <p>Aquí podrás tomar prestado libros durante un período de tiempo</p>
                  <p>Para tomar prestado un libro, sigue los siguientes pasos:</p>
                  <ol>
                      <li>Selecciona la opción "Libros" en la barra de navegación de la izquierda</li>
                      <li>En el libro que parezca más interesante, haz click en detalles</li>
                      <li>Una vez se hayan desplegado sus detalles, haz click en "Coger Prestado el libro"</li>
                      <li> Ponga la fecha hasta que la que desea tener el libro</li>
                      <li> Haga click en "Pedir Préstamo"</li>
                      <li> Tras esto, el libro aparecerá en la sección de "Préstamos"</li>
                  </ol>
              </div>
              <div className="libros-nuevos">
                  <h2 className="center-text">Mira las novedades que hemos traído</h2>
                  <BookList filter="new"/>
              </div>


          </div>

      </div>


    );
}


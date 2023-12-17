import React from "react";
import '../styles/styles.css';
import '../styles/Home.css'
import {BookList} from "../components/BookList";


export const BookHomePage=() =>{

    return (
      <div className="home-div container main-div">
          <h1>Bienvenido a la UNIR Library!!</h1>
          <p>Aquí podrás tomar prestado libros durante un período de tiempo</p>
          <div className="home-libros">
              <h2>Mira las novedades que hemos traído</h2>
              <BookList filter="new"/>

          </div>

      </div>


    );
}


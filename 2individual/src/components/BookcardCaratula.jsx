import React from "react";
import '../styles/BookcardCaratula.css'

//Foto del libro que poner en las bookcards y en el details
export const BookcardCaratula = ({image}) => {
    return(
      <>
          <img className="bookcard__caratula" src={image} alt="Portada del libro"/>
      </>
    );

}

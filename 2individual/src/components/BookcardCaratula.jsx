import React from "react";
import '../styles/BookcardCaratula.css'

export const BookcardCaratula = ({image}) => {
    return(
      <>
          <img className="bookcard__caratula" src={image} alt="Portada del libro"/>
      </>
    );

}

import React, {useContext, useState} from 'react';
import '../styles/BookPopUp.css';
import {LibraryContext} from "../context/LibraryContext";

//Popup que aparece en la parte de detalles, para reservar en una fecha
const BookPopUp = ({ onClose, onBorrow }) => {
    const { error, setError, validateDate} = useContext(LibraryContext)
    const { isDarkMode } = useContext(LibraryContext);

    //Usado para la actualización de los valores del input de fecha
    const [datepickerValue, setDatepickerValue] = useState('');


    //Valida que la fecha esté bien y si no hay problemas, manda el onBorrow para que se ejecute en BookDetails
    const handleLoanRequest = () => {
        if(validateDate(datepickerValue)){
            setError('');
            onBorrow(datepickerValue);
            onClose();
        }
    };

    //Funcion a ejecutar cuando se cierra el Popup
    const handleClose =() => {
        setError('');
        onClose();
    }

    return (
        <div className="popup">
            <p>Seleccione hasta qué fecha quiere tener prestado el libro</p>
            <div className="popup__botones">
                <div className="botones__datepicker">
                    <input
                        id='datepicker'
                        type="text"
                        placeholder="Select a date"
                        value={datepickerValue}
                        onChange={(e) => setDatepickerValue(e.target.value)}
                    />
                    <p className={`datepicker__error ${isDarkMode ? "error--dark" : "error--light"}`}>{error}</p>
                </div>
                <div className="botones__control">
                    <button className="control__boton" onClick={handleClose}>
                        Close
                    </button>
                    <button className="control__boton" onClick={handleLoanRequest}>
                        Pedir Prestamo
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookPopUp;

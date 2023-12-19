import React, {useContext, useState} from 'react';
import '../styles/BookPopUp.css';
import {LibraryContext} from "../context/LibraryContext";

const BookPopUp = ({ onClose, onBorrow }) => {
    const [datepickerValue, setDatepickerValue] = useState('');
    const { error, setError, validateDate} = useContext(LibraryContext)
    const { isDarkMode } = useContext(LibraryContext);


    const handleLoanRequest = () => {
        if(validateDate(datepickerValue)){
            setError('');
            onBorrow(datepickerValue);
            onClose();
        }
    };

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

import React, { useState } from 'react';
import '../styles/Popup.css';

const handleLoanAction = (value) => {
    console.log('Handling loan action for date:', value);    // Add your logic for using loans with the selected date here
};

const BookPopUp = ({ onClose, onBorrow }) => {
    const [datepickerValue, setDatepickerValue] = useState('');

    const handleLoanRequest = () => {
        // Assuming onBorrow is a function that updates book availability
        onBorrow(datepickerValue);
        onClose();
    };

    return (
        <div className="popup">
            <p>Seleccione hasta qué fecha quiere tener prestado el libro</p>
            <div className="popup-botones">
                <div className="botones-datepicker">
                    <input
                        id="datepicker"
                        type="text"
                        placeholder="Select a date"
                        value={datepickerValue}
                        onChange={(e) => setDatepickerValue(e.target.value)}
                    />
                </div>
                <div className="botones-control">
                    <button className="botones-control-boton" onClick={onClose}>
                        Close
                    </button>
                    <button className="botones-control-boton" onClick={handleLoanRequest}>
                        Pedir Prestamo
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookPopUp;

// Popup.js
import React from 'react';
import { handlePopupClose } from '../hooks/usePopup';

const BookPopUp = ({ onClose }) => {
    return (
        <div className="popup">
            <p>Seleccione hasta que fecha quiere tener prestado el libro</p>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default BookPopUp;

// Popup.js
import React, {useState} from 'react';
import { handlePopupClose } from '../hooks/usePopup';

import DatePicker from 'react-datepicker';

const BookPopUp = ({ onClose }) => {
    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <div className="popup">
            <p>Seleccione hasta que fecha quiere tener prestado el libro</p>
            <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy" // Customize the date format
            />
            <button onClick={onClose}>Close</button>
            <p>prueda</p>
        </div>
    );
};

export default BookPopUp;

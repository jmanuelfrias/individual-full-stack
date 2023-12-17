// usePopup.js
import React, {useContext} from 'react';
import {LibraryContext} from "../context/LibraryContext";

export const handleButtonClick = (setPopupVisible) => {
    setPopupVisible(true);
};

export const handlePopupClose = (setPopupVisible) => {
    setPopupVisible(false);
};

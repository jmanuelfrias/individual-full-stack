// popupHandlers.js
import React from 'react';

export const handleButtonClick = (setPopupVisible) => {
    setPopupVisible(true);
};

export const handlePopupClose = (setPopupVisible) => {
    setPopupVisible(false);
};

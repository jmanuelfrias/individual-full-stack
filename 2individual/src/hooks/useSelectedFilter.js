import {createContext, useContext, useState, useCallback, useEffect} from 'react';
import {LibraryContext} from "../context/LibraryContext";

//Funciones para actualizar la vista según el filtro usado
export const useSelectedFilter=() => {
    const [selectedFilter, setSelectedFilter] = useState('');

    let updateSelectedFilter = useCallback((newValue) => {
        setSelectedFilter(newValue);
    }, []);

    return {selectedFilter, updateSelectedFilter};


}

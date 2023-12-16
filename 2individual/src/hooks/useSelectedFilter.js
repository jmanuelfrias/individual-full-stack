import {createContext, useContext, useState, useCallback, useEffect} from 'react';
import {LibraryContext} from "../context/LibraryContext";
export const useSelectedFilter = () => {


    const [selectedFilter, setSelectedFilter] = useState('');

    const updateSelectedFilter = useCallback((newValue) => {
            setSelectedFilter(newValue);
        }, []);

    return updateSelectedFilter;
};

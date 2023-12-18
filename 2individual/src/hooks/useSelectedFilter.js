import { useState, useCallback} from 'react';

//Funciones para actualizar la vista según el filtro usado
export const useSelectedFilter=() => {
    const [selectedFilter, setSelectedFilter] = useState('');

    let updateSelectedFilter = useCallback((newValue) => {
        setSelectedFilter(newValue);
    }, []);

    return {selectedFilter, updateSelectedFilter};


}

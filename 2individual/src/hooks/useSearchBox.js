
//Funciones para actualizar la vista según la busqueda en la caja
import {useCallback, useState} from "react";

export const useSearchBox=() => {
    const [selectedSearch, setSelectedSearch] = useState('');

    let updateSearchBox = useCallback((newValue) => {
        setSelectedSearch(newValue);
    }, []);

    return {selectedSearch, updateSearchBox};


}

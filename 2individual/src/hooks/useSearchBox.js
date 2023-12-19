
//Funciones para actualizar la vista según la busqueda en la caja
import {useCallback, useState} from "react";

//Hook con el estado de la SeachBox para ser usado por los componentes y la función para cambiarlo
export const useSearchBox=() => {
    const [selectedSearch, setSelectedSearch] = useState('');

    let updateSearchBox = useCallback((newValue) => {
        setSelectedSearch(newValue);
    }, []);

    return {selectedSearch, updateSearchBox};


}

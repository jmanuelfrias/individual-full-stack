import {useCallback, useState} from "react";

//Hook para tener acceso a la variable del DarkMode de modo global con posibilidad de alterar su valor
export const useDarkMode =() => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode =useCallback( () => {
        setIsDarkMode(prevMode => !prevMode);
    },[]);

    return {isDarkMode,toggleDarkMode}
}
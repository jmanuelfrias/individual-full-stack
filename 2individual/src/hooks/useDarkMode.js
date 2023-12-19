import {useCallback, useState} from "react";


export const useDarkMode =() => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode =useCallback( () => {
        setIsDarkMode(prevMode => !prevMode);
    },[]);

    return {isDarkMode,toggleDarkMode}
}
import {useCallback, useState} from "react";


export const useDateValidator = () => {
    const [error, setError] = useState(null)


    let validateDate= useCallback((date)=> {
        const dateRegex = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;
        let result=true;
        if (!dateRegex.test(date)) {
            setError('Por favor, respete el formato "dd/mm/yyyy".');
            result= false;
        }
        else {
            const selectedDate = new Date(
                parseInt(date.split('/')[2]),
                parseInt(date.split('/')[1]) - 1, // Months are zero-indexed
                parseInt(date.split('/')[0])
            );
            const today = new Date();
            if(selectedDate <= today) {
                setError('No puede poner como fecha máxima un día anterior a hoy.');
                result=false;
            }else {
                setError("");
            }
        }
        return result;
    },[]);

    return {error,validateDate,setError}
}

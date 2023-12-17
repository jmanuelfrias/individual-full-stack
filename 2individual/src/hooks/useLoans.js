import {useEffect, useState} from "react";

export const useLoans = () => {
    const [loans, setLoans] = useState([]);
    useEffect(() => {
        //fetch(process.env.REACT_APP_GW_URL).then((res) => res.json()).then((res) => setRestaurants(res));
            setLoans([
                { id: "0",title: "Terror 1", author: "Stephen King", yearPublication:"2014",   caratula:"https://random.imagecdn.app/200/250", availability: "4", sinopsis: "Tras un Black Friday en el que se producen disturbios que acaban en tragedia, un misterioso asesino aterroriza Plymouth, en Massachusetts." , genre: "Terror", puntuation: "6.0", tags:"New release" ,loaned: "no"},
            ]);
    }, []);



    return loans;

}
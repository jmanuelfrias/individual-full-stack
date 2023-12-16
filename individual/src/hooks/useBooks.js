import {useEffect, useState} from "react";

export const useBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        //fetch(process.env.REACT_APP_GW_URL).then((res) => res.json()).then((res) => setRestaurants(res));

        setTimeout(() => {
            setBooks([
                { id: "0",title: "Black Friday", author: "Stephen King", yearPublication:"2014",   caratula:"https://random.imagecdn.app/200/250", availability: "4", sinopsis: "Tras un Black Friday en el que se producen disturbios que acaban en tragedia, un misterioso asesino aterroriza Plymouth, en Massachusetts." , genre: "Terror", puntuation: "6.0" },
                { id: "1",title: "Black Friday", author: "Stephen King", yearPublication:"2014",   caratula:"https://random.imagecdn.app/200/251", availability: "4", sinopsis: "Tras un Black Friday en el que se producen disturbios que acaban en tragedia, un misterioso asesino aterroriza Plymouth, en Massachusetts." , genre: "Terror", puntuation: "6.0" },
                { id: "2",title: "Black Friday", author: "Stephen King", yearPublication:"2014",   caratula:"https://random.imagecdn.app/200/252", availability: "4", sinopsis: "Tras un Black Friday en el que se producen disturbios que acaban en tragedia, un misterioso asesino aterroriza Plymouth, en Massachusetts." , genre: "Terror", puntuation: "6.0" },
                { id: "3",title: "Black Friday", author: "Stephen King", yearPublication:"2014",   caratula:"https://random.imagecdn.app/200/253", availability: "4", sinopsis: "Tras un Black Friday en el que se producen disturbios que acaban en tragedia, un misterioso asesino aterroriza Plymouth, en Massachusetts." , genre: "Terror", puntuation: "6.0" },
                { id: "4",title: "Black Friday", author: "Stephen King", yearPublication:"2014",   caratula:"https://random.imagecdn.app/200/254", availability: "4", sinopsis: "Tras un Black Friday en el que se producen disturbios que acaban en tragedia, un misterioso asesino aterroriza Plymouth, en Massachusetts." , genre: "Terror", puntuation: "6.0" },
                { id: "5",title: "Black Friday", author: "Stephen King", yearPublication:"2014",   caratula:"https://random.imagecdn.app/200/255", availability: "4", sinopsis: "Tras un Black Friday en el que se producen disturbios que acaban en tragedia, un misterioso asesino aterroriza Plymouth, en Massachusetts." , genre: "Terror", puntuation: "6.0" },
                { id: "6",title: "Black Friday", author: "Stephen King", yearPublication:"2014",   caratula:"https://random.imagecdn.app/200/258", availability: "4", sinopsis: "Tras un Black Friday en el que se producen disturbios que acaban en tragedia, un misterioso asesino aterroriza Plymouth, en Massachusetts." , genre: "Terror", puntuation: "6.0" },
                { id: "7",title: "Black Friday", author: "Stephen King", yearPublication:"2014",   caratula:"https://random.imagecdn.app/200/257", availability: "4", sinopsis: "Tras un Black Friday en el que se producen disturbios que acaban en tragedia, un misterioso asesino aterroriza Plymouth, en Massachusetts." , genre: "Terror", puntuation: "6.0" },
                { id: "8",title: "Black Friday", author: "Stephen King", yearPublication:"2014",   caratula:"https://random.imagecdn.app/200/259", availability: "4", sinopsis: "Tras un Black Friday en el que se producen disturbios que acaban en tragedia, un misterioso asesino aterroriza Plymouth, en Massachusetts." , genre: "Terror", puntuation: "6.0" },
                { id: "9",title: "Black Friday", author: "Stephen King", yearPublication:"2014",   caratula:"https://random.imagecdn.app/201/250", availability: "4", sinopsis: "Tras un Black Friday en el que se producen disturbios que acaban en tragedia, un misterioso asesino aterroriza Plymouth, en Massachusetts." , genre: "Terror", puntuation: "6.0" },
                { id: "10",title: "Black Friday", author: "Stephen King", yearPublication:"2014",   caratula:"https://random.imagecdn.app/202/250", availability: "4", sinopsis: "Tras un Black Friday en el que se producen disturbios que acaban en tragedia, un misterioso asesino aterroriza Plymouth, en Massachusetts." , genre: "Terror", puntuation: "6.0" },
                { id: "11",title: "Black Friday", author: "Stephen King", yearPublication:"2014",   caratula:"https://random.imagecdn.app/203/250", availability: "4", sinopsis: "Tras un Black Friday en el que se producen disturbios que acaban en tragedia, un misterioso asesino aterroriza Plymouth, en Massachusetts." , genre: "Terror", puntuation: "6.0" },
                { id: "12",title: "Black Friday", author: "Stephen King", yearPublication:"2014",   caratula:"https://random.imagecdn.app/204/250", availability: "4", sinopsis: "Tras un Black Friday en el que se producen disturbios que acaban en tragedia, un misterioso asesino aterroriza Plymouth, en Massachusetts." , genre: "Terror", puntuation: "6.0" },
                { id: "13",title: "Black Friday", author: "Stephen King", yearPublication:"2014",   caratula:"https://random.imagecdn.app/205/250", availability: "4", sinopsis: "Tras un Black Friday en el que se producen disturbios que acaban en tragedia, un misterioso asesino aterroriza Plymouth, en Massachusetts." , genre: "Terror", puntuation: "6.0" },
                { id: "14",title: "Black Friday", author: "Stephen King", yearPublication:"2014",   caratula:"https://random.imagecdn.app/206/250", availability: "4", sinopsis: "Tras un Black Friday en el que se producen disturbios que acaban en tragedia, un misterioso asesino aterroriza Plymouth, en Massachusetts." , genre: "Terror", puntuation: "6.0" },
                { id: "15",title: "Black Friday", author: "Stephen King", yearPublication:"2014",   caratula:"https://random.imagecdn.app/207/250", availability: "4", sinopsis: "Tras un Black Friday en el que se producen disturbios que acaban en tragedia, un misterioso asesino aterroriza Plymouth, en Massachusetts." , genre: "Terror", puntuation: "6.0" },

            ]);
        }, 2500);
    }, []);

    return books;

}
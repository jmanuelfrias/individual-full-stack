import {useEffect, useState} from "react";

export const useBooks = () => {
    let [books, setBooks] = useState([]);



    useEffect(() => {
        //fetch(process.env.REACT_APP_GW_URL).then((res) => res.json()).then((res) => setRestaurants(res));

        setTimeout(() => {
            setBooks([
                { id: "0",title: "Terror 1", author: "Stephen King", yearPublication:"2014",   caratula:"https://random.imagecdn.app/200/250", availability: "4", sinopsis: "Tras un Black Friday en el que se producen disturbios que acaban en tragedia, un misterioso asesino aterroriza Plymouth, en Massachusetts." , genre: "Terror", puntuation: "6.0", tags:"New release" ,loaned: "no",selectedDate:""},
                { id: "1",title: "Romántica 1", author: "Stephen King", yearPublication:"2014",   caratula:"https://random.imagecdn.app/200/251", availability: "4", sinopsis: "Tras un Black Friday en el que se producen disturbios que acaban en tragedia, un misterioso asesino aterroriza Plymouth, en Massachusetts." , genre: "Romántica", puntuation: "6.0", tags:"" ,loaned: "no",selectedDate:""},
                { id: "2",title: "Histórica 1", author: "Stephen King", yearPublication:"2014",   caratula:"https://random.imagecdn.app/200/252", availability: "4", sinopsis: "Tras un Black Friday en el que se producen disturbios que acaban en tragedia, un misterioso asesino aterroriza Plymouth, en Massachusetts." , genre: "Histórica", puntuation: "6.0", tags:"" ,loaned: "no",selectedDate:""},
                { id: "3",title: "Thriller 1", author: "Stephen King", yearPublication:"2014",   caratula:"https://random.imagecdn.app/200/253", availability: "4", sinopsis: "Tras un Black Friday en el que se producen disturbios que acaban en tragedia, un misterioso asesino aterroriza Plymouth, en Massachusetts." , genre: "Thriller", puntuation: "6.0", tags:"" ,loaned: "no",selectedDate:""},
                { id: "4",title: "Terror 2", author: "Stephen King", yearPublication:"2014",   caratula:"https://random.imagecdn.app/200/254", availability: "4", sinopsis: "Tras un Black Friday en el que se producen disturbios que acaban en tragedia, un misterioso asesino aterroriza Plymouth, en Massachusetts." , genre: "Terror", puntuation: "6.0", tags:"" ,loaned: "no",selectedDate:""},
                { id: "5",title: "Thriller 2", author: "Stephen King", yearPublication:"2014",   caratula:"https://random.imagecdn.app/200/255", availability: "4", sinopsis: "Tras un Black Friday en el que se producen disturbios que acaban en tragedia, un misterioso asesino aterroriza Plymouth, en Massachusetts." , genre: "Thiller", puntuation: "6.0", tags:"" ,loaned: "no",selectedDate:""},
                { id: "6",title: "Fantasía 1", author: "Stephen King", yearPublication:"2014",   caratula:"https://random.imagecdn.app/200/258", availability: "4", sinopsis: "Tras un Black Friday en el que se producen disturbios que acaban en tragedia, un misterioso asesino aterroriza Plymouth, en Massachusetts." , genre: "Fantasía", puntuation: "6.0", tags:"" ,loaned: "no",selectedDate:""},
                { id: "7",title: "Fantasía 2", author: "Stephen King", yearPublication:"2014",   caratula:"https://random.imagecdn.app/200/257", availability: "4", sinopsis: "Tras un Black Friday en el que se producen disturbios que acaban en tragedia, un misterioso asesino aterroriza Plymouth, en Massachusetts." , genre: "Fantasía", puntuation: "6.0", tags:"" ,loaned: "no",selectedDate:""},
                { id: "8",title: "Fantasía 3", author: "Stephen King", yearPublication:"2014",   caratula:"https://random.imagecdn.app/200/259", availability: "4", sinopsis: "Tras un Black Friday en el que se producen disturbios que acaban en tragedia, un misterioso asesino aterroriza Plymouth, en Massachusetts." , genre: "Fantasía", puntuation: "6.0", tags:"",loaned: "no",selectedDate:""},
                { id: "9",title: "Histórica 2", author: "Stephen King", yearPublication:"2014",   caratula:"https://random.imagecdn.app/201/250", availability: "4", sinopsis: "Tras un Black Friday en el que se producen disturbios que acaban en tragedia, un misterioso asesino aterroriza Plymouth, en Massachusetts." , genre: "Histórica", puntuation: "6.0", tags:"" ,loaned: "no",selectedDate:""},
                { id: "10",title: "Fantasía 4", author: "Stephen King", yearPublication:"2014",   caratula:"https://random.imagecdn.app/202/250", availability: "4", sinopsis: "Tras un Black Friday en el que se producen disturbios que acaban en tragedia, un misterioso asesino aterroriza Plymouth, en Massachusetts." , genre: "Fantasía", puntuation: "6.0", tags:"New release" ,loaned: "no",selectedDate:""},
                { id: "11",title: "Terror 3", author: "Stephen King", yearPublication:"2014",   caratula:"https://random.imagecdn.app/203/250", availability: "4", sinopsis: "Tras un Black Friday en el que se producen disturbios que acaban en tragedia, un misterioso asesino aterroriza Plymouth, en Massachusetts." , genre: "Terror", puntuation: "6.0", tags:"" ,loaned: "no",selectedDate:""},
                { id: "12",title: "Terror 4", author: "Stephen King", yearPublication:"2014",   caratula:"https://random.imagecdn.app/204/250", availability: "4", sinopsis: "Tras un Black Friday en el que se producen disturbios que acaban en tragedia, un misterioso asesino aterroriza Plymouth, en Massachusetts." , genre: "Terror", puntuation: "6.0", tags:"" ,loaned: "no",selectedDate:""},
                { id: "13",title: "Terror 5", author: "Stephen King", yearPublication:"2014",   caratula:"https://random.imagecdn.app/205/250", availability: "4", sinopsis: "Tras un Black Friday en el que se producen disturbios que acaban en tragedia, un misterioso asesino aterroriza Plymouth, en Massachusetts." , genre: "Terror", puntuation: "6.0", tags:"" ,loaned: "no",selectedDate:""},
                { id: "14",title: "Terror 6", author: "Stephen King", yearPublication:"2014",   caratula:"https://random.imagecdn.app/206/250", availability: "4", sinopsis: "Tras un Black Friday en el que se producen disturbios que acaban en tragedia, un misterioso asesino aterroriza Plymouth, en Massachusetts." , genre: "Terror", puntuation: "6.0", tags:"" ,loaned: "no",selectedDate:""},
                { id: "15",title: "Terror 7", author: "Stephen King", yearPublication:"2014",   caratula:"https://random.imagecdn.app/207/250", availability: "4", sinopsis: "Tras un Black Friday en el que se producen disturbios que acaban en tragedia, un misterioso asesino aterroriza Plymouth, en Massachusetts." , genre: "Terror", puntuation: "6.0", tags:"" ,loaned: "no",selectedDate:""},

            ]);
        }, 2500);
    }, []);

    const updateBookAvailability = (bookId, newAvailability, selectedDate, devolution) => {
        setBooks((prevBooks) =>
            prevBooks.map((book) =>
                book.id === bookId ? devolution
                    ? { ...book, availability: newAvailability, loaned:"", loanedDate: "" }
                        : { ...book, availability: newAvailability, loaned:"yes", loanedDate: selectedDate }
                    : book
            )
        );
    };

    return {books, setBooks, updateBookAvailability};

}
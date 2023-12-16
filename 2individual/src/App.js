import React, {useCallback, useEffect, useState} from 'react';
import GlobalRouter from "./routes/GlobalRouter";
import {RestaurantContext} from "./context/RestaurantContext";
import {Footer} from "./components/Footer";
import {useRestaurants} from "./hooks/useRestaurants";
import {useBooks} from "./hooks/useBooks";
import {LibraryContext} from "./context/LibraryContext";
import BookRouter from "./routes/BookRouter";

function App() {

  /* const restaurants = useRestaurants();

    return (
        <RestaurantContext.Provider value={{restaurants}}>
            <GlobalRouter></GlobalRouter>
            <Footer />
        </RestaurantContext.Provider>
    );*/

    const books = useBooks();

    //Funciones para actualizar el valor del filtro guardado
    const [selectedFilter, setSelectedFilter] = useState('');
    let updateSelectedFilter = useCallback((newValue) => {
        setSelectedFilter(newValue);
    }, []);


    return (
        <LibraryContext.Provider value={{books , selectedFilter , updateSelectedFilter}}>
            <BookRouter></BookRouter>
            <Footer />
        </LibraryContext.Provider>
    )
}

export default App;

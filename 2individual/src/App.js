import React, {useEffect, useState} from 'react';
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

    return (
        <LibraryContext.Provider value={{books}}>
            <BookRouter></BookRouter>
            <Footer />
        </LibraryContext.Provider>
    )
}

export default App;

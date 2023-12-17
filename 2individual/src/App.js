import React, {useCallback, useEffect, useState} from 'react';
import GlobalRouter from "./routes/GlobalRouter";
import {RestaurantContext} from "./context/RestaurantContext";
import {Footer} from "./components/Footer";
import {useRestaurants} from "./hooks/useRestaurants";
import {useBooks} from "./hooks/useBooks";
import {LibraryContext} from "./context/LibraryContext";
import BookRouter from "./routes/BookRouter";
import {useSelectedFilter} from "./hooks/useSelectedFilter";
import {useSearchBox} from "./hooks/useSearchBox";
import {useDateValidator} from "./hooks/useDateValidator";

function App() {

    const {books, setBooks, updateBookAvailability} = useBooks();
    const {selectedFilter, updateSelectedFilter} = useSelectedFilter();
    const {selectedSearch, updateSearchBox} = useSearchBox();
    const { error, setError, validateDate } = useDateValidator();

    return (
        <LibraryContext.Provider value={{books ,updateBookAvailability, selectedFilter, updateSelectedFilter, selectedSearch, updateSearchBox, error, validateDate, setError }}>
            <BookRouter></BookRouter>
            <Footer />
        </LibraryContext.Provider>
    )
}

export default App;

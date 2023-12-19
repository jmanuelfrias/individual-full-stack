import React, {useCallback, useEffect, useState} from 'react';
import {Footer} from "./components/Footer";
import {useBooks} from "./hooks/useBooks";
import {LibraryContext} from "./context/LibraryContext";
import BookRouter from "./routes/BookRouter";
import {useSelectedFilter} from "./hooks/useSelectedFilter";
import {useSearchBox} from "./hooks/useSearchBox";
import {useDateValidator} from "./hooks/useDateValidator";
import {useDarkMode} from "./hooks/useDarkMode";

function App() {

    const {books, updateBookAvailability, handleDevolution,handleLoan} = useBooks();
    const {selectedFilter, updateSelectedFilter} = useSelectedFilter();
    const {selectedSearch, updateSearchBox} = useSearchBox();
    const { error, setError, validateDate } = useDateValidator();
    const {isDarkMode,toggleDarkMode} = useDarkMode();

    return (
        <LibraryContext.Provider value={{books, updateBookAvailability ,handleDevolution,handleLoan, selectedFilter, updateSelectedFilter, selectedSearch, updateSearchBox, error, validateDate, setError, isDarkMode,toggleDarkMode }}>
            <BookRouter></BookRouter>
            <Footer />
        </LibraryContext.Provider>
    )
}

export default App;

import React, {useContext} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from '../views/NotFound';
import {BookOverview } from "../views/BookOverview";
import {Header} from "../components/Header";
import {NavBar} from "../components/NavBar";
import '../styles/Layout.css'
import {BookDetails} from "../components/BookDetails";
import BookLanding from "../views/BookLanding";
import {BooksHelp} from "../views/BooksHelp";
import {BookHomePage} from "../views/BookHomePage";
import {Prestamos} from "../views/Prestamos";
import {LibraryContext} from "../context/LibraryContext";

function BookRouter() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BookLanding />} />
                <Route path="/home" element={<Layout><BookHomePage /></Layout>} />
                <Route path="/books" element={<Layout><BookOverview /></Layout>} />
                <Route path="/books/:bookId" element={<Layout><BookDetails /></Layout>} />
                <Route path="/loans" element={<Layout><Prestamos /></Layout>} />
                <Route path="/help" element={<Layout><BooksHelp /></Layout>} />
                <Route path="*" element={<Layout><NotFound /></Layout>} />
            </Routes>
        </BrowserRouter>
    );
}

const Layout = ({ children }) => {
    const { isDarkMode } = useContext(LibraryContext);

    return (
        <>
            <Header />
            <div className={`layout ${isDarkMode ? "subText--dark background--dark" : "subText--light background--light"}`}>
                <div className="mainLayout-navBar">
                    <NavBar />
                </div>
                <div className="mainLayout-children">
                    {children}
                </div>
            </div>
        </>
    );
}

export default BookRouter;

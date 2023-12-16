import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from '../views/Landing';
import NotFound from '../views/NotFound';
import {BookOverview } from "../views/BookOverview";
import {Header} from "../components/Header";
import {NavBar} from "../components/NavBar";
import '../styles/Layout.css'
import {BookDetails} from "../components/BookDetails";
import BookLanding from "../views/BookLanding";

function BookRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BookLanding />} />
                <Route path="/books" element={<Layout><BookOverview /></Layout>} />
                <Route path="/books/:bookId" element={<Layout><BookDetails /></Layout>} />
                <Route path="*" element={<Layout><NotFound /></Layout>} />
            </Routes>
        </BrowserRouter>
    );
}

const Layout = ({children}) => (
    <>
        <Header />
        <div className="layout">
            <div className="mainLayout-navBar">
                <NavBar />
            </div>
            <div className="mainLayout-children">
                {children}
            </div>
        </div>
    </>
);

export default BookRouter;

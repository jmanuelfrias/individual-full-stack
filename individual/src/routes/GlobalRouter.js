import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from '../views/Landing';
import NotFound from '../views/NotFound';
import {Overview} from "../views/Overview";
import {Header} from "../components/Header";
import {NavBar} from "../components/NavBar";
import '../styles/Layout.css'
import {BookDetails} from "../components/BookDetails";

function GlobalRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/books" element={<Layout><Overview /></Layout>} />
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

export default GlobalRouter;

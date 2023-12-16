import React from 'react';
import logo from '../../resources/images/Spinner-0.5s-314px.gif'
import house from '../icons/house-door-fill.svg'
import book from '../icons/book-fill.svg'
import loan from '../icons/basket-fill.svg'
import help from '../icons/question.svg'

import { BsFillHouseDoorFill } from "react-icons/bs";
import { BsBook } from "react-icons/bs";
import { BsBasketFill } from "react-icons/bs";
export const SidebarData = [
    {
        title: 'Home',
        path: '/home',
        icon: house,
        cName: 'nav-text'
    },
    {
        title: 'Libros',
        path: '/books',
        icon: book ,
        cName: 'nav-text'
    },
    {
        title: 'Préstamos',
        path: '/loans',
        icon: loan ,
        cName: 'nav-text'
    },
    {
        title: 'Ayuda',
        path: '/help',
        icon: help ,
        cName: 'nav-text'
    }
];
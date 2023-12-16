import React from 'react';
import logo from '../../resources/images/Spinner-0.5s-314px.gif'
import { BsFillHouseDoorFill } from "react-icons/bs";
import { BsBook } from "react-icons/bs";
import { BsBasketFill } from "react-icons/bs";
export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: logo,
        cName: 'nav-text'
    },
    {
        title: 'Books',
        path: '/books',
        icon: logo ,
        cName: 'nav-text'
    },
    {
        title: 'Orders',
        path: '/orders',
        icon: logo ,
        cName: 'nav-text'
    }
];
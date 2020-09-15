import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './app.css';

import Nav from '../template/Nav';
import Footer from '../template/Footer';
import Logo from '../template/Logo';

import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';


export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav home="home" users="users" />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>
import React from 'react'

import logo from '../../assets/imgs/logo.png';

import './Logo.css';

import { Link } from 'react-router-dom';

export default function Logo(props) {
    return(
        <aside className="logo">
            <Link to="/" className="logo">
                <img src={logo} alt="logo" />
            </Link>
        </aside>
    )
}
import React from 'react';

import { Link } from 'react-router-dom';

import './Nav.css';

export default function Nav(props) {
    return(
        <aside className="menu-area">
            <nav className="menu">
                {/* Refatorar em casa! em JSX */}
                <Link to="/">
                    <i className={`fa fa-${props.home}`}></i> Inicio
                </Link>
                <Link to="/users">
                    <i className={`fa fa-${props.users}`}></i> Usuários
                </Link>
            </nav>
        </aside>
    )
}
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar: React.FC = () => (
    <nav className='header purple darken-1'>
        <div className="nav-wrapper">
            <NavLink to="/" className="brand-logo">React + Typescript Todo</NavLink>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/">Todos</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </div>
    </nav>
)

export default Navbar
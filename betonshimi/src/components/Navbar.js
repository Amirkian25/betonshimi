import React from 'react';
import styles from "./Navbar.module.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <div>
            <ul>
                <li><Link to="/">HomePage</Link></li>
            </ul>
            
        </div>
        </>
    );
};

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <p><Link to="/">Red Tetris</Link></p>
        </div>
    )
}

export default Navbar;
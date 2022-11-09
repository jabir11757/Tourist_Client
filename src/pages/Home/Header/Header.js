import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="container navbar">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                    <li><Link to='/blogs'>Blogs</Link></li>
                    <li>{user?.displayName}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
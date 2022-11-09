import { Button } from 'bootstrap';
import React, { useContext } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './Header.css'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user)

    const handleLogout = () => {
        logOut()
            .then()
    }
    return (
        <div className="container navbar">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-2xl text-success">Chaya Baj</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                    <li><Link to='/reviews'>My Reviews</Link></li>
                    <li><Link to='/blogs'>Blogs</Link></li>

                    {
                        user?.uid ?

                            <>
                                <li onClick={handleLogout}><Link>Logout</Link></li>
                                <div className='d-flex align-items-center'>
                                    <img className='me-4 rounded-xl mt-3' style={{ height: '25px' }} roundedCircle src={user?.photoURL} alt='' />
                                </div>
                            </>

                            :
                            <div className='flex'>
                                <li><Link to='/login'>Login</Link></li>
                                <li><Link to='/signup'>Signup</Link></li>
                                <FaUserAlt className='mt-4 ms-4' />
                            </div>
                    }

                </ul>
            </div>
        </div>
    );
};

export default Header;
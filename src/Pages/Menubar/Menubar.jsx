import React, { useContext } from 'react';
import './Menubar.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Menubar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then()
            .catch((err) => {
                console.log(err);
            });
    }
    return (

        <div className="Menubar-container">
            <div className="logo">logo</div>
            <div className="menu-container">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/services">
                    <li>Services</li>
                </Link>

                {user?.email ? (
                    <li>
                        <button onClick={handleLogout}>Logout</button>
                    </li>
                ) : (
                    <Link to="/login">
                        <li>Login</li>
                    </Link>
                )}
                <li>{user?.email}</li>

                <Link to="/register">
                    <li>Registration</li>
                </Link>
            </div>
        </div>

    );
};

export default Menubar;
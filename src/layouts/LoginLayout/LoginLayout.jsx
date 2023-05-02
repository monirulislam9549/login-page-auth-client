import React from 'react';
import Menubar from '../../Pages/Menubar/Menubar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <Menubar></Menubar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;
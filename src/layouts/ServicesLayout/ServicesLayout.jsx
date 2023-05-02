import React from 'react';
import Menubar from '../../Pages/Menubar/Menubar';
import { Outlet } from 'react-router-dom';

const ServicesLayout = () => {
    return (
        <div>
            <Menubar></Menubar>
            <Outlet></Outlet>
        </div>
    );
};

export default ServicesLayout;
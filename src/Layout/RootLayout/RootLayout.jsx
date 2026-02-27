import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';

const RootLayout = () => {
    return (
        <div className='flex min-h-screen flex-col'>
            <Navbar></Navbar>
            <main className='flex-1 '>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;
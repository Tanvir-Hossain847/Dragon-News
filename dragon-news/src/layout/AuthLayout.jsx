import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Link, Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header className='w-11/12 mx-auto h-20 grid items-center'>
                <Navbar></Navbar>
            </header>
            
            <main className='grid items-center h-screen justify-center'>
                    <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;
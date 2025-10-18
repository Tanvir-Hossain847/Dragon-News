import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header/Header';
import LetestNews from '../components/letestNews/LetestNews';
import Navbar from '../components/Navbar/Navbar';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <section className='w-11/12 mx-auto mt-4'>
                <LetestNews></LetestNews>
            </section>
            <section className='w-11/12 mx-auto mt-4'>
                <Navbar></Navbar>
            </section>

            <main>
                <section className="left"></section>
                <section className="main">
                    <Outlet></Outlet>
                </section>
                <section className="right"></section>
            </main>
        </div>
    );
};

export default HomeLayout;
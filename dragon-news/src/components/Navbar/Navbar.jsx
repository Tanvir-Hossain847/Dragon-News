import React from 'react';
import user from '../../assets/user.png'
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='flex justify-between primary text-accent'>
            <div className=""></div>
            <div className="nav flex gap-5 items-center ml-30">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
            </div>
            <div className="button flex items-center gap-4">
                <img src={user} alt="" />
                <button className='btn btn-primary'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;
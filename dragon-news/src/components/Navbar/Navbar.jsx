import React, { use } from 'react';
import userImg from '../../assets/user.png'
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../context/AuthProvider';

const Navbar = () => {
    const {user} = use(AuthContext)
    return (
        <div className='flex justify-between primary text-accent'>
            <div className="">{user && user.name}</div>
            <div className="nav flex gap-5 items-center ml-30">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
            </div>
            <div className="button flex items-center gap-4">
                <img src={userImg} alt="" />
                <Link to={'/auth/login'} className='btn btn-primary'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;
import React from 'react';
import logo from '../../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex justify-center items-center flex-col gap-3 mt-8 primary'>
            <img src={logo} alt="" />
            <h1 className='text-accent'>Jourrnalism Without Fear or Favour</h1>
            <p>{format(new Date(),'EEEE ,MMMM ,MM ,yyyy')}</p>
        </div>
    );
};

export default Header;
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h1 className='font-bold primary mb-4'>Find Us</h1>
            <div className="">
                <div className="join join-vertical w-full">
                    <button className="btn text-left bg-base-100"><FaFacebook></FaFacebook> Facebook</button>
                    <button className="btn join-item bg-base-100"><FaTwitter></FaTwitter> Twitter</button>
                    <button className="btn join-item bg-base-100"><FaInstagram></FaInstagram> Instagram</button>
               </div>
            </div>
        </div>
    );
};

export default FindUs;
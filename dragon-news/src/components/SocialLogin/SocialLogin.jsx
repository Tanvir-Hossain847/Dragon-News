import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { RiGoogleFill } from 'react-icons/ri';

const SocialLogin = () => {
    return (
        <div className='space-y-4'>
            <h1 className='font-bold primary'>Login With</h1>
            <div className="flex flex-col gap-3">
                <button className='btn btn-outline btn-secondary'><RiGoogleFill size={25}></RiGoogleFill> Login With Google</button>
                <button className='btn btn-outline btn-primary'><FaGithub size={25}></FaGithub> Login With Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;
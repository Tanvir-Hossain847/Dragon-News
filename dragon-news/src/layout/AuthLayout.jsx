import React from 'react';
import Navbar from '../components/Navbar/Navbar';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header className='w-11/12 mx-auto h-20 grid items-center'>
                <Navbar></Navbar>
            </header>
            
            <main className='grid items-center h-screen justify-center'>
                     <div className="card bg-base-100 w-full min-w-md shrink-0 shadow-2xl">
      <div className="card-body p-15">
        <h1 className='text-3xl text-center font-bold'>Login your account</h1>
        <fieldset className="fieldset space-y-4">
            <div className="space-y-2 font-bold text-xs text-balance">
          <label className="label">Email</label>
          <input type="email" className="input w-full focus:outline-none" placeholder="Email" />
            </div>
            <div className="space-y-2 font-bold text-xs text-balance">
          <label className="label">Password</label>
          <input type="password" className="input w-full focus:outline-none" placeholder="Password" />
            </div>
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </div>
    </div>
            </main>
        </div>
    );
};

export default AuthLayout;
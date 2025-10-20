import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../context/AuthProvider';

const Register = () => {

    const {createUser} = use(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        const name = event.target.name.value
        const id = event.target.id.value
        const email = event.target.email.value
        const password = event.target.password.value
        createUser(email, password)
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            alert(error)
        })
    }

    return (
        <div>
           <div className="card bg-base-100 w-full min-w-md shrink-0 shadow-2xl">
      <div className="card-body p-10">
        <h1 className='text-3xl text-center font-bold pb-7 primary border-b-1 border-gray-300'>Register Your Account</h1>
        <form onSubmit={handleSubmit}>
            <fieldset className="fieldset space-y-4 mt-4">
            <div className="space-y-2">
          <label className="label font-bold text-xs text-black primary">Your Name</label>
          <input name='name' type="text" className="input w-full focus:outline-none bg-base-200 border-none p-4 text-xs h-11" placeholder="Enter Your Name Here" />
            </div>
            <div className="space-y-2">
          <label className="label font-bold text-xs text-black primary">Photo URL</label>
          <input name='id' type="text" className="input w-full focus:outline-none bg-base-200 border-none p-4 text-xs h-11" placeholder="Enter Your Photo URL" />
            </div>
            <div className="space-y-2">
          <label className="label font-bold text-xs text-black primary">Email Address</label>
          <input name='email' type="email" className="input w-full focus:outline-none bg-base-200 border-none p-4 text-xs h-11" placeholder="Enter Your Email Address" />
            </div>
            <div className="space-y-2">
          <label className="label font-bold text-xs text-black primary">Password</label>
          <input name="password" type="password" className="input w-full focus:outline-none bg-base-200 border-none p-4 text-xs h-11" placeholder="Enter Your Password" />
            </div>
          <div className='flex flex-col'>
          <button className="btn btn-neutral mt-4">Register</button>
          </div>
        </fieldset>
        </form>
        <h4 className='text-center font-bold'>Already Have An Account ? <Link className='text-secondary' to={'/auth/login'}>Login</Link></h4>
      </div>
    </div>
        </div>
    );
};

export default Register;
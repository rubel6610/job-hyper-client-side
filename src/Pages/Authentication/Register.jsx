import React from 'react';
import Navbar from '../../Components/Navbar';

const Register = () => {
    return (
        <div>
            <Navbar/>
            <form  >
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs mx-auto border p-4 ">
                    <h1 className="text-xl text-center">Register Now</h1>

                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />

                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
            </form>
        </div>
    );
};

export default Register;
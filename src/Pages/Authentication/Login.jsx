import React, { useContext } from 'react';
import Navbar from '../../Components/Navbar';
import loginlottie from "../../assets/Looties/login.json"
import Lottie from "lottie-react"
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const {loginUser,setUser} =useContext(AuthContext);
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const {email,password} = Object.fromEntries(formData.entries());
        loginUser(email,password)
        .then(result=>{
          const user = result.user;
            setUser(user)
            console.log(user);
            Swal.fire({
              icon: 'success',
              title: 'Login Successful',
              text: `Welcome, ${user.displayName}!`,
              showConfirmButton: false,
              timer: 2000
            });
            form.reset();
            navigate("/")
     
    }).catch((error) => {
         Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: error.message
        });
    })
       
    }
    return (
        <div>
            <Navbar />

            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content gap-20">

                    <Lottie animationData={loginlottie} loop={true}></Lottie>


                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <fieldset className="fieldset">
                                  
                                    <label htmlFor="email" className="label">Email</label>
                                    <input type="email" className="input" placeholder="Email" name='email' id='email' />
                                 
                                    <label htmlFor="password" className="label">Password</label>
                                    <input type="password" className="input" placeholder="Password" name='password' id='password' />
                                   
                                    <button className="btn btn-neutral mt-4">Login</button>
                                    <p>Don't have an account  <Link className='underline text-blue-400' to="/register">Register</Link></p>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;
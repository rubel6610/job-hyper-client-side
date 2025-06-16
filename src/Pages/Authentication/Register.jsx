import React, { useContext } from 'react';
import Navbar from '../../Components/Navbar';
import Lottie from "lottie-react"
import RegisterLottie from "../../assets/Looties/register.json"
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
    const navigate = useNavigate();
    const { createUser, updateUserProfile, setUser, googleLogin } = useContext(AuthContext);
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const { email, password, name, photoURL } = Object.fromEntries(formData.entries());
        createUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
                updateUserProfile({
                    displayName: name,
                    photoURL: photoURL,
                })
                    .then(() => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Registration Successful',
                            text: `Welcome, ${name}!`,
                            showConfirmButton: false,
                            timer: 2000
                        });
                        form.reset();
                        navigate("/")
                    })
            }).catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Registration Failed',
                    text: error.message
                });
            })

    }
    const handleGoogle = () => {
        googleLogin().then(result => {
            const user = result.user;
            setUser(user)
          Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    text: `Welcome, ${user.displayName}!`,
                    showConfirmButton: false,
                    timer: 2000
                });
                   navigate("/")
        }).catch(error=>{
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

                    <Lottie animationData={RegisterLottie} loop={true}></Lottie>


                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <fieldset className="fieldset">
                                    <label htmlFor="name" className="label">Name</label>
                                    <input type="text" className="input" placeholder="UserName" name='name' id='name' />
                                    <label htmlFor="email" className="label">Email</label>
                                    <input type="email" className="input" placeholder="Email" name='email' id='email' />
                                    <label htmlFor="photourl" className="label">PhotoURL</label>
                                    <input type="text" className="input" placeholder="PhotoURL" name='photoURL' id='photourl' />
                                    <label htmlFor="password" className="label">Password</label>
                                    <input type="password" className="input" placeholder="Password" name='password' id='password' />

                                    <button className="btn btn-neutral mt-4">Register</button>
                                    <p>Already have an account  <Link className='underline text-blue-400' to="/login">Login</Link></p>
                                </fieldset>
                               
                            </form>
                             <div className="divider">OR</div>
                                <button onClick={handleGoogle} className="btn w-full bg-white text-black border-[#e5e5e5]">
                                    <FcGoogle /> Sign Up with Google
                                </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;
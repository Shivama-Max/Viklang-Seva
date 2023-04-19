import React from 'react';
import axios from 'axios';
import './SignupLogin.css';
import firstpic from "../../assets/Signup.svg";
import Logo from "../../assets/MainLogo.svg";
import { Link } from "react-router-dom";
import swal from 'sweetalert';

export const SignupLogin = () => {

    const name = React.createRef();
    const email = React.createRef();
    const password = React.createRef();
    const username = React.createRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:3240/signup", {
            name: name.current.value,
            email: email.current.value,
            username: username.current.value,
            password: password.current.value,
          })
          .then((response) => {
            if (response.status === 201) {
              swal(
                "SUCCESS!",
                "User has been created successfully!",
                "success"
              );
            }
          })
          .catch((err) => {
            if (err.response.status === 400) {
              swal("ERROR!", "Username/Email is already used!", "error");
            }
          });
    }

    return (
        <>
            <div className='bg-slate-100'>
                <img src={Logo} alt='pic' className='lg:w-1/5 lg:h-4/6 pl-10 pt-10 ml-4' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 justify-content-center bg-slate-100'>
                <div className='lg:order-last image'>
                    <img src={firstpic} alt='pic' className='w-80 h-80 lg:w-10/12 lg:h-5/6 mt-7 ml-10' />
                </div>
                <div className="w-11/12 h-11/12 shadow-default lg:mt-10 lg:ml-10 py-10 px-1">
                    <blockquote className="text-3xl">
                        <p className="text-3xl font-bold">SignUp</p>
                    </blockquote>

                    <div className="text-primary mt-3">
                        <div className="flex items-center">
                            <h1 className="text-2xl font-medium text-primary mb-10">
                                Explore and find a job that suits you
                            </h1>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <label className="text-left font-bold">Name:</label>
                            <input
                                name="name"
                                type="text"
                                placeholder="Name"
                                ref={name}
                                className={
                                    "w-full p-2 text-primary border-4 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                                }
                            />
                            <label className="text-left font-bold">Email:</label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Email-ID"
                                ref={email}
                                className={
                                    "w-full p-2 text-primary border-4 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                                }
                            />
                            <label className="text-left font-bold">Username:</label>
                            <input
                                name="username"
                                type="text"
                                placeholder="Username"
                                ref={username}
                                className={
                                    "w-full p-2 text-primary border-4 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                                }
                            />
                            <label className='font-bold'>Password:</label>
                            <input
                                name="password"
                                type="password"
                                placeholder="Password"
                                ref={password}
                                className={
                                    "w-full p-2 text-primary border-4 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                                }
                            />
                            <div className="flex items-center mt-3 justify-center">
                                <button type='submit'
                                    className={
                                        "bg-blue-700 hover:bg-blue-500 py-2 px-14 text-md text-white rounded border border-blue focus:outline-none focus:border-black"
                                    }
                                    value="Login"
                                >
                                    SIGNUP
                                </button>
                            </div>
                        </form>
                        <div className="flex items-center mt-3 justify-center">
                            <Link to="/">
                                <button className={"justify-center text-blue-500 hover:underline"}>
                                    Already have an account? LogIn
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
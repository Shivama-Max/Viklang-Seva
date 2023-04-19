import React from 'react';
import axios from 'axios';
import './LoginSignup.css';
import firstpic from "../../assets/LogIn.svg";
import Logo from "../../assets/MainLogo.svg";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

export const LoginSignup = () => {

    const password = React.createRef();
    const username = React.createRef();
    let navigate = useNavigate();
    function navigation() {
        navigate('/dashboard');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
          .post("http://localhost:3240/login", {
            username: username.current.value,
            password: password.current.value,
          })
          .then((response) => {
            console.log(response);
            sessionStorage.setItem("token", response.data.token);
            console.log(sessionStorage.getItem("token"));
            if (response.status === 200) {
              navigation();
            }
          })
          .catch((err) => {
            if (err.response.status === 400) {
              swal("ERROR!", "Use valid Username/Password!", "error");
            }
          });
    }

    return (
        <>
            <div className='bg-slate-100'>
                <img src={Logo} alt='pic' className='lg:w-1/5 lg:h-4/6 pl-10 pt-10 ml-4' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 justify-content-center bg-slate-100 pb-14'>
                <div className='lg:order-last image'>
                    <img src={firstpic} alt='pic' className='w-80 h-80 lg:w-10/12 lg:h-5/6 mt-20 ml-9' />
                </div>
                <div className="w-11/12 h-11/12 shadow-default lg:mt-5 lg:ml-10 py-10 px-1">
                    <blockquote className="text-2xl font-medium ml-5">
                        <p className="text-3xl font-bold">Login into your account</p>
                    </blockquote>

                    <div className="text-primary mt-3 ml-5">
                        <div className="flex items-center">
                            <h1 className="text-2xl font-medium text-primary mb-10">
                            Welcome back!!
                            </h1>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <label className="text-left font-bold">Username:</label>
                            <input
                                name="username"
                                type="text"
                                ref={username}
                                placeholder="Username"
                                className={
                                    "w-full p-2 text-primary border-4 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                                }
                            />
                            <label className='font-bold'>Password:</label>
                            <input
                                name="password"
                                type="password"
                                ref={password}
                                placeholder="Password"
                                className={
                                    "w-full p-2 text-primary border-4 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-7"
                                }
                            />
                            <div className="flex items-center mt-3 justify-center">
                                <button
                                    type='submit'
                                    className={
                                        "bg-blue-700 hover:bg-blue-600 py-2 px-20 text-md text-white rounded border border-blue focus:outline-none focus:border-black"
                                    }
                                    value="Login"
                                >
                                    LOGIN
                                </button>
                            </div>
                        </form>
                        <div className="flex items-center mt-3 justify-center">
                            <Link to="/signuplogin">
                                <button className={"justify-center text-blue-500 hover:underline"}>
                                    Need to register? Sign up for free
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
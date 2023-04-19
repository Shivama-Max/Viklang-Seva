import React from 'react';
import './Footer.css';
import Logo from "../../assets/MainLogo.svg";

export const Footer = () => {
    return (
        <footer>
            <div className=" container flex flex-col flex-wrap lg:px-4 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap">
                <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left mt-12">
                    <div className='flex'>
                        <img src={Logo} alt='img' className='w-60' />
                    </div>
                    <div class="flex justify-center mt-4 lg:mt-7">
                        <a href='/dashboard'>
                            <svg
                                fill="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="w-6 h-6 text-blue-600"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                                ></path>
                            </svg>
                        </a>
                        <a className="ml-4" href='/dashboard'>
                            <svg
                                fill="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="w-6 h-6 text-blue-300"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                                ></path>
                            </svg>
                        </a>
                        <a className="ml-4" href='/dashboard'>
                            <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="w-6 h-6 text-pink-400"
                                viewBox="0 0 24 24"
                            >
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path
                                    d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                                ></path>
                            </svg>
                        </a>
                        <a className="ml-4" href='/dashboard'>
                            <svg
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="0"
                                class="w-6 h-6 text-blue-500"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="none"
                                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                ></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="justify-between w-full text-center lg:flex lg:ml-44 mt-10">
                    <div className="w-full px-4 justify-center lg:w-1/3 md:w-1/2">
                        <h2 className="mb-2 font-bold tracking-widest text-gray-900 text-left text-lg">
                            Get in touch
                        </h2>
                        <ul className="mb-8 space-y-2 text-sm list-none">
                            <li className='text-left'>
                                <a className="text-indigo-600 hover:text-indigo-800 text-lg mr-14" href='/dashboard'>About Us</a>
                            </li>
                            <li className='text-left'>
                                <a className="text-indigo-600 hover:text-indigo-800 text-lg mr-12" href='/dashboard'>Our Mission</a>
                            </li>
                            <li className='text-left'>
                                <a className="text-indigo-600 hover:text-indigo-800 text-lg mr-12" href='/dashboard'>Contact Us</a>
                            </li>
                            <li className='text-left'>
                                <a className="text-indigo-600 hover:text-indigo-800 text-lg mr-20" href='/dashboard'>Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full px-4 lg:w-1/3 md:w-1/2 mr-10">
                        <h2 className="mb-2 font-bold tracking-widest text-gray-900 text-left text-lg">
                            Employer
                        </h2>
                        <ul className="mb-8 space-y-2 text-sm list-none">
                            <li className='text-left'>
                                <a className="text-indigo-600 hover:text-indigo-800 text-lg mr-14" href='/dashboard'>Post a job</a>
                            </li>
                            <li className='text-left'>
                                <a className="text-indigo-600 hover:text-indigo-800 text-lg mr-12" href='/dashboard'>Help</a>
                            </li>
                            <li className='text-left'>
                                <a className="text-indigo-600 hover:text-indigo-800 mr-12 text-lg" href='/dashboard'>Grievances</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                        <h2 className="mb-2 font-bold tracking-widest text-gray-900 text-left text-lg">
                            Employee
                        </h2>
                        <ul className="mb-8 space-y-2 text-sm list-none">
                            <li className='text-left'>
                                <a className="text-indigo-600 hover:text-indigo-800 text-lg" href='/dashboard'>Your account</a>
                            </li>
                            <li className='text-left'>
                                <a className="text-indigo-600 hover:text-indigo-800 text-lg" href='/dashboard'>Find a job</a>
                            </li>
                            <li className='text-left'>
                                <a className="text-indigo-600 hover:text-indigo-800 text-lg" href='/dashboard'>Grievances</a>
                            </li>
                            <li className='text-left'>
                                <a className="text-indigo-600 hover:text-indigo-800 text-lg" href='/dashboard'>Chat with us</a>
                            </li>
                            <li className='text-left'>
                                <a className="text-indigo-600 hover:text-indigo-800 text-lg" href='/dashboard'>Help</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <p className="text-violet-600 hover:text-violet-800">
                    All rights reserved by @ Shivama
                </p>
            </div>
        </footer>
    );
};

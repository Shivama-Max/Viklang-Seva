import React from 'react';
import './Navbar.css';
import Logo from "../../../assets/MainLogo.svg";
import Bell from "../../../assets/Bell.svg";
import Profile from "../../../assets/Profile.svg";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Link } from 'react-router-dom';

export const Navbar = ({ toggle }) => {
    return (
        <nav
            className='flex justify-between items-center h-16 bg-white text-black relative font-sans border-b-2 mt-3'
            role='navigation'
        >
            <Link to='/dashboard'>
                <div className='flex'>
                    <img src={Logo} alt='img' className='w-72 h-14' />
                </div>
            </Link>
            <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
                <svg
                    className='w-8 h-8'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M4 6h16M4 12h16M4 18h16'
                    />
                </svg>
            </div>
            <div className='pr-8 md:flex hidden'>
                <Link to='/AboutUs' className='mt-1'>
                    <span className='text-xl font-bold text-indigo-700'>About Us</span>
                </Link>
                <Link to='/View' className='mt-1'>
                    <span className='text-xl font-bold text-blac ml-8'>Jobs</span>
                </Link>
                <Link to='/Posts'>
                    <button className="bg-transparent text-indigo-700 font-bold border border-indigo-700 border-2 rounded ml-10 py-2 px-8">
                        Post a Job
                    </button>
                </Link>
                <img src={Bell} alt='img' className='w-10 h-9 ml-10 mr-8 mt-1' />
                <div className='flex flex-row bg-gray-300 py-2 px-1 rounded-full'>
                    <img src={Profile} alt='img' className='w-10 h-9 ml-2 mt-1' />
                    <KeyboardArrowDownOutlinedIcon className='mt-2'></KeyboardArrowDownOutlinedIcon>
                </div>
            </div>
        </nav>
    );
};

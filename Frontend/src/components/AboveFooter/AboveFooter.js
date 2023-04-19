import React from 'react';
import './AboveFooter.css';
import Standing from "../../assets/Standing.svg";
import Easy from "../../assets/Easy.svg";

export const AboveFooter = () => {
    return (
        <div className='bg-indigo-50 pt-20 mb-10 mt-20 flex flex-wrap'>
            <div>
                <img src={Standing} alt='img' className='ml-24 lg:ml-44 lg:mr-36 h-full' />
            </div>
            <div className='mt-4'>
                <div className='flex flex-row'>
                    <h1 className='text-4xl lg:text-7xl lg:mt-2 lg:mb-5 font-bold tracking-normal text-center text-black leading-loose tracking-wide'>I don't need
                    </h1>
                    <img src={Easy} alt='img' className='h-10 ml-2 mt-4 lg:h-20 lg:ml-3 lg:mt-2 lg:mb-5' />
                </div>
                <div className='flex flex-row'>
                    <h2 className='text-3xl lg:text-7xl font-bold text-center text-black tracking-wide'>I just need<span className='text-4xl lg:text-7xl font-bold tracking-normal text-center text-indigo-600 tracking-wide'> possible.</span></h2>
                </div>
            </div>
        </div>
    );
};

import React from 'react';
import { Navbar } from '../../../pages/About/Navbar/Navbar';
import './AboutUs.css';
import CombinedImage from "../../../assets/CombinedImage.svg";
import Left_One from "../../../assets/Left_One.svg";
import Middle from "../../../assets/Middle.svg";
import Discovered from "../../../assets/Discovered.svg";
import Contacted from "../../../assets/Contacted.svg";
import Hired from "../../../assets/Hired.svg";

export const AboutUs = () => {
    return (
        <>
            <Navbar />

            <div className='bg-indigo-50 pt-16'>
            </div>
            <div className='bg-white py-5 mt-10'>
                <h2 className='text-6xl text-center font-bold tracking-wide'>About <span className='text-6xl text-center font-bold tracking-wide text-indigo-600'>Us</span></h2>
                <div className='grid grid-cols-6 gap-4'>
                    <div className='col-start-2 col-span-4'>
                        <p className='text-center text-2xl mt-10'>Viklang Seva is a project that aims to provide employment opportunities for persons with different types of disabilities. Society has had a reflectance towards people with disabilities and has had reservations about them becoming self-sufficient parts of the community.</p>

                        <p className='text-center text-2xl mt-10'>This idea comes from a very personal space for us, as seeing the plight of people with being unable to express themselves in the corporate world is very saddening; there are not a lot of resources for the same.</p>
                    </div>
                </div>
                <img src={CombinedImage} alt='img' className='mt-20 ml-32 h-96' />
            </div>
            <div className='bg-indigo-50 pt-5 mt-10'>
                <h2 className='text-6xl text-center font-bold tracking-wide mt-10'>Our <span className='text-6xl text-center font-bold tracking-wide text-indigo-600 mt-10'>Mission</span></h2>
                <div className='grid grid-cols-6 gap-4'>
                    <img src={Left_One} alt='img' className='mt-20 h-96' />
                    <div className='col-start-2 col-span-4'>
                        <p className='text-center text-2xl mt-10'>Employment means being committed to participation in an activity with others and an occupational identity. For people with a disability, such aspects are even more important, largely because these individuals have become an increasingly marginalized group in contemporary working life, with its great demands for education, flexibility, and productivity.</p>

                        <p className='text-center text-2xl mt-10'>At Viklang Seva, we intend to support people with disability by giving them opportunities rather than sympathy. They want to feel that they are needed by others and that what they do is meaningful, in both their own eyes and in the eyes of others. We want to give them this opportunity to show their potential.</p>

                    </div>
                    <img src={Middle} alt='img' className='mt-20 h-96' />
                </div>
            </div>
            <div className='bg-white py-5 mt-10'>
                <h2 className='text-6xl text-center font-bold tracking-wide'>How to<span className='text-6xl text-center font-bold tracking-wide text-indigo-600'> Use?</span></h2>
                <div className='grid grid-cols-3 gap-4 ml-14 mb-24 mt-14'>
                    <div class="max-w-sm rounded-lg overflow-hidden border-indigo-700 border-2 mt-14">
                        <div class="px-6 py-4">
                            <img src={Discovered} alt='img' className='float-center ml-28' />
                            <div class="font-bold text-2xl mb-2 mt-4 text-center text-indigo-700">Get Discovered</div>
                            <p class="text-gray-700 text-base text-center">
                                Become searchable by top companies in your domain. Companies search for candidate CVs directly for open positions.
                            </p>
                        </div>
                    </div>
                    <div class="max-w-sm rounded-lg overflow-hidden border-indigo-700 border-2 mt-14">
                        <div class="px-6 py-4">
                            <img src={Contacted} alt='img' className='float-center ml-28' />
                            <div class="font-bold text-2xl mb-2 mt-4 text-center text-indigo-700">Get Contacted</div>
                            <p class="text-gray-700 text-base text-center">
                            Let companies reach you directly without any hassle.             Companies contact candidates & schedule interviews.
                            </p>
                        </div>
                    </div>
                    <div class="max-w-sm rounded-lg overflow-hidden border-indigo-700 border-2 mt-14">
                        <div class="px-6 py-4">
                            <img src={Hired} alt='img' className='float-center ml-28' />
                            <div class="font-bold text-2xl mb-2 mt-4 text-center text-indigo-700">Get Hired</div>
                            <p class="text-gray-700 text-base text-center">
                            Get hired effortlessly by letting companies reach you. 70% of companies hire candidates without posting jobs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-indigo-50 pt-16'>
            </div>
        </>
    );
};

import React from 'react';
import Job from "../../assets/Job.svg";
import Job_One from "../../assets/Job_One.svg";
import Job_Two from "../../assets/Job_Two.svg";
import Job_Three from "../../assets/Job_Three.svg";

export const JobFields = () => {
    return (
        <>
            <div className='bg-indigo-50 pt-1 mb-20 mt-28 pb-32'>
                <h2 className='text-6xl font-semibold text-center text-black mt-16 mb-20'>Various Job Fields</h2>
                <div className='overflow-x-auto mt-20'>
                    <div className='flex flex-row justify-center'>
                        <div className="w-60 rounded-xl shadow-lg bg-white ml-16 hover:animate-bounce">
                            <div className="px-6 py-4">
                                <img src={Job} alt='img' className='ml-20 mt-5 mr-36' />
                                <p className="text-gray-700 text-center text-xl mt-5">
                                    Marketing & Communication
                                </p>
                            </div>
                        </div>
                        <div className="w-60 rounded-xl shadow-lg bg-white ml-16 hover:animate-bounce">
                            <div className="px-6 py-4">
                                <img src={Job_One} alt='img' className='ml-20 mt-5 mr-36' />
                                <p className="text-gray-700 text-center text-xl mt-5">
                                    Design & Development
                                </p>
                            </div>
                        </div>
                        <div className="w-60 rounded-xl shadow-lg bg-white ml-16 hover:animate-bounce">
                            <div className="px-6 py-4">
                                <img src={Job_Two} alt='img' className='ml-20 mt-5 mr-36' />
                                <p className="text-gray-700 text-center text-xl mt-5">
                                    Government Jobs
                                </p>
                            </div>
                        </div>
                        <div className="w-60 rounded-xl shadow-lg bg-white ml-16 hover:animate-bounce">
                            <div className="px-6 py-4">
                                <img src={Job_Three} alt='img' className='ml-20 mt-5 mr-36' />
                                <p className="text-gray-700 text-center text-xl mt-5">
                                    Project Management
                                </p>
                            </div>
                        </div>
                        <div className="w-60 rounded-xl shadow-lg bg-white ml-16 hover:animate-bounce">
                            <div className="px-6 py-4">
                                <img src={Job_Three} alt='img' className='ml-20 mt-5 mr-36' />
                                <p className="text-gray-700 text-center text-xl mt-5">
                                    Project Management
                                </p>
                            </div>
                        </div>
                        <div className="w-60 rounded-xl shadow-lg bg-white ml-16 hover:animate-bounce">
                            <div className="px-6 py-4">
                                <img src={Job_Three} alt='img' className='ml-20 mt-5 mr-36' />
                                <p className="text-gray-700 text-center text-xl mt-5">
                                    Project Management
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

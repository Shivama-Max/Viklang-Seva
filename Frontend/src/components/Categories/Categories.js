import './Categories.css';
import Visually from "../../assets/Visually.svg";
import Hearing from "../../assets/Hearing.svg";
import WheelChair from "../../assets/WheelChair.svg";
import Autism from "../../assets/Autism.svg";
import Deaf from "../../assets/Deaf.svg";
import Disabled from "../../assets/Disabled.svg";
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Categories = () => {

    const [data, setData] = useState({
        getData: []
    })

    console.log(data);

    useEffect(() => {
        axios
          .post("http://localhost:3001/findAllJobPos")
          .then((response) => {
            setData({
              getData: response.data.data.jobs,
            });
            console.log(response.data.data.jobs);
          })
          .catch((err) => {
            console.log(err);
          });
    }, []);

    return (
        <>
            <div>
                <h2 className='text-6xl font-semibold text-center text-black mt-20 mb-10'>Categories</h2>
            </div>
            <div className='grid lg:grid-cols-3 gap-4 lg:ml-6'>
                <Link to='/Jobs' state={{ disabilityType: "visually impaired" }}>
                    <div class="max-w-sm rounded-2xl overflow-hidden border-indigo-700 border-2 mt-8">
                        <div class="px-6 py-4">
                            <img src={Visually} alt='img' className='float-center ml-28' />
                            <div class="font-bold text-2xl mb-2 mt-4 text-center text-indigo-700">Visually Impaired</div>
                            <p class="text-gray-700 text-base text-center font-semibold">
                                2345 Jobs Available
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to='/Jobs' state={{ disabilityType: "hard of hearing" }}>
                    <div class="max-w-sm rounded-2xl overflow-hidden border-indigo-700 border-2 mt-8">
                        <div class="px-6 py-4">
                            <img src={Hearing} alt='img' className='float-center ml-28' />
                            <div class="font-bold text-2xl mb-2 mt-4 text-center text-indigo-700">Hard of Hearing</div>
                            <p class="text-gray-700 text-base text-center font-semibold">
                                2345 Jobs Available
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to='/Jobs' state={{ disabilityType: "wheelchair bound" }}>
                    <div class="max-w-sm rounded-2xl overflow-hidden border-indigo-700 border-2 mt-8">
                        <div class="px-6 py-4">
                            <img src={WheelChair} alt='img' className='float-center ml-28' />
                            <div class="font-bold text-2xl mb-2 mt-4 text-center text-indigo-700">Wheelchair Bound</div>
                            <p class="text-gray-700 text-base text-center font-semibold">
                                2345 Jobs Available
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to='/Jobs' state={{ disabilityType: "autism" }}>
                    <div class="max-w-sm rounded-2xl overflow-hidden border-indigo-700 border-2 mt-8">
                        <div class="px-6 py-4">
                            <img src={Autism} alt='img' className='float-center ml-28' />
                            <div class="font-bold text-2xl mb-2 mt-4 text-center text-indigo-700">Autism</div>
                            <p class="text-gray-700 text-base text-center font-semibold">
                                2345 Jobs Available
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to='/Jobs' state={{ disabilityType: "dumb and deaf" }}>
                    <div class="max-w-sm rounded-2xl overflow-hidden border-indigo-700 border-2 mt-8">
                        <div class="px-6 py-4">
                            <img src={Deaf} alt='img' className='float-center ml-28' />
                            <div class="font-bold text-2xl mb-2 mt-4 text-center text-indigo-700">Dumb and Deaf</div>
                            <p class="text-gray-700 text-base text-center font-semibold">
                                2345 Jobs Available
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to='/Jobs' state={{ disabilityType: "disabled person" }}>
                    <div class="max-w-sm rounded-2xl overflow-hidden border-indigo-700 border-2 mt-8">
                        <div class="px-6 py-4">
                            <img src={Disabled} alt='img' className='float-center ml-28' />
                            <div class="font-bold text-2xl mb-2 mt-4 text-center text-indigo-700">Disabled person</div>
                            <p class="text-gray-700 text-base text-center font-semibold">
                                2345 Jobs Available
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
};

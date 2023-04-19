import React, { useState, useEffect } from 'react';
import './LandingPage.css';
import Google from "../../assets/Google.svg";
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import AccessibleOutlinedIcon from '@mui/icons-material/AccessibleOutlined';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const LandingPage = () => {

    const [data, setData] = useState({
        getData: []
    })

    useEffect(() => {
        axios
          .get("http://localhost:3001/findSpecificJob?limit=6")
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
                <h2 className='text-6xl font-semibold text-center text-black mt-20 mb-10'>Featured Job</h2>
            </div>
            <div className='flex flex-row flex-wrap justify-center'>
                {
                    data.getData.map((job) => {
                        return (
                          <div
                            className="w-96 h-80 rounded-2xl border-transparent border-solid bg-slate-100 ml-8 mr-7 mt-10 mb-10 drop-shadow-lg"
                            key={job.jobid}
                          >
                            <Link to="/AboutCompany" state={{ job }}>
                              <div>
                                <div>
                                  <img
                                    src={job.compInfo.logoUrl}
                                    alt="pic"
                                    className="lg:w-1/6 lg:h-5/6 mt-3 ml-4 pt-5"
                                  />
                                </div>
                                <div>
                                  <h3 className="ml-4 mt-5 text-xl">
                                    {job.compInfo.name}
                                  </h3>
                                </div>
                                <div>
                                  <h3 className="ml-4 mt-5 text-xl font-bold">
                                    {job.jobInfo.title}
                                  </h3>
                                </div>
                                <div className="flex flex-row flex-wrap mt-3 ml-4">
                                  <div className="flex flex-row flex-wrap">
                                    <AccessibleOutlinedIcon className="mr-3"></AccessibleOutlinedIcon>
                                    <h4 className="mr-7">
                                      {job.jobInfo.disabilityType}
                                    </h4>
                                  </div>
                                  <div className="flex flex-row flex-wrap">
                                    <FmdGoodOutlinedIcon className="mr-3"></FmdGoodOutlinedIcon>
                                    <h4>{job.jobInfo.location}</h4>
                                  </div>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                  <span className="inline-block bg-white rounded-lg px-3 py-1 text-sm font-semibold text-violet-700 mr-2 mb-2 mt-5">
                                    {job.jobInfo.expLevel}
                                  </span>
                                  <span className="inline-block bg-white rounded-lg px-3 py-1 text-sm font-semibold text-violet-800 mr-2 mb-2 mt-5">
                                    {job.jobInfo.type}
                                  </span>
                                  <button className="bg-indigo-700 hover:bg-indigo-700 text-white font-semibold py-2 px-5 ml-8 rounded">
                                    Apply
                                  </button>
                                </div>
                              </div>
                            </Link>
                          </div>
                        );
                    })
                }
            </div>

            <div className='grid grid-cols-6'>
                <div className="col-start-3 col-span-3">
                    <Link to='/View'>
                        <button className="bg-transparent text-indigo-700 font-bold border border-indigo-700 border-2 rounded py-2 px-8 mt-14 ml-36 ">
                            View All
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

import React from 'react';
import { Navbar } from './Navbar/Navbar';
import { JobsSearch } from './JobsSearch';
import './Jobs.css';
import { JobsListsThird } from './JobsListsThird';
import { JobsCategory } from './JobsCategory';

export const JobsThird = () => {
    return (
        <>
            <Navbar />
            <div className='bg-indigo-50 pt-16'>
                <JobsSearch />
            </div>
            <div className='grid grid-cols-3 gap-4 bg-indigo-50 py-20 pr-10'>
                <div className='pl-3'>
                    <JobsCategory />
                </div>
                <div className="col-span-2">
                    <JobsListsThird />
                </div>
            </div>
        </>
    );
};

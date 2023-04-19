import React from 'react';
import axios from 'axios';
import './Posts.css';
import { Navbar } from '../Posts/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

export const Posts = () => {
    const jobtitle = React.createRef();
    const jobcategory = React.createRef();
    const jobtype = React.createRef();
    const experience = React.createRef();
    const location = React.createRef();
    const salary = React.createRef();
    const disable = React.createRef();
    const submission = React.createRef();
    const company_name = React.createRef();
    const website = React.createRef();
    const size = React.createRef();
    const email = React.createRef();
    const bio = React.createRef();
    const logo = React.createRef();
    const responsible = React.createRef();
    const requiredskills = React.createRef();
    const jobroles = React.createRef();
    const ideal = React.createRef();
    const benefits = React.createRef();
    const stages = React.createRef();

    let navigate = useNavigate();
    function navigation() {
        navigate('/dashboard');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(jobtype.current.value);
        console.log(jobtitle.current.value);
        console.log(bio.current.value);
        console.log(salary.current.value);


        var auth = sessionStorage.getItem('token');
        console.log(auth);
        axios
          .post("http://localhost:3240/createJob",
            {
              jobInfo: {
                title: jobtitle.current.value,
                type: jobtype.current.value,
                expLevel: experience.current.value,
                location: location.current.value,
                category: jobcategory.current.value,
                disabilityType: disable.current.value,
                salary: salary.current.value,
                subUrl: submission.current.value,
              },
              compInfo: {
                name: company_name.current.value,
                webUrl: website.current.value,
                size: size.current.value,
                email: email.current.value,
                bio: bio.current.value,
                logoUrl: logo.current.value,
              },
              jobDescp: {
                resp: responsible.current.value,
                reqSkillAndExp: requiredskills.current.value,
                abtRole: jobroles.current.value,
                idealCdt: ideal.current.value,
                perksBfts: benefits.current.value,
                hiringProcess: stages.current.value,
              },
            },
            {
              headers: {
                Authorization: "Bearer " + auth,
              },
            }
          )
          .then((response) => {
            console.log(response);
            console.log(response.status);
            if (response.status === 201) {
              navigation();
            }
          })
          .catch((err) => {
            console.log(err);
          });
    }
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className='bg-indigo-50 py-1'>
                <div className='text-center mt-16'>
                    <h2 className='text-black text-4xl font-bold tracking-wide'>Post your <span className='text-indigo-700 font-bold text-4xl tracking-wide'>Job Opening</span></h2>
                </div>
                <div className='justify-center w-11/12 h-full bg-white my-14 mx-14 py-10'>
                    <form onSubmit={handleSubmit}>
                        <div className='ml-14'>
                            <h2 className='text-indigo-600 font-bold text-3xl tracking-wide'>Job Information</h2>
                        </div>
                        <div class="mb-2 mt-6">
                            <label class="mb-2 text-xl block ml-10">Job Title</label>
                            <input type="text" class="p-2 rounded-lg block w-11/12 ml-10 border-2 border-gray-500" placeholder="Your Name" ref={jobtitle} />
                        </div>

                        <div class="grid grid-cols-6 gap-8 mb-2 mt-4">
                            <div class="col-span-6 sm:col-span-3">
                                <label class="my-2 text-xl block ml-10">Job Category</label>
                                <select className='p-2 rounded-lg block w-11/12 ml-10 border-2 border-gray-500' ref={jobcategory}>
                                    <option value="software engineer">Software Engineer</option>
                                    <option value="sales manager">Sales Manager</option>
                                    <option selected value="office assistant">Office Assistant</option>
                                    <option value="marketing manager">Marketing Manager</option>
                                    <option value="executive assistant">Executive Assistant</option>
                                    <option value="design">Design</option>
                                </select>
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                                <label class="my-2 text-xl block ml-10">Job Type</label>
                                <select className='p-2 rounded-lg block w-10/12 ml-10 border-2 border-gray-500' ref={jobtype}>
                                    <option value="full time">Full Time</option>
                                    <option value="part time">Part Time</option>
                                    <option selected value="internship">Internship</option>
                                </select>
                            </div>
                        </div>

                        <div id="exper/location" class="grid grid-cols-6 gap-8 mb-2 mt-4">
                            <div class="col-span-6 sm:col-span-3">
                                <label class="my-2 text-xl block ml-10">Seniority/Experience Level</label>
                                <select className='p-2 rounded-lg block w-11/12 ml-10 border-2 border-gray-500' ref={experience}>
                                    <option value="fresher">Fresher</option>
                                    <option value="1-3 Year">1-3 Year</option>
                                    <option selected value="3-5 Year">3-5 Year</option>
                                    <option value="5+">5+ Year</option>
                                </select>
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                                <label class="my-2 text-xl block ml-10">Job Location</label>
                                <input type="text" class="p-2 rounded-lg block w-10/12 ml-10 border-2 border-gray-500" placeholder="Your Name" ref={location} />
                            </div>
                        </div>

                        <div id="salary/disability" class="grid grid-cols-6 gap-8 mb-2 mt-4">
                            <div class="col-span-6 sm:col-span-3">
                                <label class="my-2 text-xl block ml-10">Job Salary</label>
                                <input type="text" class="p-2 rounded-lg block w-11/12 ml-10 border-2 border-gray-500" placeholder="Your Name" ref={salary} />
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                                <label class="my-2 text-xl block ml-10">Disability</label>
                                <select className='p-2 rounded-lg block w-10/12 ml-10 border-2 border-gray-500' ref={disable}>
                                    <option value="visually impaired">Visually Impaired</option>
                                    <option value="hard of hearing">Hard of Hearing</option>
                                    <option selected value="wheelchair bound">Wheelchair Bound</option>
                                    <option value="autism">Autism</option>
                                    <option value="dumb and deaf">Dumb and Deaf</option>
                                    <option value="disabled person">Disabled person</option>
                                </select>
                            </div>
                        </div>

                        <div class="mb-2 mt-6">
                            <label class="my-2 text-xl block ml-10">Application Submission URL</label>
                            <input type="text" class="p-2 rounded-lg block w-11/12 ml-10 border-2 border-gray-500" placeholder="Your Name" ref={submission} />
                        </div>
                        <hr className='mt-20 border-4' />
                        <div className='ml-14'>
                            <h2 className='text-indigo-600 font-bold text-3xl tracking-wide mt-10 '>Company Information</h2>
                        </div>

                        <div class="grid grid-cols-6 gap-8 mb-2 mt-4">
                            <div class="col-span-6 sm:col-span-3">
                                <label class="my-2 text-xl block ml-10">Company Name</label>
                                <input type="text" class="p-2 rounded-lg block w-11/12 ml-10 border-2 border-gray-500" placeholder="Your Name" ref={company_name} />
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                                <label class="my-2 text-xl block ml-10">Website URL</label>
                                <input type="text" class="p-2 rounded-lg block w-10/12 ml-10 border-2 border-gray-500" placeholder="Your Name" ref={website} />
                            </div>
                        </div>

                        <div id="exper/location" class="grid grid-cols-6 gap-8 mb-2 mt-4">
                            <div class="col-span-6 sm:col-span-3">
                                <label class="my-2 text-xl block ml-10">Company Size</label>
                                <select className='p-2 rounded-lg block w-11/12 ml-10 border-2 border-gray-500' ref={size}>
                                    <option value="1-10">1-10</option>
                                    <option value="10-50">10-50</option>
                                    <option selected value="50-500">50-500</option>
                                    <option value="500+">500+</option>
                                </select>
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                                <label class="my-2 text-xl block ml-10">Company Email</label>
                                <input type="text" class="p-2 rounded-lg block w-10/12 ml-10 border-2 border-gray-500" placeholder="Your Name" ref={email} />
                            </div>
                        </div>

                        <div id="salary/disability" class="grid grid-cols-6 gap-8 mb-2 mt-4">
                            <div class="col-span-6 sm:col-span-3">
                                <label class="my-2 text-xl block ml-10">Company Bio</label>
                                <textarea type="text" class="p-2 rounded-lg block w-11/12 ml-10 pb-20 border-2 border-gray-500" placeholder="Your Name" ref={bio} />
                            </div>
                        </div>

                        <div id="salary/disability" class="grid grid-cols-6 gap-8 mb-2 mt-4">
                            <div class="col-span-6 sm:col-span-3">
                                <label class="my-2 text-xl block ml-10">Company Logo URL</label>
                                <input type="text" class="p-2 rounded-lg block w-11/12 ml-10 border-2 border-gray-500" placeholder="Your Name" ref={logo} />
                            </div>
                        </div>
                        <hr className='mt-20 border-4' />
                        <div className='ml-14'>
                            <h2 className='text-indigo-600 font-bold text-3xl tracking-wide mt-10'>Job Description</h2>
                        </div>
                        <div class="mb-2 mt-6">
                            <label class="mb-2 text-xl block ml-10">Responsibilities</label>
                            <textarea type="text" class="p-2 rounded-lg block w-11/12 ml-10 pb-20 border-2 border-gray-500" placeholder="Your Name" ref={responsible} />
                        </div>
                        <div class="mb-2 mt-6">
                            <label class="mb-2 text-xl block ml-10">Required Skills and Experience</label>
                            <textarea type="text" class="p-2 rounded-lg block w-11/12 ml-10 pb-20 border-2 border-gray-500" placeholder="Your Name" ref={requiredskills} />
                        </div>
                        <div class="mb-2 mt-6">
                            <label class="mb-2 text-xl block ml-10">About Job Role</label>
                            <textarea type="text" class="p-2 rounded-lg block w-11/12 ml-10 pb-20 border-2 border-gray-500" placeholder="Your Name" ref={jobroles} />
                        </div>
                        <div class="mb-2 mt-6">
                            <label class="mb-2 text-xl block ml-10">Ideal Candidate</label>
                            <textarea type="text" class="p-2 rounded-lg block w-11/12 ml-10 pb-20 border-2 border-gray-500" placeholder="Your Name" ref={ideal} />
                        </div>
                        <div class="mb-2 mt-6">
                            <label class="mb-2 text-xl block ml-10">Perks and Benefits</label>
                            <textarea type="text" class="p-2 rounded-lg block w-11/12 ml-10 pb-20 border-2 border-gray-500" placeholder="Your Name" ref={benefits} />
                        </div>
                        <div class="mb-2 mt-6">
                            <label class="mb-2 text-xl block ml-10">Hiring Process/Stages</label>
                            <textarea type="text" class="p-2 rounded-lg block w-11/12 ml-10 pb-20 border-2 border-gray-500" placeholder="Your Name" ref={stages} />
                        </div>
                        <div>
                            <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold rounded ml-10 px-8 py-3 mt-16" type='submit'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

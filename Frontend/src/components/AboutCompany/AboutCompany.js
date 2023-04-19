import React from 'react';
import Google from "../../assets/Google.svg";
import Profile from "../../assets/Profile.svg";
import Profile_Email from "../../assets/Profile_Email.svg";
import Profile_LinkedIn from "../../assets/Profile_LinkedIn.svg";
import { Link, useLocation } from 'react-router-dom';


export const AboutCompany = () => {
    let location = useLocation();
    console.log(location.state.job);

    return (
      <div className="bg-indigo-50 py-2">
        <div className="justify-center w-11/12 h-full bg-white my-32 mx-14 py-20">
          <div className="flex flex-row flex-wrap ml-36">
            <div>
              <img
                src={location.state.job.compInfo.logoUrl}
                alt="pic"
                className=" h-32 w-32"
              />
            </div>
            <div className="col-span-2">
              <h2 className="text-2xl font-semibold ml-5 mt-2 text-black">
                {location.state.job.compInfo.name}
              </h2>
              <h1 className="text-3xl font-bold ml-5 mt-1 text-black">
                {location.state.job.jobInfo.title}
              </h1>
            </div>
            <div>
              <a href={location.state.job.compInfo.webUrl}>
                <button class="bg-indigo-600 hover:bg-indigo-800 text-white font-bold px-6 ml-5 mb-3 py-3 ml-96 rounded">
                  Apply Now
                </button>
              </a>
            </div>
          </div>
          <div class="px-6 pt-4 pb-2 mt-3 ml-48">
            <span class="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {location.state.job.jobInfo.expLevel}
            </span>
            <span class="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {location.state.job.jobInfo.type}
            </span>
            <span class="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {location.state.job.jobInfo.location}
            </span>
            <span class="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {location.state.job.jobInfo.category}
            </span>
            <span class="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {location.state.job.compInfo.size}
            </span>
          </div>
          <div>
            <h2 className="text-2xl mt-3 ml-56 mb-10">
              Expected Salary :{" "}
              <span className="text-green-700 font-bold">
                {location.state.job.jobInfo.salary}
              </span>
            </h2>
          </div>
          <hr />
          <div className="text-bold text-3xl mt-10 ml-10 font-bold">
            <h2>About the Company</h2>
          </div>
          <div>
            <p className="ml-10 mt-5">{location.state.job.compInfo.bio}</p>
          </div>
          <div className="text-bold text-3xl mt-10 ml-10 font-bold">
            <h2>Responsibilities</h2>
          </div>
          <div>
            <p className="ml-10 mt-5">{location.state.job.jobDescp.resp}</p>
          </div>
          <div className="text-bold text-3xl mt-10 ml-10 font-bold">
            <h2>Required Skills and Experience</h2>
          </div>
          <div>
            <p className="ml-10 mt-5">
              {location.state.job.jobDescp.reqSkillAndExp}
            </p>
          </div>
          <a href={location.state.job.compInfo.webUrl}>
            <button class="bg-indigo-600 hover:bg-indigo-800 text-white font-bold px-5 py-4 rounded mt-10 ml-10 mb-10">
              Apply Now
            </button>
          </a>
          <hr />
          <div>
            <h1 className="mt-3 ml-6">Job posted by</h1>
          </div>
          <div className="flex flex-row flex-wrap">
            <div>
              <img
                src={Profile}
                alt="pic"
                className="lg:w-20 lg:h-5/6 ml-7 pt-5"
              />
            </div>
            <Link to="/DetailedProfile">
              <div className="col-span-2">
                <h2 className="ml-4 mt-5 text-3xl">Shivama</h2>
                <h1 className="text-xl ml-4 text-black">
                  Sr. Product Designer at Google
                </h1>
              </div>
            </Link>
            <div className="col-span-2 flex ml-7">
              <img
                src={Profile_Email}
                alt="pic"
                className="lg:w-11/12 lg:h-5/6 ml-4 pt-5"
              />
              <img
                src={Profile_LinkedIn}
                alt="pic"
                className="lg:w-11/12 lg:h-5/6 ml-4 pt-5"
              />
            </div>
          </div>
        </div>
      </div>
    );
};

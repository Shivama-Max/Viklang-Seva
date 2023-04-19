import React from 'react';
import { Navbar } from '../DetailedProfile/Navbar/Navbar';
import './DetailedProfile.css';
import Profile from "../../assets/Profile.svg";
import Profile_Call from "../../assets/Profile_Call.svg";
import Profile_Email from "../../assets/Profile_Email.svg";
import Profile_Linkedin from "../../assets/Profile_LinkedIn.svg";
import Bag from "../../assets/Bag.svg";
import Pencil from "../../assets/Pencil.svg";

export const DetailedProfile = () => {
    return (
      <div>
        <Navbar />
        <div className="bg-indigo-50 py-1">
          <div className="justify-center w-11/12 h-full bg-white my-14 mx-14 py-10">
            <div className="flex flex-row flex-wrap ml-16">
              <div>
                <img src={Profile} alt="pic" className=" h-full w-full" />
              </div>
              <div className="col-span-2">
                <h2 className="text-4xl font-bold ml-7 mt-2 text-black">
                  Shivama
                </h2>
                <h1 className="text-lg font-semibold ml-7 mt-2 text-black">
                  <span className="text-lg font-bold mt-2 text-indigo-700">
                    Sr. Product Designer
                  </span>{" "}
                  at Google
                </h1>
              </div>
            </div>
            <p className="px-5 ml-8 mt-7 text-xl font-semibold">
              At Microsoft, we intend to develop solutions to realworld problems
              and help people around the world to follow their dreams and learn
              new technical skills.
            </p>
            <div className="flex flex-row flex-wrap ml-10 mt-10">
              <a href={"/dashboard"}>
                <img src={Profile_Call} alt="pic" className=" h-20 w-14" />
              </a>
              <a href={"/dashboard"}>
                <img src={Profile_Email} alt="pic" className=" h-20 w-14" />
              </a>
              <a href={"/dashboard"}>
                <img src={Profile_Linkedin} alt="pic" className=" h-20 w-14" />
              </a>
            </div>
            <div className="flex flex-row">
              <button class="bg-transparent text-indigo-700 font-bold border border-indigo-700 border-2 rounded mt-5 ml-14 py-2 px-8 flex">
                <img src={Bag} alt="pic" className="mt-1" />
                <h2 className="mt-2 ml-3">Product Designer</h2>
              </button>
              <button class="bg-transparent text-indigo-700 font-bold border border-indigo-700 border-2 rounded mt-5 ml-5 py-3 px-8 flex">
                <img src={Pencil} alt="pic" className="mt-1" />
                <h2 className="mt-2 ml-3">3-5 Years</h2>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

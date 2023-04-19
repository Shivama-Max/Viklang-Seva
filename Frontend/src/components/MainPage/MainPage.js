import React, { useState } from "react";
import Left from "../../assets/Left.svg";
import Middle from "../../assets/Middle.svg";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./MainPage.css";

export const MainPage = () => {
  const searchjob = React.createRef();
  const searchlocation = React.createRef();
  let navigate = useNavigate();
  function navigation() {
    navigate("/SearchJobs");
  }

  const [data, setData] = useState({
    getData: [],
  });

  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("location", searchlocation.current.value);
    sessionStorage.setItem("job", searchjob.current.value);
    navigation();

    if (searchjob.current.value === "") {
      axios
        .post("http://localhost:3001/findAllJobPos", {
          "jobInfo.location": searchlocation.current.value,
        })
        .then((response) => {
          setData({
            getData: response.data.data.jobs,
          });
          console.log(response.data.data.jobs);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (searchlocation.current.value === "") {
      axios
        .post("http://localhost:3001/findAllJobPos", {
          "jobInfo.title": searchjob.current.value,
        })
        .then((response) => {
          setData({
            getData: response.data.data.jobs,
          });
          console.log(response.data.data.jobs);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .post("http://localhost:3001/findAllJobPos", {
          "jobInfo.title": searchjob.current.value,
          "jobInfo.location": searchlocation.current.value,
        })
        .then((response) => {
          setData({
            getData: response.data.data.jobs,
          });
          console.log(response.data.data.jobs);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="bg-indigo-50 pt-5">
      <div className="mt-16">
        <h1 className="text-4xl lg:text-7xl font-bold tracking-normal text-center text-black">
          Get the{" "}
          <span className="text-4xl lg:text-7xl font-bold tracking-normal text-center text-indigo-600">
            Chance
          </span>
        </h1>
        <h2 className="text-4xl lg:text-7xl font-bold tracking-normal text-center text-black mt-4">
          You Deserve
        </h2>
        <h2 className="text-xl lg:text-3xl font-semibold tracking-normal text-center text-black tracking-wide mt-12">
          5033 Jobs & 786 candidates are registered
        </h2>
      </div>
      <div className="grid grid-cols-6 mt-10" style={{ height: "225px" }}>
        <div style={{ transform: "translate(10px, -100px)" }}>
          <img src={Middle} alt="img" className="image1 lg:h-11/12" />
        </div>
        <div class="col-start-2 col-span-4">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-row flex-wrap justify-center">
              <div class="flex justify-center">
                <div class="mb-2 xl:w-60">
                  <input
                    type="search"
                    class="form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleSearch"
                    placeholder="Search your job"
                    ref={searchjob}
                  />
                </div>
              </div>
              <div class="flex justify-center">
                <div class="mb-3 ml-5 xl:w-80">
                  <input
                    type="search"
                    class=" form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleSearch"
                    ref={searchlocation}
                    placeholder="Search in location"
                  />
                </div>
              </div>
              <Link to="/View">
                <button
                  class="bg-indigo-700 hover:bg-indigo-700 text-white font-bold px-6 ml-5 mb-3 h-12 w-26 rounded"
                  type="submit"
                >
                  Search
                </button>
              </Link>
            </div>
          </form>
        </div>
        <div style={{ transform: "translate(10px, -150px)" }}>
          <img src={Left} alt="img" className="image2 h-11/12" />
        </div>
      </div>
    </div>
  );
};

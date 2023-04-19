import React from "react";

export const JobsCategory = () => {
  return (
    <div class="w-full py-4 bg-white mb-10 pl-10">
      <h2 className="text-black text-2xl font-semibold mt-2">Category</h2>
      <div class="grid grid-cols-3 gap-2">
        <div class="mt-2 text-base col-span-2 ml-3">Visually Impaired</div>
        <div class="ml-8 mt-2">
          <button class="bg-violet-200 text-indigo-700 font-bold px-3 py-1 rounded-full">
            24
          </button>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-2">
        <div class="mt-2 text-base col-span-2 ml-3">Hard of Hearing</div>
        <div class="ml-8 mt-2">
          <button class="bg-violet-200 text-indigo-700 font-bold px-3 py-1 rounded-full">
            33
          </button>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-2">
        <div class="mt-2 text-base col-span-2 ml-3">Wheelchair Bound</div>
        <div class="ml-8 mt-2">
          <button class="bg-violet-200 text-indigo-700 font-bold px-3 py-1 rounded-full">
            17
          </button>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-2">
        <div class="mt-2 text-base col-span-2 ml-3">Dumb and Deaf</div>
        <div class="ml-8 mt-2">
          <button class="bg-violet-200 text-indigo-700 font-bold px-3 py-1 rounded-full">
            22
          </button>
        </div>
      </div>
      <h3 className="text-indigo-600 font-semibold mt-3">View More</h3>
      <h2 className="text-black text-2xl font-semibold mt-5">Roles</h2>
      <div class="flex justify-left">
        <div>
          <div class="form-check">
            <input
              class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label
              class="form-check-label inline-block text-gray-800"
              for="flexCheckDefault"
            >
              Accountant
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label
              class="form-check-label inline-block text-gray-800"
              for="flexCheckChecked"
            >
              Product Manager
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label
              class="form-check-label inline-block text-gray-800"
              for="flexCheckChecked"
            >
              Frontend Developer
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label
              class="form-check-label inline-block text-gray-800"
              for="flexCheckChecked"
            >
              Designer
            </label>
          </div>
        </div>
      </div>

      <div class="flex justify-left">
        <div>
          <button className="bg-violet-200 text-indigo-600 font-bold rounded mt-7 py-2 px-10">
            Apply
          </button>
          <button className="bg-transparent border border-indigo-600 text-indigo-600 font-bold rounded mt-7 ml-4 py-2 px-10">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

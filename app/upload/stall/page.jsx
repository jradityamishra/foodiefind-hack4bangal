"use client";
import React, { useState } from "react";
import Link from "next/link";
import LocationPicker from "../../../app/components/LocationPicker";
import MapGit from "../../components/MapGit";
import { MultiSelect } from "@mantine/core";
import axios from "axios";
import { LngLat } from "mapbox-gl";

const page = () => {
    const [searchValue, onSearchChange] = useState('');
  return (
    <>
      <div class="flex justify-center w-full max-w-sm mx-auto  overflow-hidden my-24 bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
        {/* <div class="hidden bg-cover lg:block lg:w-1/2" id="signup"></div> */}

        <div class="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div class="flex justify-center mx-auto">
            <h1 className="font-bold">FoodieFind</h1>
          </div>

          <p class="mt-3 text-xl text-center  font-semibold">
            Welcome to FoodieFind, <br /> Add your Fav Stall here !
          </p>

          <a
            href="#"
            class="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
          ></a>

          {/* <div class="flex items-center justify-between mt-4"></div> */}
          <form onSubmit={(e) => e.preventDefault()}>
            {/* Name */}
            <div class="mt-4">
            <label
              class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              for="LoggingEmailAddress"
            >
             stall Name
            </label>
            <input
              id="LoggingEmailAddress"
              class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
            />
          </div>
          {/* owner name */}
          <div class="mt-4">
            <label
              class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              for="LoggingEmailAddress"
            >
             owner Name
            </label>
            <input
              id="LoggingEmailAddress"
              class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
            />
          </div>
          {/* single shop pic */}
          <div className='mt-4'>
            
<label class="block mb-2 text-sm font-medium text-black-600 dark:text-gray-200" for="multiple_files">Upload your shop picture</label>
<input class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" id="multiple_files" type="file" multiple/>

          </div>
          {/* food images shop pic */}
          <div className='mt-4'>
            
<label class="block mb-2 text-sm font-medium text-black-600 dark:text-gray-200" for="multiple_files">Upload good food images</label>
<input class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" id="multiple_files" type="file" multiple/>

          </div>
          {/* menue  pic */}
          <div className='mt-4'>
            
<label class="block mb-2 text-sm font-medium text-black-600 dark:text-gray-200" for="multiple_files">Upload menue images</label>
<input class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" id="multiple_files" type="file" multiple/>

          </div>
          {/* food name */}
          <div className='mt-4'>
          <MultiSelect
      data={['chowmin', 'momo', 'pizza', 'chat', 'golgappa', 'Roll', 'litti choka']}
      label="choose dish-"
      placeholder="Pick all that you have"
      searchable
      searchValue={searchValue}
      onSearchChange={onSearchChange}
      nothingFound="Nothing found"
    />
          </div>
          {/* opening and closing time */}
          <div className='flex'>
          <div class="mt-4 mr-2">
            <label
              class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              for="LoggingEmailAddress"
            >
             opening time
            </label>
            <input
              id="LoggingEmailAddress"
              class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
            />
          </div>
          <div class="mt-4">
            <label
              class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              for="LoggingEmailAddress"
            >
             closing time
            </label>
            <input
              id="LoggingEmailAddress"
              class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
            />
          </div>

          </div>

            <div class="mt-6">
              <button
                class="w-full bg-sky-500 px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-head-color rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default page;

"use client";
import { useState } from "react";

export default function Home() {
  const [keywords, setKeywords] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", { keywords, location, category });
  };

  return (
    <>
      <head>
        <title>
        Future It Touch: The Easiest Way to Land Your Next Job
        </title>
        <meta
          name="description"
          content="Kickstart your career with Future IT Touch! Learn web design and digital marketing through expert-led courses and real projects to land your dream job faster."
        />
      </head>

      <div className="bg-white text-black h-full">
        <div
          className="relative p-5 lg:p-20 flex items-center justify-center text-center text-white bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/banner/job-page-header-img.webp)",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
          <div className="relative z-10 px-4">
            <h1 className="text-2xl md:text-5xl font-bold leading-tight">
              The Easiest Way <br /> to Get Your New Job
            </h1>
            <p className="mt-3 text-lg md:text-xl opacity-90">
              Find jobs, create trackable resumes, and enrich your applications.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center mt-6 px-4 w-full max-w-4xl mx-auto lg:bg-white p-3 rounded-full shadow-lg">
              <input
                type="text"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                placeholder="Keywords"
                className="p-3 w-full md:w-auto flex-1 border rounded-full outline-none text-gray-700"
              />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
                className="p-3 w-full md:w-auto flex-1 border rounded-full outline-none text-gray-700 mt-2 md:mt-0 md:ml-2"
              />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="p-3 w-full md:w-auto border rounded-full outline-none text-gray-700 mt-2 md:mt-0 md:ml-2"
              >
                <option value="">Choose a category...</option>
                <option value="IT">IT</option>
                <option value="Marketing">Marketing</option>
                <option value="Finance">Finance</option>
              </select>
              <button
                onClick={handleSearch}
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 mt-2 md:mt-0 md:ml-2 w-full md:w-auto"
              >
                SEARCH JOBS
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

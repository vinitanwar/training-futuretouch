"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import React from "react";

import BreadcrumbBanner from "../components/Breadcrumb";
import Counter from "../components/Counter";
import axios from "axios";
import { baseurl, imgurl } from "../components/common/apiserve";

const TeamMember = () => {
  // const teamMembers = [
  //   {
  //     name: "Jonkin Jullinor",
  //     role: "Product supplier",
  //     image: "/images/team/team1.webp",
  //   },
  //   {
  //     name: "Naimuk Waninolin",
  //     role: "Office executive support",
  //     image: "/images/team/team1.webp",
  //   },
  //   {
  //     name: "Moris Julfikar",
  //     role: "Regional supplier",
  //     image: "/images/team/team1.webp",
  //   },
  //   {
  //     name: "Waxin Alexgander",
  //     role: "International supplier",
  //     image: "/images/team/team1.webp",
  //   },
  // ];
  const [teamMembers, setTeamMembers] = useState();
  const [loader, setLoader] = useState(true);

  const handelteamAPi = async () => {
    setLoader(true);
    let response = await axios.get(`${baseurl}/ourteam`);
    response = await response.data;
    setTeamMembers(response);
    setLoader(false);
  };

  useEffect(() => {
    handelteamAPi();
  }, []);

  return (
    <>
      <head>
        <title>
        Our Team - Future IT Touch's Institute in Chandigarh, India
        </title>
        <meta
          name="description"
          content="Future IT Touch's Institute has a skilled team of experts dedicated to providing top-quality IT training in Chandigarh, Mohali, Panchkula, and Himachal Pradesh."
        />
      </head>

      <BreadcrumbBanner
        description="Our team is a passionate group of professionals dedicated to innovation, collaboration, and excellence. With diverse expertise and a shared vision, we work together to deliver outstanding solutions that drive success. Committed to creativity and efficiency, we take pride in fostering a positive and dynamic environment where ideas thrive. Meet the people who make it all happen—our team is here to inspire, support, and achieve great things together!"
        bgImage="/images/banner/blog-banner.webp"
      />

      <section className="team-area py-24 bg-gray-50 px-5 md:px-28">
        <div className="container">
          <div className="text-center mb-10">
            <span className="text-[#fa4612] uppercase text-lg">Our TEAM</span>
            <h1 className="text-3xl md:text-[40px] underline-animation left mt-3 font-bold ">
              The Professionals Who Are Always At Your Support
            </h1>
          </div>
          {!loader && (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers?.map((member, index) => (
                <div
                  key={index}
                  className="single-team group relative overflow-hidden bg-white shadow-lg text-center h-[380px] "
                >
                  <div className="absolute top-1 right-1 z-10 bg-[#3388e4] p-1 text-white rounded-md text-sm">
                    {member.experience} experience
                  </div>
                  <Image
                    width={700}
                    height={700}
                    src={`${imgurl}/storage/${member.image}`}
                    alt={member.name}
                    className="w-full h-full object-cover absolute transition-transform transform hover:scale-110 filter grayscale hover:grayscale-0 duration-700 mb-4"
                  />
                  <div className="team-content absolute bottom-0 w-full bg-blue-600 text-center p-2 transition-transform duration-500 transform perspective-300 rotate-x-90 origin-bottom group-hover:rotate-x-0">
                    <p className="text-xl font-semibold text-white">
                      {member.name}
                    </p>
                    <span className="text-sm text-white">
                      {member.position}
                    </span>
                  </div>
                  <ul className="absolute hidden group-hover:block top-0 justify-center">
                    <li className="w-10 h-10 bg-blue-600 text-center text-white leading-[40px] border-b border-[#19345a] transition-transform duration-500 transform rotate-y-90 origin-left group-hover:rotate-x-0 delay-200">
                      <Link
                        href=""
                        className="text-gray-400 hover:text-blue-600 transition"
                      >
                        <i className="fab fa-facebook-f text-lg text-white"></i>
                      </Link>
                    </li>
                    <li className="w-10 h-10 bg-blue-600 text-center text-white leading-[40px] border-b border-[#19345a] transition-transform duration-500 transform rotate-y-90 origin-left group-hover:rotate-x-0 delay-200">
                      <Link
                        href=""
                        className="text-gray-400 hover:text-blue-400 transition"
                      >
                        <i className="fab fa-twitter text-lg text-white"></i>
                      </Link>
                    </li>
                    <li className="w-10 h-10 bg-blue-600 text-center text-white leading-[40px] border-b border-[#19345a] transition-transform duration-500 transform rotate-y-90 origin-left group-hover:rotate-x-0 delay-200">
                      <Link
                        href=""
                        className="text-gray-400 hover:text-pink-600 transition"
                      >
                        <i className="fab fa-instagram text-lg text-white"></i>
                      </Link>
                    </li>
                    <li className="w-10 h-10 bg-blue-600 text-center text-white leading-[40px] border-b border-[#19345a] transition-transform duration-500 transform rotate-y-90 origin-left group-hover:rotate-x-0 delay-200">
                      <Link
                        href=""
                        className="text-gray-400 hover:text-blue-700 transition"
                      >
                        <i className="fab fa-linkedin text-lg text-white"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <Counter />
    </>
  );
};

export default TeamMember;

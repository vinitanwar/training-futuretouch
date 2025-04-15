import React from "react";
import BreadcrumbBanner from "../components/Breadcrumb";
import { FaCheckCircle, FaRegCheckCircle } from "react-icons/fa";
import Link from "next/link";

const page = () => {
  const careerData = [
    {
      title: "Digital Marketing Intern ",
      posts: "2 Posts available",
      location: "Ahmedabad, Gujarat 380013",
      link: "/career-enquiry",
      description:
        "Brandveda, a leading digital marketing institute, is seeking enthusiastic and talented interns to join our growing team.",
      jobType: "Flexible",
      experience: "1 Year",
    },
    {
      title: "Video Editor ",
      posts: "1 Post available",
      location: "Ahmedabad, Gujarat 380013",
      link: "/career-enquiry",
      description:
        "Passionate video editor (0-3 yr experience) wanted! Who edit engaging videos for Brandveda's marketing & education channels (Ahmedabad).",
      jobType: "Full-time",
      experience: "3 years",
    },
    {
      title: "Sales Manager (Ahmedabad, Gujarat)",
      posts: "2 Posts available",
      location: "Ahmedabad, Gujarat 380013",
      link: "/career-enquiry",
      description:
        "We are looking for a driven Sales Manager with 2-5 years of experience to lead student enrollment for Brandveda's digital marketing programs (Ahmedabad).",
      jobType: "Full-time",
      experience: "2-5 years",
    },
  ];

  return (
    <>
      <head>
        <title>Join Future It Touch – Build the Future of Web & SEO</title>
        <meta
          name="description"
          content="Join Future IT Touch – Build your future with expert-led Web Design & Digital Marketing courses. Master SEO, creative design, and boost your career success!"
        />
      </head>

      <BreadcrumbBanner
        description="At Future It Touch, we believe in fostering a culture of innovation, collaboration, and growth. Whether you're an experienced professional or just starting your journey, we offer exciting opportunities to develop your skills, work on meaningful projects, and be part of a dynamic team. Explore our open positions and take the next step in your career with us!"
        bgImage="/images/banner/blog-banner.webp"
      />
      <section className="career-connectivity pt-0 lg:pt-20 py-20 px-0 lg:px-28  ">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Left Images */}
            <div className="flex gap-10  items-center md:items-start">
              <div className=" w-full lg:w-[410px] h-[366px]">
                <img
                  src="/images/about.webp"
                  alt="Career Image"
                  className="rounded-lg w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="w-full lg:w-[219px] h-[344px] mt-40">
                <img
                  src="/images/about2.webp"
                  alt="Career Image 2"
                  className="rounded-lg w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="text-lg font-semibold text-gray-700">
                Why we are
              </div>
              <h2 className="text-xl lg:text-5xl font-bold mt-2 mb-4 text-gray-900">
                We help connectivity across the world
              </h2>
              <p className="text-gray-600 mb-6">
                Find your next job, effortlessly. <br /> Browse Digital
                Marketing Jobs and apply today!
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <FaRegCheckCircle className="text-2xl gap-2" />
                  <div>
                    <div className="text-lg font-semibold text-gray-900">
                      Full network visibility worldwide
                    </div>
                    <p className="text-gray-600">
                      Amet consectetur adipiscing elit sed eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaRegCheckCircle className="text-2xl gap-2" />
                  <div>
                    <div className="text-lg font-semibold text-gray-900">
                      Supported the use of fiber optic cable
                    </div>
                    <p className="text-gray-600">
                      Amet consectetur adipiscing elit sed eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-50 to-white">
        <div className="container mx-auto px-5 lg:px-28">
          <div className="text-center">
            <div className="text-lg font-semibold text-gray-700">
              Job Opening
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">
              Jobs & Careers
            </h2>
            <div className="mt-4 text-gray-600 text-lg">
              Explore exciting job opportunities with us!
            </div>
          </div>
          <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
            {careerData.map((job, index) => (
              <div
                key={index}
                className="p-6 bg-white transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:translate-y-2"
              >
                <h1 className="text-xl font-semibold text-gray-800">
                  {job.title}
                </h1>
                <div className="mt-2 text-gray-600">
                  <p className="text-lg">{job.posts}</p>
                  <p className="text-lg">{job.location}</p>
                </div>
                <Link
                  href={job.link}
                  className="inline-block mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-xl transition-all duration-200"
                >
                  Apply Now
                </Link>
                <div className="mt-4 text-base text-gray-700">
                  <p>
                    <strong>Job Description:</strong> {job.description}
                  </p>
                  <p>
                    <strong>Job Type:</strong> {job.jobType}
                  </p>
                  <p>
                    <strong>Experience:</strong> {job.experience}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;

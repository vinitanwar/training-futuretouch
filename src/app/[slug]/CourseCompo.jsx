"use client";
import Image from "next/image";

import { useParams } from "next/navigation";
import Link from "next/link";
import {
  FaCheck,
  FaAward,
  FaBookmark,
  FaClock,
  FaFileAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaFilter,
  FaGlobe,
  FaHeart,
  FaLaptop,
  FaList,
  FaPlay,
  FaShoppingCart,
  FaStar,
  FaStarHalf,
  FaChevronDown,
  FaChevronUp,
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import BreadcrumbBanner from "@/app/components/Breadcrumb";
import FAQ from "@/app/components/FAQ";
import Process from "@/app/components/Process";

import LocationCards from "@/app/components/LocationCards";
import axios from "axios";
import { baseurl, storageLink } from "@/app/components/common/apiserve";
import CurriculumAccordion from "@/app/components/Curriculum";
import { usePathname } from "next/navigation";
import Form from "../components/Form";




const SkeletonLoader = () => (
  <div className="animate-pulse px-5 lg:px-28 my-20">
    <div className="w-full h-8 bg-gray-300 rounded mb-5"></div>
    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
      <div className="w-32 h-6 bg-gray-300 rounded"></div>
    </div>

    <div className="w-full h-40 bg-gray-300 rounded mt-4"></div>
    <div className="flex space-x-4 mt-4">
      <div className="w-1/3 h-6 bg-gray-300 rounded"></div>
      <div className="w-1/3 h-6 bg-gray-300 rounded"></div>
      <div className="w-1/3 h-6 bg-gray-300 rounded"></div>
    </div>  <div className="w-full h-40 bg-gray-300 rounded mt-4"></div>
    <div className="flex space-x-4 mt-4">
      <div className="w-1/3 h-6 bg-gray-300 rounded"></div>
      <div className="w-1/3 h-6 bg-gray-300 rounded"></div>
      <div className="w-1/3 h-6 bg-gray-300 rounded"></div>
    </div>  <div className="w-full h-40 bg-gray-300 rounded mt-4"></div>
    <div className="flex space-x-4 mt-4">
      <div className="w-1/3 h-6 bg-gray-300 rounded"></div>
      <div className="w-1/3 h-6 bg-gray-300 rounded"></div>
      <div className="w-1/3 h-6 bg-gray-300 rounded"></div>
    </div>  <div className="w-full h-40 bg-gray-300 rounded mt-4"></div>
    <div className="flex space-x-4 mt-4">
      <div className="w-1/3 h-6 bg-gray-300 rounded"></div>
      <div className="w-1/3 h-6 bg-gray-300 rounded"></div>
      <div className="w-1/3 h-6 bg-gray-300 rounded"></div>
    </div>  <div className="w-full h-40 bg-gray-300 rounded mt-4"></div>
    <div className="flex space-x-4 mt-4">
      <div className="w-1/3 h-6 bg-gray-300 rounded"></div>
      <div className="w-1/3 h-6 bg-gray-300 rounded"></div>
      <div className="w-1/3 h-6 bg-gray-300 rounded"></div>
    </div>

  </div>
);

export default function CourseCompo({ slug }) {
  const pathname = usePathname();


  const param = useParams()



  const [loading, setisloading] = useState(true)
  const [courseinfo, setCourseinfo] = useState()


  const [expanded, setExpanded] = useState(false);




  const salaryData = [
    { label: "₹10L", height: "h-6", color: "bg-orange-200" },
    { label: "₹20L", height: "h-16", color: "bg-orange-400" },
    { label: "₹30L", height: "h-3", color: "bg-orange-200" },
  ];

  const jobData = [
    { label: "Annual job growth rate by 2025-2030", value: "85%" },
  ];




  const fetchcourseapi = async () => {
    setisloading(true)

    let response = await axios.get(`${baseurl}/courses/${slug}`)
    response = await response.data
    console.log(response)
    setCourseinfo(response)
    setisloading(false)

  }


  useEffect(() => {
    fetchcourseapi()
  }, [])


  if (loading) {
    return <SkeletonLoader />;
  }



  console.log(courseinfo.course)


  return (
    <>


      {!loading &&
        <>
          <head>
            <title>{courseinfo.course?.metatitle}</title>
            <meta
              name="description"
              content={courseinfo.course?.metades}
            />
          </head>

          <BreadcrumbBanner
            title={courseinfo.course?.title}
            description={`Chandigarh is a hub for startups and businesses, making it an ideal place to learn ${courseinfo.course?.title}. Our ${courseinfo.course?.title} Course in Chandigarh provides in-depth training on Google Ads, Facebook marketing, content marketing, and analytics. Led by industry experts, this course includes live projects, case studies, and certification support.`}
            bgImage="/images/banner/blog-banner.webp"
            sideImage={`${storageLink}/${courseinfo?.course?.course_img}`}

          />
          {console.log('courseinfo.course?.course_img', courseinfo.course?.course_img)}

          <div className="mx-auto px-5 lg:px-28 py-5 lg:py-20">
            <div className="block lg:flex gap-10">
              <div className="pt-5 w-full lg:w-[70%] ">
                <div className="">
                  <h1 className="text-lg lg:text-[42px] leading-[50px] font-bold text-gray-800 mb-4">
                    Complete Guide to {courseinfo.course?.title}: Beginner to Advanced
                  </h1>

                  <div className="flex items-center space-x-2">
                    <ul className="flex text-yellow-500">
                      <li>
                        <FaStar />
                      </li>
                      <li>
                        <FaStar />
                      </li>
                      <li>
                        <FaStar />
                      </li>
                      <li>
                        <FaStar />
                      </li>
                      <li>
                        <FaStarHalf />
                      </li>
                    </ul>
                    <span className="text-gray-600">(1,230 reviews)</span>
                  </div>

                  <div className="my-8 border-y py-5 flex flex-wrap gap-y-5 justify-between items-center ">
                    <div className="flex border-r-0 lg:border-r pr-10 items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <Link href="#">
                          <Image
                            src="/images/team/team1.webp"
                            alt="author"
                            width={48}
                            height={48}
                          />
                        </Link>
                      </div>
                      <div className="ml-4">
                        <span className="text-gray-500 text-sm">Created by</span>
                        <div className="text-lg font-medium">
                          <Link
                            href=""
                            className="text-blue-600 hover:underline"
                          >
                            Vishal Kumar
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className=" border-r-0 lg:border-r pr-10">
                      <p className="text-gray-700 font-medium">Total Enrolled</p>
                      <span className="text-gray-500">12,580</span>
                    </div>
                    <div className=" border-r-0 lg:border-r pr-10">
                      <p className="text-gray-700 font-medium">Last Update</p>
                      <span className="text-gray-500">15 September 2024</span>
                    </div>
                    <div className="">
                      <p className="text-gray-700 font-medium">Category</p>
                      <span className="text-blue-600 hover:underline">
                        <Link href="#">{courseinfo.course?.title}</Link>
                      </span>
                    </div>
                  </div>

                  <div className="mb-8 bg-white ">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Description
                    </h3>
                    <p className="text-gray-600 text-justify" dangerouslySetInnerHTML={{ __html: courseinfo.course?.des }}>
                      { }
                    </p>
                  </div>







                  <div className="relative p-6 bg-gray-100 rounded-lg  mb-8">
                    <div
                      className={`transition-all overflow-hidden ${expanded ? "max-h-max" : "max-h-[500px]"
                        } duration-500`}
                    >
                      <div className="text-gray-800">

                        <div className="mb-6">
                          <h3 className="text-xl font-bold my-4">
                            {courseinfo.course?.title} Training Institute
                          </h3>

                          <p className="text-base">{courseinfo.course?.title} certification is globally recognized as a mark of excellence in project management...</p>



                          <h3 className="text-xl font-bold my-4">
                            Skills Covered In {courseinfo.course?.title}
                          </h3>


                          <ul className="list-disc pl-5 text-base">
                            {courseinfo.course?.skill?.map((skill, idx) => (
                              <li key={idx}>{skill}</li>
                            ))}
                          </ul>


                          <h3 className="text-xl font-bold my-4">
                            Who Can learn {courseinfo.course?.title}       </h3>


                          <ul className="list-disc pl-5 text-base">
                            {courseinfo.course?.pre_requisites?.map((skill, idx) => (
                              <li key={idx}>{skill}</li>
                            ))}
                          </ul>

                          <h3 className="text-xl font-bold my-4">
                            Process to Acquire {courseinfo.course?.title} Certification      </h3>


                          <ol className=" pl-5 text-base ">
                            {courseinfo.course?.process_to_acquire?.map((skill, idx) => (
                              <li key={idx}>{skill}</li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <button
                        onClick={() => setExpanded(!expanded)}
                        className="btn btn-link text-dark flex items-center mt-2"
                      >
                        <span className="text-sm font-medium">
                          <div className="flex items-center gap-2">
                            {expanded ? (
                              <>
                                Read Less <FaChevronDown />
                              </>
                            ) : (
                              <>
                                Read More <FaChevronUp />
                              </>
                            )}
                          </div>
                        </span>
                        <i
                          className={`bi bi-chevron-${expanded ? "up" : "down"
                            } text-xl mx-1 transition-transform duration-500`}
                        ></i>
                      </button>
                    </div>
                  </div>


                  <div className="mb-8 bg-white">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      What you'll learn
                    </h3>

                    {console.log('courseinfo?.what_you_learn', courseinfo.course?.what_you_learn)}
                    <div className="grid md:grid-cols-2 gap-4 bg-blue-100 p-6 rounded-3xl">
                      {courseinfo.course?.what_you_learn?.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-2 text-base "
                        >
                          <FaCheck className="text-green-500 mt-1" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {courseinfo && <div className="mb-8">
                    <div className="bd-post-details-list">
                      <h3 className="text-2xl font-semibold mb-4">Requirements</h3>
                      <ul className="list-disc pl-6 space-y-2">

                        {courseinfo.course?.requirements?.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  }
                  <div className="p-4 mt-4 mb-8 bg-gray-100 rounded-lg">
                    <div className="max-w-2xl w-full">
                      <h2 className="text-xl font-bold text-gray-700 my-4">
                        Demand for {courseinfo.course?.title} Certification Training Certification
                      </h2>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow">
                      <div className="block lg:flex space-between">
                        <div className="w-full md:w-1/2 border-r-0 lg:border-r-2 px-5">
                          <b className="text-base font-bold text-gray-500">
                            Annual Salary
                          </b>
                          <div className="flex flex-col items-center gap-2 mt-2">
                            <div className="flex items-end gap-3">
                              {salaryData.map((item, index) => (
                                <div
                                  key={index}
                                  className="flex flex-col items-center gap-1"
                                >
                                  <b className="text-xs font-bold text-gray-600">
                                    {item.label}
                                  </b>
                                  <div
                                    className={`w-12 ${item.height} ${item.color}`}
                                  ></div>
                                </div>
                              ))}
                            </div>

                            <div className="flex justify-between w-full text-base text-gray-500">
                              <span>Min</span>
                              <span>Average</span>
                              <span>Max</span>
                            </div>
                          </div>
                        </div>

                        {pathname !== "/stock-marketing/" && (
                          <div className="w-full md:w-1/2 border-r-0 lg:border-r-2 px-5">
                            <b className="text-base font-bold text-gray-500">Hiring Companies</b>
                            <div className="flex flex-wrap mt-8">
                              <Image
                                src="/images/Nav-logo.webp"
                                className="w-auto h-14 lg:h-16"
                                alt="Future it touch Web development Institiute"
                                width={200}
                                height={100}
                                loading="lazy"
                              />
                            </div>
                          </div>
                        )}


                        <div className="w-full md:w-1/2 border-0 px-5">
                          <b className="text-base font-bold text-gray-500">
                            Available Jobs
                          </b>
                          <div className="flex flex-col items-start mt-3 gap-3">
                            <span className="text-[#f5c06a]  text-3xl">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 512 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"></path>
                              </svg>
                            </span>
                            {jobData.map((job, index) => (
                              <div
                                key={index}
                                className="flex flex-col items-start gap-1"
                              >
                                <b className="text-base font-bold text-gray-900">
                                  {job.value}
                                </b>
                                <div className="text-base text-gray-500">
                                  {job.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>




                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold mb-4">Curriculum</h3>

                    {/* {courseinfo?.curriculum?.map((section, index) => (
                  <div key={index} className="border">
                    <div
                      className="accordion-title p-4 cursor-pointer border-b flex justify-between items-center"
                      onClick={() => toggleAccordion(index)}
                    >
                      <h4 className="text-lg font-semibold">{section.title}</h4>
                      <span
                        className={`transform transition-transform ${
                          activeIndex === index ? "rotate-180" : ""
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-chevron-down"
                          viewBox="0 0 16 16"
                        >
                          <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                        </svg>
                      </span>
                    </div>

                   







                    <div
                      className={`${
                        activeIndex === index ? "block" : "hidden"
                      }`}
                    >
                      <div className="p-4 space-y-3">
                        {section.content.map((item, idx) => (
                          <div key={idx} className="p-3 border-b">
                            <div
                              className="flex justify-between items-center cursor-pointer"
                              onClick={() => toggleItem(`${index}-${idx}`)}
                            >
                              <span className="flex items-center space-x-2">
                                <FaFileAlt />
                                <span className="font-medium">
                                  {item.title}
                                </span>
                              </span>
                              <span
                                className={`transform transition-transform ${
                                  activeIndex === index ? "rotate-180" : ""
                                }`}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-chevron-down"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                </svg>
                              </span>
                            </div>

                           
                            {expandedItem === `${index}-${idx}` && (
                              <div className="p-4 mt-2 bg-gray-100">
                                {section.content.map((subItem, subIndex) => (
                                  <p key={subIndex} className="py-1">
                                    {subItem.title}
                                  </p>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}  */}


                    {courseinfo.course?.curriculum && <CurriculumAccordion curriculum={courseinfo.course?.curriculum} />}


                  </div>
                </div>
              </div>

              <div className="w-full lg:w-[28%] ">
                <div className="sticky top-24 mt-5 lg:mt-0">
                  <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                    <h2 className="text-xl mb-5 font-bold uppercase">
                      GET A FREE{" "}
                      <strong className="text-blue-600">DEMO CLASS</strong>
                    </h2>
                    <Form />
                  </div>
                  <div className="space-y-6 bg-white p-6 shadow-lg rounded-lg">
                    <div className="relative mb-6">
                      <Image
                        src={`${storageLink}/${courseinfo?.course?.stu_img}`}
                        alt="Course Preview"
                        width={500}
                        height={300}
                        className="rounded-lg"
                      />
                      {/* <div className="absolute inset-0 flex items-center justify-center">
                        <Link
                          href="https://www.youtube.com/watch?v=HKk4oLIzhhM"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center bg-black bg-opacity-50 rounded-full p-4 text-white hover:bg-opacity-70 transition"
                        >
                          <FaPlay size={32} />
                        </Link>
                      </div> */}
                    </div>

                    {/* <div className="flex items-center justify-between text-lg font-semibold">
                      <span className="text-primary">₹ 1925.00</span>
                      <span className="line-through text-gray-500">₹ 1925.00</span>
                    </div> */}

                    <ul className="space-y-4 text-gray-700">
                      {[
                        {
                          icon: <FaFilter size={20} />,
                          label: "Level",
                          value: "Beginners",
                        },
                        {
                          icon: <FaLaptop size={20} />,
                          label: "Lectures",
                          value: "8 Lectures",
                        },
                        {
                          icon: <FaClock size={20} />,
                          label: "Duration",
                          value: "6 months",
                        },
                        {
                          icon: <FaList size={20} />,
                          label: "Category",
                          value: "Data Science",
                        },
                        {
                          icon: <FaGlobe size={20} />,
                          label: "Language",
                          value: "English",
                        },
                        {
                          icon: <FaBookmark size={20} />,
                          label: "Access",
                          value: "Full Lifetime",
                        },
                        {
                          icon: <FaAward size={20} />,
                          label: "Certificate",
                          value: "Yes",
                        },
                        {
                          icon: <FaFileAlt size={20} />,
                          label: "Resources",
                          value: "5 Downloadable Files",
                        },
                      ].map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center justify-between border-b  pb-4"
                        >
                          <div className="flex items-center gap-2">
                            {item.icon}
                            <span>{item.label}</span>
                          </div>
                          <span className="font-medium">{item.value}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact-us"
                      className="my-5 px-4 py-3 text-lg font-semibold bg-blue-600 text-white flex  justify-center items-center text-center capitalize border border-blue-400 rounded-lg"
                    >
                      <span>Join This Course</span>
                      <IoIosArrowForward className="ml-2" />
                    </Link>
                    <div className="flex justify-center gap-5 items-center mt-6">
                      <h3 className="text-lg font-semibold ">Share:</h3>
                      <div className="flex space-x-4">
                        {[
                          { icon: <FaFacebookF />, url: "https://facebook.com" },
                          { icon: <FaTwitter />, url: "https://twitter.com" },
                          { icon: <FaInstagram />, url: "https://instagram.com" },
                          { icon: <FaYoutube />, url: "https://youtube.com" },
                        ].map((social, index) => (
                          <Link
                            key={index}
                            href={social.url}
                            className="w-9 h-9 flex justify-center items-center border border-blue-600 text-blue-600 overflow-hidden transition-all duration-500 hover:bg-blue-200"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {social.icon}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <LocationCards datarelated={courseinfo.related_courses} coursename={param?.slug} />

          {/* <div className="bg-gray-100 rounded px-5 lg:px-28 py-20" id="Tuition">
        <div className="max-w-2xl w-full">
          <h2 className="text-sm font-bold text-gray-500">
            PMP® Certification Training COURSE PRICING
          </h2>
          <p className="text-3xl font-bold text-gray-900 mt-2 mb-5">
            Tuition Fee
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingData.map((course) => (
            <div
              key={course.id}
              className="border border-blue-600 bg-white shadow-md rounded-lg "
            >
              {course.tag && (
                <div className="bg-blue-600 text-white px-[3px] py-[2px] w-max text-center mx-auto rounded-b">
                  <span className="text-xs capitalize">{course.tag}</span>
                </div>
              )}
              <div className="p-4 flex flex-col items-center">
                <div className="w-full">
                  <h3 className="text-lg font-bold text-gray-900 text-center">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-500 text-center mt-2">
                    {course.subtitle}
                  </p>

                
                  <div className="mt-4 w-full border-t border-dashed border-gray-400">
                    <div className="mt-4 pb-2 border-b border-dashed border-gray-400">
                      <h4 className="text-base font-bold text-gray-900">
                        Solid Experiential Learning
                      </h4>
                      <ul className="mt-3 text-base text-gray-600 space-y-2">
                        {course.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            ✅ {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white px-3 pb-3 rounded-b-lg">
                <div className="flex  justify-between items-center">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-bold text-blue-600">
                      {course.discount}
                    </span>
                    <div className="flex items-center">
                      <h3 className="text-xl font-bold text-gray-900">
                        {course.price}
                      </h3>
                      <h4 className="text-sm mx-2 text-gray-500 line-through">
                        {course.originalPrice}
                      </h4>
                    </div>
                  </div>
                  <Link
                    href="/courses-view"
                    className="bg-blue-600 text-white px-4 py-2 rounded w-auto"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}

          <Process />

          <FAQ />
        </>
      }
    </>
  );
}

"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { baseurl, storageLink } from "./common/apiserve";
import axios from "axios";
import { FaClock } from "react-icons/fa";

const categories = [
    "All Courses",
    "Digital Marketing",
    "Web Designing",
    "Python AI",
    "Full Stack Development",
    "Graphics Designing",
    "App Development",
    "Share Marketing",
];

const SkeletonCard = () => {
    return (
        <div className="demand-course-hm-card h-max lg:h-[376px] animate-pulse bg-gray-200 p-3 rounded-lg shadow-md">
            <div className="h-6 w-24 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 w-40 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 w-32 bg-gray-300 rounded mb-2"></div>
            <div className="space-y-2 mt-3">
                <div className="h-3 w-full bg-gray-300 rounded"></div>
                <div className="h-3 w-3/4 bg-gray-300 rounded"></div>
                <div className="h-3 w-5/6 bg-gray-300 rounded"></div>
            </div>
            <div className="h-5 w-32 bg-gray-300 rounded mt-4"></div>
            <div className="flex mt-4 space-x-2">
                <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
                <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
                <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
            </div>
            <div className="flex border-t mt-4">
                <div className="h-10 w-1/2 bg-gray-300 rounded"></div>
                <div className="h-10 w-1/2 bg-gray-300 rounded"></div>
            </div>
        </div>
    );
};



const CourseCard = ({ course }) => {

    const detailsArray = course?.details.split(",").map(item => item.trim());

    const IMArray = course?.student_images.split(",").map(item => item.trim());


    console.log('detailsArray', IMArray);
    const result = detailsArray.join(" ");
    // console.log('detailsArray', typeof result);
    const convertarry = result.split(",").map(item => item.trim());

    console.log('detailsArray', detailsArray);

    return (
        <div className="demand-course-hm-card h-max lg:h-auto">
            <div className="px-3 py-3">
                <div className="flex justify-between items-center mb-2">
                    <span className="bg-blue-500 text-white px-2 py-1 text-sm rounded">
                        {course.badge}
                    </span>
                    <div className="flex space-x-1">
                        {[...Array(5)].map((_, index) => (
                            <i
                                key={index}
                                className={`fa ${index < Math.floor(course.rating)
                                    ? "fa-star text-yellow-500"
                                    : "fa-star-half-alt text-yellow-500"
                                    }`}
                            ></i>
                        ))}
                    </div>
                </div>
                <p className="font-semibold text-lg">{course.title}</p>
                <ul className="text-gray-600 mt-2">



                    {console.log('ourse?.details', course?.details)}

                    {console.log("Type of details:", typeof course?.details)}


                    {JSON.parse(detailsArray).map((detail, index) => (
                        <li key={index} className="flex items-center">
                            {console.log('weffrefr', detail)}
                            <i className="fa fa-check-circle text-green-500 mr-2"></i>
                            {detail.replace(/^"|"$/g, '')} {/* Remove leading and trailing quotes */}
                        </li>
                    ))}



                </ul>
                <div className="mt-4 text-gray-700">
                    <p className="text-sm flex items-center"> <FaClock className="mr-2 text-gray-500" /> Duration: {course.duration} Months</p>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-3 mt-3 bg-white" >
                    {IMArray?.length > 0 && (
                        <div className="flex -space-x-3">                        {IMArray.map((img, index) => {
                            const cleanedImg = img.replace(/\[|"|]/g, '').trim();
                            return cleanedImg ? (
                                <img
                                    key={index}
                                    src={`${storageLink}/${cleanedImg}`}
                                    alt={`Student ${index + 1}`}
                                    className="w-auto h-8 md:w-auto md:h-6 rounded-full border-2 border-white shadow"
                                />
                            ) : null;
                        })}</div>

                    )}

                    <div>
                        <div className="text-gray-700 text-sm text-center md:text-left">
                            <span className="font-bold text-sm text-blue-600">
                                {course.no_of_student}
                            </span>{" "}
                            students enrolled in <span className="font-medium">{course.month}</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex border-t" id="programs">
                <Link
                    href={`/${course.slug}`}
                    className="bg-blue-600 w-full text-center text-white px-5 py-2 text-base font-medium hover:bg-blue-700 transition-shadow shadow-md hover:shadow-lg"
                >
                    Brochure
                </Link>
                <Link
                    href={`/${course.slug}`}
                    className="w-full text-blue-600 text-center py-2 px-6 text-base font-medium hover:bg-blue-600 hover:text-white transition-shadow shadow-md hover:shadow-lg"
                >
                    Enroll
                </Link>
            </div>
        </div>
    );
};

const CoursesList = () => {
    const [selectedCategory, setSelectedCategory] = useState("All Courses");
    const [loader, setLoader] = useState(true);
    const [courses, setCourses] = useState([]);

    const fetchCourseApi = async () => {
        setLoader(true);
        try {
            const response = await axios.get(`${baseurl}/courses`);
            setCourses(response.data);
        } catch (error) {
            console.error("Error fetching courses:", error);
        } finally {
            setLoader(false);
        }
    };

    useEffect(() => {
        fetchCourseApi();
    }, []);

    const filteredCourses =
        selectedCategory === "All Courses"
            ? courses
            : courses.filter((course) => course.category === selectedCategory);

    return (
        <section className="pt-16 pb-20 mx-5 lg:mx-28" >
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-3 text-center">{selectedCategory}</h2>
                <p className="text-gray-700 text-center mb-6 text-lg text-wrap lg:text-nowrap">
                    In-demand Skills To Compete With The Global Manpower Requirement
                </p>
                <div className="col-12 demand-course-item mb-6">
                    <ul className="demand-course-tab p-2" >
                        {categories.map((category) => (
                            <li
                                key={category}
                                className={`cursor-pointer px-4 py-2 rounded ${selectedCategory === category
                                    ? "bg-[#0071e3] text-white"
                                    : "text-gray-700"
                                    }`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-center">
                    {loader
                        ? [...Array(8)].map((_, index) => <SkeletonCard key={index} />)
                        : filteredCourses.map((course) => <CourseCard key={course.id} course={course} />)}
                </div>
            </div>
        </section>
    );
};

export default CoursesList;

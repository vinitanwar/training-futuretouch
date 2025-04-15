"use client";
import Link from "next/link";
import React from "react";

import { useParams } from "next/navigation";
import { storageLink } from "./common/apiserve";

const formatName = (name) => {
    return name
        .replace(/-/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());
};




const LocationCard = ({ course, crName }) => {
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

                <p className="font-semibold text-lg"> {course.title} </p>
                <ul className="text-gray-600 mt-2">
                    {course.details.map((detail, index) => (
                        <li key={index} className="flex items-center">
                            <i className="fa fa-check-circle text-green-500 mr-2"></i>
                            {detail}
                        </li>
                    ))}
                </ul>
                <div className="mt-4 text-gray-700">
                    <p className="text-sm">Duration: {course.duration} Months</p>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-3 mt-3 bg-white ">
                    {course.studentImages && (
                        <div className="flex -space-x-3">
                            {course.studentImages.map((src, index) => (
                                <img
                                    key={index}
                                    src={`${storageLink}/${src}`}
                                    alt="Student"
                                    className="w-full h-8 md:w-auto md:h-6 rounded-full border-2 border-white shadow"
                                />
                            ))}
                        </div>
                    )}

                    <div className="text-gray-700 text-sm text-center md:text-left">
                        <span className="font-bold text-sm text-blue-600">{course.no_of_student}</span> students enrolled in{" "}
                        <span className="font-medium">{course.month}</span>
                    </div>
                </div>
            </div>
            <div className="flex border-t">
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

const LocationCards = ({ coursename, datarelated }) => {



    return (
        <section className=" mx-5 lg:mx-28">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-3 text-center">
                    We offer courses in these Locations
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
                    {datarelated?.map((course) => (
                        <LocationCard key={course.id} crName={coursename} course={course} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LocationCards;

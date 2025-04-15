"use client"
import Link from "next/link";


import React, { useEffect, useState } from "react";

import { useParams } from 'next/navigation'
import { IoMdCall } from "react-icons/io";
import axios from "axios";
import { baseurl } from "./common/apiserve";


const Footer = () => {
    const [loading, setLoading] = useState(true);

    const courseLocationsME = [
        { slug: "digital-marketing-mohali", title: "Digital Marketing Course in Mohali" },
        { slug: "digital-marketing-panchkula", title: "Digital Marketing Course in Panchkula" },
        { slug: "digital-marketing-hp", title: "Digital Marketing Course in Himachal Pradesh" },
        { slug: "digital-marketing-bangalore", title: "Digital Marketing Course in Bangalore" }
    ];


    const [relatedcourse, setrelatedcourse] = useState(courseLocationsME);


    useEffect(() => {
        // Simulate API loading
        setTimeout(() => setLoading(false), 2000);
    }, []);






    const [data, setData] = useState([]);




    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get(`${baseurl}/list/course`);
                setData(response.data);
            } catch (error) {
                console.error("Error fetching courses:", error);
            }
        };
        fetchCourses();
    }, []);

    const param = useParams()

    const formattedSlug = param?.slug?.replace(/-/g, " ");
    console.log(formattedSlug);
    const currentYear = new Date().getFullYear();

    const handleClick = (event) => {
        event.preventDefault();


        window.open("https://wa.me/917056497000?text=Hi,%20I%20need%20assistance%20regarding%20your%20services.", "_blank");


        setTimeout(() => {
            window.location.href = "tel:+91 70564 97000";
        }, 1000);
    };


    const fetchcourseapi = async () => {

        console.log('response', param?.slug)
        let response = await axios.get(`${baseurl}/courses/${param?.slug}`)
        response = await response.data
        console.log('response', response)

        setrelatedcourse(response.related_courses)

    }


    useEffect(() => {
        fetchcourseapi()
    }, [param?.slug])



    const courseLocations = [
        { name: "Mohali" },
        { name: "Panchkula" },
        { name: "Himachal Pradesh" },
        { name: "Bangalore" },
    ];



    return (

        <>

            <Link href="#" onClick={handleClick} className="fixed topPhoneRingingAnime bottom-4 right-4">
                <div className="flex relative items-center gap-4 p-2 bg-gradient-to-tr from-slate-100 via-sky-200 text-white rounded-full shadow-lg cursor-pointer transition-all duration-300">
                    <div className="flex-shrink-0">
                        <img
                            src="/images/TopPhoneRing.webp"
                            alt="User"
                            className="rounded-full h-12 w-12 border-2 border-white"
                        />
                    </div>
                </div>
            </Link>


            <section className="bg-[#191919] text-white">
                <div className="wed-hom-footer md:text-xs  lg:text-base pt-10">
                    <div className=" px-5 md:px-28 ">
                        <div className="flex justify-start flex-col items-center text-center mb-8 border-b-2 border-dotted border-[#ffffff51] pb-4 md:flex-row md:justify-center">
                            <p className="md:text-base  font-bold text-white">
                                <span className="text-gray-400">Free support:</span>
                                <Link
                                    href="tel:+917056497000"
                                    className="text-white  ml-2"
                                >
                                    +91-7056497000
                                </Link>
                                <span className="mx-2 text-gray-400 ">|</span>
                                <br className="block lg:hidden" />
                                <span className="text-gray-400">Email:</span>
                                <Link
                                    href="mailto:info@futureittouch.com"
                                    className="text-white  ml-2"
                                >
                                    info@futureittouch.com
                                </Link>
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                            <div className="border-r-2 border-dotted border-[#ffffff51]">
                                <h4 className="text-xl font-bold mb-4">Top Courses</h4>
                                <ul className="grid grid-cols-2 gap-4">
                                    {loading
                                        ?
                                        [...Array(6)].map((_, index) => (
                                            <li key={index} className="animate-pulse">
                                                <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                                            </li>
                                        ))
                                        :
                                        data.map((course, subIndex) => (
                                            <li key={subIndex}>
                                                <Link href={`/${course.slug}`} className="hover:text-gray-400">
                                                    {course.title}
                                                </Link>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                            <div className="border-r-2 border-dotted border-[#ffffff51]">
                                <h4 className="text-xl font-bold mb-4">Trending Courses</h4>
                                <ul className="grid grid-cols-2 gap-4">
                                    {loading
                                        ?
                                        [...Array(6)].map((_, index) => (
                                            <li key={index} className="animate-pulse">
                                                <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                                            </li>
                                        ))
                                        :
                                        data.map((course, subIndex) => (
                                            <li key={subIndex}>
                                                <Link href={`/${course.slug}`} className="hover:text-gray-400">
                                                    {course.title}
                                                </Link>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                            <div className="border-r-2 border-dotted border-[#ffffff51]">
                                <h4 className="text-xl font-bold mb-4">Help & Support</h4>
                                <ul className="grid grid-cols-2 gap-4">
                                    <li>
                                        <Link href="/about-us" className="hover:text-gray-400">
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact-us" className="hover:text-gray-400">
                                            Contact Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy" className="hover:text-gray-400">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/terms-conditions" className="hover:text-gray-400">
                                            Terms of Use
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <div className="w-full  my-4 py-4 border-y-2 border-dotted border-[#ffffff51] ">
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold">We offer courses in these Locations</h3>
                            </div>
                            <ul className="flex flex-wrap gap-2 text-white">
                                {console.log('paramslug', relatedcourse)}
                                {relatedcourse?.map((course, index) => (
                                    <li key={index} className="flex items-center">
                                        <Link href={`/${formattedSlug ? course.slug : 'digital-marketing-course'}`} className="hover:underline">
                                            <span className="capata">
                                                {/* {formattedSlug
                                                    ? formattedSlug.replace(/\b\w/g, (char) => char.toUpperCase())
                                                    : 'Digital Marketing '} */}
                                            </span>
                                            {course.title}
                                        </Link>
                                        {index !== courseLocations.length - 1 && <span className="mx-2">|</span>}
                                    </li>

                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-wrap justify-between gap-8 border-b-2 border-dotted border-[#ffffff51] pb-4">
                            <div className="space-y-3">
                                <h4 className="text-xl font-bold mb-2">Get In Touch</h4>
                                <p>
                                    Address: Sector 34 A, Near Mukat Hospital, Chandigarh <br />
                                    160022
                                </p>
                                <p>
                                    Phone:{" "}
                                    <Link
                                        href="tel: +91-7056497000"
                                        className="text-white "
                                    >
                                        +91-7056497000
                                    </Link>
                                </p>
                                <p>
                                    Email:{" "}
                                    <Link
                                        href="mailto:info@futureittouch.com"

                                        className="text-white "
                                    >
                                        info@futureittouch.com
                                    </Link>
                                </p>
                            </div>
                            <div className="space-y-3">
                                <h4 className="text-xl font-bold mb-2">
                                    Download Our Free Mobile Apps
                                </h4>
                                <ul className="flex gap-4 ">
                                    <li>
                                        <Link href="/">
                                            <img
                                                src="/images/playstore.webp"
                                                className="h-[45px] w-full"
                                                alt="Google Play"
                                            />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <img
                                                src="/images/appstore.webp"
                                                className="h-[45px] w-full"
                                                alt="Apple Store"
                                            />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <h4 className="text-xl font-bold mb-2">Follow Us</h4>
                                <ul className="flex gap-4">
                                    <li>
                                        <Link href="https://www.facebook.com/Futureittouch" target="_blank">
                                            <img src="/images/facebook.svg" alt="facebook" className="w-10 h-auto" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://x.com/futureittouch" target="_blank" >
                                            <img src="/images/twitter1.svg" alt="twitter" className="w-10 h-auto" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.instagram.com/future_it_touch/" target="_blank" >
                                            <img src="/images/instagram.svg" alt="instagram" className="w-10 h-auto" />
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="https://www.youtube.com/@future-it-touch" target="_blank">
                                            <img src="/images/youtube.svg" alt="youtube" className="w-10 h-auto" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.linkedin.com/company/future-it-touch/" target="_blank" >
                                            <img src="/images/LinkedIn.svg" alt="linkedin" className="w-10 h-auto" />
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="text-center md:text-xs lg:text-base bg-[#040404] py-4">
                    <p>
                        Copyright © 2017- {currentYear}

                        . Designed by{" "}
                        <Link href="https://futuretouch.in/" target="_blank" rel="noopener noreferrer " className="text-[#0d6efd] font-semibold">
                            Future IT Touch Pvt Lmt
                        </Link>
                    </p>
                </div>
            </section>

        </>

    );
};

export default Footer;

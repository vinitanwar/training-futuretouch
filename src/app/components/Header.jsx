"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Typewriter from "typewriter-effect";
import PopupForm from './PopUp';

const HeaderSection = () => {

    const [texts, setTexts] = useState(["Data Science", "Web Development", "Digital Marketing"]);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [texts]);



    return (
        <header className="bg-white relative mb-16 py-10">
            <div className="container mx-auto block lg:flex items-center gap-6 px-0 lg:px-20">

                <div className="hidden lg:block animate-fadeIn  z-10 pl-10 -pb-8">
                    <Image
                        src="/images/pic15.webp"
                        alt="Left Image"
                        width={450}
                        height={400}
                        className="rounded-2xl h-[350px] w-auto  object-cover"
                    />
                </div>


                <div className="text-center lg:text-center animate-fadeIn delay-100">
                    <h1 className="text-lg lg:text-5xl font-[500] text-gray-900 leading-tight">
                        Advance Your Career  <br />
                        <span className="text-blue-600"> Professional IT Courses</span>
                    </h1>
                    <p className="text-gray-700 mt-4 text-lg text-wrap lg:text-nowrap">
                        Gain In-Demand Skills & Stay Ahead in the Global Job Market
                    </p>
                    <p className="text-xl block lg:inline-flex gap-2 font-medium text-gray-900 mt-4 mb-8">
                        Top Programs
                        <span className="text-blue-600">
                            <Typewriter
                                options={{
                                    strings: [texts[currentTextIndex]],
                                    autoStart: true,
                                    loop: true,
                                    delay: 120,
                                }}
                            />
                        </span>

                    </p>
                    <div className="flex justify-center gap-4 mt-2">
                        <Link
                            href="/contact-us"
                            className="bg-blue-600 text-white px-5 rounded-xl py-2 text-base font-medium hover:bg-blue-700 transition-shadow shadow-md hover:shadow-lg"
                        >
                            Contact Us
                        </Link>
                        <Link
                            href="/courses"
                            className="border-2 border-blue-600 text-blue-600 py-2 px-6 rounded-xl text-base font-medium hover:bg-blue-600 hover:text-white transition-shadow shadow-md hover:shadow-lg"
                        >
                            Explore Program
                        </Link>
                    </div>
                    <p className="mt-6 text-lg font-light text-gray-700 mb-0 lg:mb-12">
                        Learn from Experts, Work on Live Projects & Unlock  <br /> <span className="text-blue-600 font-extrabold">  New Career Opportunities!🚀 </span>
                    </p>
                </div>

                {/* Right Image */}
                <div className="hidden lg:flex justify-center animate-fadeIn delay-200  ">
                    <Image
                        src="/images/pic13.webp"
                        alt="Right Image"
                        width={350}
                        height={350}
                        className="rounded-2xl"
                    />
                </div>
            </div>


            <div className="w-full absolute -bottom-[80px] lg:-bottom-10">
                <div className="bg-[#f0f8ff] w-[95%] lg:w-[85%] mx-auto  rounded-3xl overflow-hidden">
                    <div className="scroll-container flex items-center py-8 gap-5 lg:gap-16">
                        <img src="/images/Amazon.webp" alt="Item 1" className="w-auto h-6 lg:h-10 object-cover " />
                        <img src="/images/hubspot.webp" alt="Item 2" className="w-auto h-6 lg:h-10 object-cover " />
                        <img src="/images/GOOGLE.webp" alt="Item 3" className="w-auto h-6 lg:h-10 object-cover " />
                        <img src="/images/cropped-dsafs-new-logo.webp" alt="Item 4" className="w-auto h-6 lg:h-10 object-cover " />
                        <img src="/images/Amazon.webp" alt="Item 5" className="w-auto h-6 lg:h-10 object-cover " />
                        <img src="/images/hubspot.webp" alt="Item 6" className="w-auto h-6 lg:h-10 object-cover " />
                        <img src="/images/GOOGLE.webp" alt="Item 7" className="w-auto h-6 lg:h-10 object-cover " />
                        <img src="/images/cropped-dsafs-new-logo.webp" alt="Item 8" className="w-auto h-6 lg:h-10 object-cover " />
                        <img src="/images/Amazon.webp" alt="Item 1" className="w-auto h-6 lg:h-10 object-cover " />
                        <img src="/images/hubspot.webp" alt="Item 2" className="w-auto h-6 lg:h-10 object-cover " />
                        <img src="/images/GOOGLE.webp" alt="Item 3" className="w-auto h-6 lg:h-10 object-cover " />
                        <img src="/images/cropped-dsafs-new-logo.webp" alt="Item 4" className="w-auto h-6 lg:h-10 object-cover " />
                        <img src="/images/Amazon.webp" alt="Item 5" className="w-auto h-6 lg:h-10 object-cover " />
                        <img src="/images/hubspot.webp" alt="Item 6" className="w-auto h-6 lg:h-10 object-cover " />
                        <img src="/images/GOOGLE.webp" alt="Item 7" className="w-auto h-6 lg:h-10 object-cover " />
                        <img src="/images/cropped-dsafs-new-logo.webp" alt="Item 8" className="w-auto h-6 lg:h-10 object-cover " />
                    </div>
                </div>
            </div>

            <PopupForm />
        </header>

    );
};

export default HeaderSection;
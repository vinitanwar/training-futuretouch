"use client";
import { useEffect, useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import axios from "axios";
import { baseurl } from "./common/apiserve";

const NavBar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const [data, setData] = useState([]);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleToggle = (index) => {
        setDropdownOpen(dropdownOpen === index ? null : index);
    };

    const menuItems = [
        {
            label: 'Events',
            href: '',
            subMenu: [
                { label: 'About Us', href: '/about-us' },
                { label: 'Our Team', href: '/our-team' },
                { label: 'Testimonials', href: '/testimonials' },
                { label: 'Career', href: '/career' },
            ],
        },
        { label: 'Courses', href: '', subMenu: [] },
        {
            label: 'Resources',
            href: '',
            subMenu: [
                { label: 'Contact Us', href: '/contact-us' },
                { label: 'Make a Payment', href: 'https://razorpay.me/@futureittouchprivatelimited' },
                { label: 'Job Portal', href: '/job-portal' },
                { label: 'Cert. Verification', href: '/certificate-verification' },
            ],
        },
        { label: 'Blog', href: '/blog' },
    ];

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

    return (
        <header className="mainHeader z-30 border-b sticky top-0 bg-white">
            <div className="px-5 lg:px-28 mx-auto">
                <div className="flex items-center justify-between">
                    <div className="logo">
                        <Link href="/" className="font-bold text-[#03a297]">
                            <Image
                                src="/images/Nav-logo.webp"
                                className="w-auto h-14 lg:h-16"
                                alt="Logo"
                                width={200}
                                height={100}
                                loading="lazy"
                            />
                        </Link>
                    </div>

                    <button
                        className="lg:hidden text-2xl cursor-pointer"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <i className={`fa ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>

                    <nav
                        className={`absolute lg:static top-14 lg:top-24 left-0 w-full lg:w-auto bg-white lg:bg-transparent lg:flex transition-transform duration-300 ${mobileMenuOpen ? 'block' : 'hidden'}`}
                    >
                        <ul className="flex flex-col lg:items-center lg:flex-row gap-0 lg:gap-8 p-5 lg:p-0">

                            {/* Placement at beginning - Only on large screens */}
                            <li className="hidden lg:flex relative items-center gap-4 py-4">
                                <Link
                                    href="/"
                                    className="blog-button text-base font-semibold"
                                >
                                    Placement
                                    <span></span><span></span><span></span><span></span>
                                </Link>
                            </li>

                            {menuItems.map((item, index) => (
                                <li key={index} className="relative group">
                                    <Link
                                        href={item.href}
                                        className="font-semibold border-b lg:border-none flex justify-between w-full text-base uppercase py-4 lg:py-6 no-underline"
                                    >
                                        {item.label}
                                        {(item.label === "Courses" || item.subMenu) && (
                                            <span className="cursor-pointer" onClick={() => handleToggle(index)}>
                                                <i className="fa fa-angle-down ml-2.5"></i>
                                            </span>
                                        )}
                                    </Link>

                                    {(item.label === "Courses" || item.subMenu) && (
                                        <div
                                            className={`lg:absolute lg:left-0 lg:top-16 border-none lg:border shadow-none lg:shadow bg-white px-0 lg:px-4 py-2 w-full lg:w-[300px] ${dropdownOpen === index ? 'block' : 'hidden'} lg:group-hover:block`}
                                        >
                                            <ul>
                                                {item.label === "Courses" && data.length > 0 ? (
                                                    data.map((course, subIndex) => (
                                                        <li key={subIndex} className="py-2 border-b">
                                                            <Link
                                                                href={`/${course.slug}`}
                                                                className="font-semibold text-base text-black uppercase no-underline block"
                                                                onClick={() => setMobileMenuOpen(false)}
                                                            >
                                                                {course.title}
                                                            </Link>
                                                        </li>
                                                    ))
                                                ) : (
                                                    item.subMenu &&
                                                    item.subMenu.map((subItem, subIndex) => (
                                                        <li key={subIndex} className="py-2 border-b">
                                                            <Link
                                                                href={subItem.href}
                                                                className="font-semibold text-base text-black uppercase no-underline block"
                                                                onClick={() => setMobileMenuOpen(false)}
                                                            >
                                                                {subItem.label}
                                                            </Link>
                                                        </li>
                                                    ))
                                                )}
                                            </ul>
                                        </div>
                                    )}
                                </li>
                            ))}

                            {/* Placement + Make for mobile only */}
                            <li className="lg:hidden relative flex items-center justify-between gap-4 py-4 lg:py-6">
                                <Link
                                    href="/"
                                    className="blog-button text-base font-semibold"
                                >
                                    Placement
                                    <span></span><span></span><span></span><span></span>
                                </Link>

                                <Link
                                    href="https://razorpay.me/@futureittouchprivatelimited" target="blank"
                                    className="border border-blue-600 text-blue-600 text-base px-3 py-1 rounded hover:bg-blue-600 hover:text-white transition-all"
                                >
                                    Make a Payment
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="hidden lg:flex items-center space-x-3">
                        <Link
                            href="/contact-us"
                            className="border-2 border-blue-600 text-blue-600 py-2 px-6 rounded-xl text-base font-medium hover:bg-blue-600 hover:text-white transition-shadow shadow-md hover:shadow-lg"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavBar;

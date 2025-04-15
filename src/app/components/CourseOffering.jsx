'use client'
import Image from "next/image";

const courseOfferings = [
    {
        title: "Industry-Oriented Curriculum",
        imgSrc: "/images/courses/industry.webp",
    },
    {
        title: "Comprehensive Learning Content",
        imgSrc: "/images/courses/online.webp",
    },
    {
        title: "Weekend Live Sessions",
        imgSrc: "/images/courses/online-video.webp",
    },
    {
        title: "Capstone Project",
        imgSrc: "/images/courses/industry.webp",
    },
    {
        title: "Practice Exercises",
        imgSrc: "/images/courses/online.webp",
    },
    {
        title: "Assignments and Projects",
        imgSrc: "/images/courses/online-video.webp",
    },
    {
        title: "Live Doubt Resolution Sessions",
        imgSrc: "/images/courses/industry.webp",
    },
    {
        title: "Dedicated Buddy Support",
        imgSrc: "/images/courses/online.webp",
    },
    {
        title: "Certification of Completion",
        imgSrc: "/images/courses/online-video.webp",
    },
    {
        title: "Career Guidance & Interview Preparation",
        imgSrc: "/images/courses/industry.webp",
    },
    {
        title: "Email Support",
        imgSrc: "/images/courses/online.webp",
    },
    {
        title: "Peer Networking",
        imgSrc: "/images/courses/online-video.webp",
    },
];

const CourseOfferings = () => {
    return (
        <section id="course-offerings" className="px-5 md:pb-14 lg:px-28 mx-auto">

            <div className="flex flex-col gap-3 md:gap-6">


                <div className="flex items-center gap-x-10">
                    <div className="w-2 bg-blue-500 py-[26px]"></div>
                    <h3 className="text-gray-900 text-lg lg:text-2xl medium:text-5xl leading-8 font-bold">
                        Unlock Your Potential: Exclusive Course Offerings
                    </h3>
                </div>
            </div>


            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
                {courseOfferings.map((course, index) => (
                    <div key={index} className="block lg:flex items-center p-3 border border-gray-200 rounded-lg gap-x-5 w-full">
                        <figure className="w-10 h-10">
                            <Image src={course.imgSrc} alt={course.title} width={40} height={40} loading="lazy" className="mx-auto" />
                        </figure>
                        <p className="text-xs md:text-base">{course.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CourseOfferings;

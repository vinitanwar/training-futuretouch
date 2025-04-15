'use client';

import Image from 'next/image';

const DevOpsCourse = () => {
    return (
        <div className="px-4 large:px-20 max-w-screen-xlarge xlarge:!mx-auto medium:!px-8 lg:px-28 py-20">
            <div className="block lg:flex flex-row items-center gap-14">
                <div className="flex flex-col gap-4 w-full lg:w-[60%]">
                    <div className="flex flex-col gap-2 medium:gap-6">
                        <div className="flex items-center gap-x-10">
                            <div className="w-2 bg-blue-500 py-[26px]"></div>
                            <h3 className="text-gray-900 text-lg lg:text-2xl medium:text-5xl leading-8 font-bold">
                            About Digital Marketing and Full Stack Development
                            </h3>
                        </div>
                    </div>
                    <p className="text-lg medium:text-base text-justify text-gray-600">
                    Launch your career in Digital Marketing and Full Stack Development by mastering essential tools, building dynamic websites, and executing result-driven marketing strategies. Gain hands-on experience and industry-ready skills for a successful career.
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-5">
                        {["Industry Professional Led Sessions", "Project Portfolio", "Career Assistance", "Dedicated Peer Network", "Learn Industry Skills", "Certification"].map((item, index) => (
                            <div key={index} className="flex flex-col">
                                <div className="flex items-center gap-2">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2.892C6.477 2.892 2 7.369 2 12.892c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm-1.834 15.137l-4.403-4.403 1.468-1.468 2.935 2.935 6.604-6.605 1.468 1.468-8.072 8.073z" fill="#6AC259"></path>
                                    </svg>
                                    <p className="text-gray-900 text-lg medium:text-base font-bold">{item}</p>
                                </div>
                                <p className="text-base medium:text-lg text-gray-600">Detailed insights on {item}.</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full lg:w-[40%] flex justify-end">
                    <Image
                        src="/images/course.webp"
                        alt="DevOps Course"
                        width={600}
                        height={500}
                        className="w-full h-auto "
                    />
                </div>
            </div>
        </div>
    );
};

export default DevOpsCourse;
'use client'
import Image from "next/image";
import { useState } from "react";


const CertificateSection = () => {





    return (
        <div className="bg-gray-100 py-12 px-6 md:px-28 flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-2xl lg:text-4xl font-bold mb-4">Certification at Future IT Touch Institute</h2>
                <p className="text-gray-700 mb-4">
                Upon successfully completing a course at Future IT Touch Institute, students receive an industry-recognized certification. This certification validates their expertise, enhances job prospects, and boosts their professional credibility. Our courses include hands-on projects and assessments to ensure practical learning, making the certification highly valuable in the IT industry. Employers recognize our certification as proof of proficiency in cutting-edge technologies, giving students a competitive edge in the job market. 
                </p>
                <button className="bg-red-500 text-white py-2 px-4 rounded-lg font-semibold">15+ Esteemed Certificates</button>
            </div>
            <div className="relative md:w-1/2 flex items-center justify-center">

                <Image
                    src="/images/Certificate.png"
                    alt="Certificate"
                    width={500}
                    height={300}
                    className="rounded-lg shadow-lg"
                />

            </div>
        </div>
    );
};

export default CertificateSection;

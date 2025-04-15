"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function AlumniSection() {
    const alumni = [
        {
            name: "Shreyog R",
            position: "Google Marketing Platform",
            companyLogo: "/images/Amazon.webp",
            image: "/images/Testimonial/men1.avif",
        },
        {
            name: "Devarsh Parekh",
            position: "SEO Executive",
            image: "/images/Testimonial/testimonial2.webp",
            companyLogo: "/images/GOOGLE.webp",
        },
        {
            name: "Utsav Panchal",
            position: "Media Buyer",
            image: "/images/Testimonial/men1.avif",
            companyLogo: "/images/hubspot.webp",
        },
        {
            name: "Hemkesh Rohera",
            position: "SEO Executive",
            image: "/images/Testimonial/testimonial2.webp",
            companyLogo: "/images/cropped-dsafs-new-logo.webp",
        },
        {
            name: "Anuj Tiwari",
            position: "Senior Media Strategist",
            image: "/images/Testimonial/men1.avif",
            companyLogo: "/images/Amazon.webp",
        },
        {
            name: "Vaishali Raj Singh",
            position: "Digital Marketing Executive",
            image: "/images/Testimonial/testimonial2.webp",
            companyLogo: "/images/GOOGLE.webp",
        },
        {
            name: "Anuj Tiwari",
            position: "Senior Media Strategist",
            image: "/images/Testimonial/men1.avif",
            companyLogo: "/images/hubspot.webp",
        },
        {
            name: "Vaishali Raj Singh",
            position: "Digital Marketing Executive",
            image: "/images/Testimonial/testimonial2.webp",
            companyLogo: "/images/Amazon.webp",
        },
    ];

    return (
        <section className="py-10 lg:py-20 px-5 lg:px-28 bg-black">
            <h1 className="text-white text-center mb-6 font-semibold text-lg lg:text-4xl">
                Our Placed Students
            </h1>
            <div className="relative container mx-auto">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={20}
                    slidesPerView={2}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 6 },
                    }}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    className="pb-10"
                >
                    {alumni.map((person, index) => (
                        <SwiperSlide key={index} className="pb-10">
                            <div
                                className="relative bg-white border-2 border-white rounded-lg text-center flex flex-col justify-end min-h-[200px] lg:min-h-[300px]"
                                style={{
                                    backgroundImage: `url(${person.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                                <div className="relative bottom-10 z-10 text-white p-4">
                                    <h3 className="text-sm font-semibold">{person.name}</h3>
                                    <p className="text-xs">{person.position}</p>
                                </div>
                                <div className="absolute -bottom-5 z-[9999] w-full flex justify-center">
                                    <Image
                                        src={person.companyLogo}
                                        alt={person.name}
                                        width={140}
                                        height={60}
                                        className="object-contain bg-white px-4 py-3 rounded mx-auto"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

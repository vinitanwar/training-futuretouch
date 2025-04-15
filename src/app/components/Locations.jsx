"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaMapLocation } from "react-icons/fa6";
import { useParams } from "next/navigation";


// Custom arrow components
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-[46%] -right-4 z-10  text-6xl cursor-pointer  "
      onClick={onClick}
    >
      ›
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-[46%] -left-4 z-10 text-6xl cursor-pointe"
      onClick={onClick}
    >
      ‹
    </div>
  );
};

const Location = () => {


  const param = useParams()

  const formattedSlug = param?.slug?.replace(/-/g, " ");
  console.log('formattedSlug', formattedSlug);

  const officeLocations = [
    {
      country: "India",
      officeType: "Chandigarh Head Office",
      address:
        "SCO 54-56, 2nd Floor, Near Mukat Hospital, 34A Sector, Chandigarh, 1600022",
      email: "info@futureittouch.com",
      phone: "+91-7056497000",
      imageSrc: "/images/chandigarh.webp",
    },
    {
      country: "India",
      officeType: "Bangalore Branch Office",
      address:
        "59, 2nd Floor, Paramahansa Yogananda Rd, Link Rd 4, above Arun Cadd, Indiranagar, Bengaluru, Karnataka 560038",
      email: "info@futureittouch.com",
      phone: "+91-7056497000",
      imageSrc: "/images/texas.webp",
    },
    {
      country: "United States",
      officeType: "Texas Branch Office",
      address:
        "1400 Avery Ranch Blvd, Ste C200 Austin, Texas-78717",
      email: "info@futureittouch.com",
      phone: "+91-7056497000",
      imageSrc: "/images/dubai.webp",
    },
    {
      country: "United Arab Emirates",
      officeType: "Dubai Branch Office",
      address:
        "RAKEZ Compass Al Shohada Road Al Hamra Industrial Zone - FZ - Ras Al Khaimah",
      email: "info@futureittouch.com",
      phone: " +91-7056497000",
      imageSrc: "/images/banglore.webp",
    },

  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed (3 seconds)
    nextArrow: <NextArrow />, // Use custom NextArrow component
    prevArrow: <PrevArrow />, // Use custom PrevArrow component
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "60px",
        },
      },
    ],
  };

  return (
    <>
      <div className="bg-[#ffecec] shadow-location mx-36 max-sm:mx-0 max-md:mx-20 mb-10 py-2 text-center">
        <h2 className="text-3xl m-2 font-bold">Our Office Locations</h2>
      </div>

      <div className="grid md:grid-cols-4 mb-20  mx-5 lg:mx-28 overflow-hidden">

        {officeLocations.map((location, index) => (
          <div key={index} className="p-0 lg:p-2 mb-5  lg:mb-0">
            <div className="w-auto shadow  bg-white h-full hover:shadow-md mx-auto border-b-4 border-b-[#b0bdff]  rounded-lg custom-shadow">
              <div className="bg-[#fbfbfb] text-center">
                <Image
                  width={700}
                  height={700}    
                  src={location.imageSrc}
                  alt={location.country}
                  className="img-fluid h-[200px] w-full rounded-t-lg d-block"
                />
              </div>
              <div className="p-5">
                <h4 className="text-2xl font-bold ">{location.country}</h4>
                <h6 className="mt-2 text-base font-bold ">
                  {location.officeType}
                </h6>
                <p className="text-md text-[#6a6a8e] mt-4 flex items-center gap-3 text-justify">
                   {location.address}
                </p>
                <ul className="text-md text-[#6a6a8e] mt-4">
                  <li>
                    <Link
                      href={`mailto:${location.email}`}
                      className="flex items-center gap-3"
                    >
                      <i className="fa fa-envelope"></i> {location.email}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`tel:${location.phone}`}
                      className="flex items-center gap-3 mt-2"
                    >
                      <i className="fa fa-phone"></i> {location.phone}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Location;

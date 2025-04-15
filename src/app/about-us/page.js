"use client";
import React from "react";
import BreadcrumbBanner from "../components/Breadcrumb";
import Achievements from "../components/Achievements";
import Image from "next/image";
import Link from "next/link";
import Counter from "../components/Counter";

const page = () => {
  return (
    <>
      <head>
        <title>About Us- Future IT Touch's Institute in Chandigarh, India</title>
        <meta
          name="description"
          content="Future IT Touch's Institute offers top-notch IT training in Chandigarh, Mohali, Panchkula, and Himachal Pradesh, equipping students with industry-ready skills."
        />
      </head>
      
      <BreadcrumbBanner
        description="Welcome to Future It Touch, where we strive to provide exceptional services tailored to your needs. Our journey began with a vision to deliver innovative solutions, and today, we continue to uphold our commitment to quality, reliability, and customer satisfaction. At Future It Touch, we believe in building strong relationships with our clients by understanding their unique requirements and exceeding expectations. Our dedicated team works tirelessly to bring creativity, efficiency, and expertise to everything we do.

"
        bgImage="/images/banner/blog-banner.webp"
        sideImage="/images/about-us.webp"
      />

      <section className="about-two section-space py-16 px-5 lg:px-28">
        <div className="container mx-auto ">
          <div className="flex flex-wrap items-center">
            <div
              className="w-full lg:w-1/2  wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="00ms"
            >
              <div className="about-two__image relative table">
                <Image
                  src="/images/about-2-1.webp"
                  alt="about image"
                  width={500}
                  height={500}
                  className="about-two__image__one relative w-[436px] h-[370px] lg:h-[436px] rounded-full border-[12px] border-white shadow-lg z-20"
                />
                <Image
                  src="/images/about-2-2.webp"
                  alt="about image"
                  width={500}
                  height={500}
                  className="about-two__image__two absolute right-[-89px] bottom-[-24px] w-[292px] h-[292px] hidden lg:block rounded-full border-[8px] border-white shadow-lg z-20"
                />
                <Image
                  src="/images/about-shape-2-1.webp"
                  alt="shape"
                  width={200}
                  height={200}
                  className="about-two__image__shape-one absolute top-0 right-0"
                />
                <div className="about-two__image__shape-box hidden lg:block"></div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 ">
              <div className="about-two__content">
                <div
                  className="sec-title wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="00ms"
                >
                  <h1 className="sec-title__tagline text-primary uppercase">
                    ABOUT US
                  </h1>
                  <p className="sec-title__title text-2xl font-bold my-5">
                    Learn New Skills{" "}
                    <span className="sec-title__title__shape text-blue-500">
                      To Go Ahead For
                    </span>{" "}
                    <br className="hidden lg:block" />
                    Your{" "}
                    <span className="sec-title__title__text text-blue-500">
                      Career
                    </span>
                  </p>
                </div>
                <p className="about-two__text text-gray-600 mb-4">
                At Future IT Touch, we are committed to shaping the future of technology by delivering cutting-edge digital solutions. With innovation at our core, we specialize in web development, software solutions, mobile applications, and IT consulting, empowering businesses to thrive in the digital age.
                </p>
                <div className="about-two__row grid grid-cols-1 sm:grid-cols-2 gap-0 lg:gap-4">
                  {[
                    "Full lifetime access",
                    "20+ downloadable resources",
                    "Certificate of completion",
                    "Free trial 7 days",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="about-two__info flex my-3 items-center gap-4 wow fadeInUp"
                      data-wow-duration="1500ms"
                      data-wow-delay={index % 2 === 0 ? "00ms" : "100ms"}
                    >
                      <Image
                        src="/images/correct.webp"
                        width={20}
                        height={20}
                        className=""
                        alt="about us"
                      />
                      <h4 className="about-two__info__title text-lg font-semibold">
                        {item}
                      </h4>
                    </div>
                  ))}
                </div>
                <div
                  className="about-two__button mt-6 wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="00ms"
                >
                  <Link
                    href="/about-us"
                    className="eduhive-btn inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
                  >
                    <span>About us</span>
                    <span className="eduhive-btn__icon ml-2">
                      <span className="eduhive-btn__icon__inner">
                        <i className="icon-right-arrow"></i>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="overview bg-[#f4f4f4] py-20 px-5 lg:px-28 ">
        <div className="container">
          <h2 className="section-heading font-semibold text-xl  pb-2">
            Overview
          </h2>
          <div className="space-y-2 text-justify">
            <p>
            Future IT Touch is a technology-driven company dedicated to providing innovative digital solutions that empower businesses to succeed in an evolving digital landscape. We specialize in web development, mobile applications, software solutions, and IT consulting, helping businesses leverage technology for growth and efficiency. Our team is committed to delivering cutting-edge solutions tailored to meet the unique needs of each client.
            </p>
            <p>
            At Future IT Touch, we believe in bridging the gap between technology and business success. Our approach focuses on understanding our clients' challenges and providing customized, scalable, and efficient IT solutions. Whether it's designing a responsive website, developing a feature-rich mobile app, or implementing enterprise-level software, we ensure seamless integration and top-tier performance.
            </p>
            <h4>Our Corporate training mantra</h4>
            <p>
            Our expertise spans across multiple domains, including cloud computing, cybersecurity, artificial intelligence, and digital transformation. We help businesses optimize their operations, enhance customer engagement, and stay ahead of the competition by adopting the latest advancements in technology. By embracing innovation, we create sustainable solutions that drive long-term success.
            </p>
            <p>
            What sets us apart is our commitment to quality, innovation, and customer satisfaction. Our team of skilled developers, designers, and IT consultants work collaboratively to turn ideas into reality. We prioritize user experience, security, and performance to ensure our solutions not only meet but exceed expectations. From startups to large enterprises, we provide end-to-end IT solutions that foster growth and scalability.
            </p>
          </div>
        </div>
      </div>

      <Achievements />

      <Counter />
    </>
  );
};

export default page;

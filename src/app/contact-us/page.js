import React from "react";
import Form from "../components/Form";
import Counter from "../components/Counter";
import BreadcrumbBanner from "../components/Breadcrumb";
import Location from "../components/Locations";

const page = () => {
  return (
    <>
      <head>
        <title>
        Contact Us- Future IT Touch's Institute in Chandigarh, India
        </title>
        <meta
          name="description"
          content="Get in touch with Future IT Touch's Institute for expert IT training in Chandigarh, Mohali, Panchkula, and Himachal Pradesh. We're here to help you succeed!"
        />
      </head>

      <BreadcrumbBanner
        title="Contact Us"
        description="We’re here to help! Whether you have questions, need assistance, or want to explore exciting job opportunities with us, feel free to reach out. Our team is ready to connect and provide the support you need. Let’s create something amazing together!"
        bgImage="/images/banner/blog-banner.webp"
      />

      <div className="block lg:flex gap-10  px-5 lg:px-28 pt-20">
        <div className=" flex items-center mb-8 lg:mb-0 justify-center w-full lg:w-3/5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.8456853601797!2d76.76746782537266!3d30.722738324589073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef08660ee15b%3A0xf9990ee449bfeb3a!2sFuture%20IT%20Touch%20Private%20Limited!5e0!3m2!1sen!2sin!4v1741860301786!5m2!1sen!2sin"
            width="100%"
            height="450"
            className="border-0  shadow-lg"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="border p-5 w-full lg:w-2/5">
          <h1 className="text-2xl ">Contact us Now ! </h1>
          <p className="my-2">
            Have questions or need assistance? We're here to help! Reach out to
            us via email, phone, or our contact form. Our team is ready to
            assist you with any inquiries.
          </p>
          <Form />
        </div>
      </div>
      <Counter />
      <Location />
    </>
  );
};

export default page;

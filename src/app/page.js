"use client";
import React from "react";

import HeaderSection from "./components/Header";
import Achievements from "./components/Achievements";
import DevOpsCourse from "./components/DevopsCourse";
import CourseOfferings from "./components/CourseOffering";
import PlacementSection from "./components/Placement";
import AlumniSection from "./components/Clients";
import CertificateSection from "./components/Certification";
import CoursesList from "./components/Courses";
import AlumniTestimonials from "./components/OurAlumini";
import StudentReviews from "./components/Testimonial";
import FAQ from "./components/FAQ";
import Process from "./components/Process";

const page = () => {
  return (
    <>
      <head>
        <title>
        Industrial Training in Chandigarh, Mohali and Panchkula
        </title>
        <meta
          name="description"
          content="Future IT Touch is the top institute for Industrial Training in Chandigarh, Mohali, Panchkula & Himachal Pradesh in Web Design, Digital Marketing & Development."
        />
      </head>

      <HeaderSection />
      <CoursesList />
      <CourseOfferings />
      
      <Achievements />
      <DevOpsCourse />
      <PlacementSection />
      <AlumniSection />
      {/* <AlumniTestimonials /> */}
      <CertificateSection />
      <Process />
      <StudentReviews />
      <FAQ />
    </>
  );
};

export default page;

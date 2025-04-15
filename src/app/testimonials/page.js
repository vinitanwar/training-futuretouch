import React from 'react'
import BreadcrumbBanner from "../components/Breadcrumb";
import StudentReviews from '../components/Testimonial'
import Counter from '../components/Counter'

const page = () => {
  return (
    <>

<head>
        <title>
        Future It Touch Reviews – Trusted by Happy Clients
        </title>
        <meta
          name="description"
          content="Future IT Touch Reviews – Trusted by happy clients for top-notch Web Design & Digital Marketing courses. Learn SEO, grow skills, and achieve success now!"
        />
      </head>


     <BreadcrumbBanner
        description="Discover how our customers feel about our services. Read their testimonials and see why they trust us for their travel needs."
        bgImage="/images/banner/blog-banner.webp"
        // sideImage="/images/review.avif"
      />
    <StudentReviews />
    <Counter />
    </>
  )
}

export default page
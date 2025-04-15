"use client";
import React, { useState } from "react";
import BreadcrumbBanner from "../components/Breadcrumb";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPlayCircle,
  FaStar,
  FaCheckCircle,
  FaFile,
  FaFileAlt,
  FaCalendarWeek,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Mainarticlecomp from "./Maincomp";

const page = () => {
  const [activeTab, setActiveTab] = useState("#overview");

  const reviewsData = [
    {
      name: "Kevin martin",
      date: "2/17/2025 at 2:37 PM",
      image: "/images/course-c-1-1.webp",
      comment:
        "Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros.",
      rating: 5,
    },
    {
      name: "Sarah albert",
      date: "2/17/2025 At 10:00 AM",
      image: "/images/course-c-1-2.webp",
      comment:
        "Moving the goalposts sorry i was triple muted, so what do you feel you would bring to the table if you were hired for this position.",
      rating: 4,
    },
  ];

  const latestPosts = [
    {
      id: 1,
      title: "Exploring Online Learning Strategies",
      date: "10 Oct, 2024",
      imgSrc: "/images/blog/blog-thumb-01.webp",
      link: "/blog-details",
    },
    {
      id: 2,
      title: "The Future of University Education",
      date: "25 Sep, 2024",
      imgSrc: "/images/blog/blog-thumb-04.webp",
      link: "/blog-details",
    },
    {
      id: 3,
      title: "Kindergarten Learning Through Play",
      date: "05 Aug, 2024",
      imgSrc: "/images/blog/blog-thumb-10.webp",
      link: "/blog-details",
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Top 11 Digital Marketing Courses In Serbia With Placements",
      url: "",
      date: "January 30, 2025",
      author: {
        name: "Avadhi Jain",
        url: "",
      },
      categories: [
        { name: "Courses", url: "" },
        {
          name: "Digital Marketing",
          url: "",
        },
      ],
      comments: "No comments yet",
      content:
        "Serbia, a landlocked nation in the Balkans, is renowned for its raspberries, scenery, culture, and music...",
    },
    {
      id: 2,
      title: "Top 10 Digital Marketing Courses In Timor-Leste With Placements",
      url: "",
      date: "January 24, 2025",
      author: {
        name: "Riya Joshi",
        url: "",
      },
      categories: [
        { name: "Courses", url: "" },
        {
          name: "Digital Marketing",
          url: "",
        },
      ],
      comments: "No comments yet",
      content:
        "In a world where 90% of the generation is actively engaging with the Internet...",
    },
    {
      id: 3,
      title: "Top 11 Digital Marketing Courses In Serbia With Placements",
      url: "",
      date: "January 30, 2025",
      author: {
        name: "Avadhi Jain",
        url: "",
      },
      categories: [
        { name: "Courses", url: "" },
        {
          name: "Digital Marketing",
          url: "",
        },
      ],
      comments: "No comments yet",
      content:
        "Serbia, a landlocked nation in the Balkans, is renowned for its raspberries, scenery, culture, and music...",
    },
    {
      id: 4,
      title: "Top 10 Digital Marketing Courses In Timor-Leste With Placements",
      url: "",
      date: "January 24, 2025",
      author: {
        name: "Riya Joshi",
        url: "",
      },
      categories: [
        { name: "Courses", url: "" },
        {
          name: "Digital Marketing",
          url: "",
        },
      ],
      comments: "No comments yet",
      content:
        "In a world where 90% of the generation is actively engaging with the Internet...",
    },
    {
      id: 5,
      title: "Top 11 Digital Marketing Courses In Serbia With Placements",
      url: "",
      date: "January 30, 2025",
      author: {
        name: "Avadhi Jain",
        url: "",
      },
      categories: [
        { name: "Courses", url: "" },
        {
          name: "Digital Marketing",
          url: "",
        },
      ],
      comments: "No comments yet",
      content:
        "Serbia, a landlocked nation in the Balkans, is renowned for its raspberries, scenery, culture, and music...",
    },
    {
      id: 6,
      title: "Top 10 Digital Marketing Courses In Timor-Leste With Placements",
      url: "",
      date: "January 24, 2025",
      author: {
        name: "Riya Joshi",
        url: "",
      },
      categories: [
        { name: "Courses", url: "" },
        {
          name: "Digital Marketing",
          url: "",
        },
      ],
      comments: "No comments yet",
      content:
        "In a world where 90% of the generation is actively engaging with the Internet...",
    },
    {
      id: 7,
      title: "Top 11 Digital Marketing Courses In Serbia With Placements",
      url: "",
      date: "January 30, 2025",
      author: {
        name: "Avadhi Jain",
        url: "",
      },
      categories: [
        { name: "Courses", url: "" },
        {
          name: "Digital Marketing",
          url: "",
        },
      ],
      comments: "No comments yet",
      content:
        "Serbia, a landlocked nation in the Balkans, is renowned for its raspberries, scenery, culture, and music...",
    },
    {
      id: 8,
      title: "Top 10 Digital Marketing Courses In Timor-Leste With Placements",
      url: "",
      date: "January 24, 2025",
      author: {
        name: "Riya Joshi",
        url: "",
      },
      categories: [
        { name: "Courses", url: "" },
        {
          name: "Digital Marketing",
          url: "",
        },
      ],
      comments: "No comments yet",
      content:
        "In a world where 90% of the generation is actively engaging with the Internet...",
    },
  ];
  const [reviews, setReviews] = useState(reviewsData);
  const [newComment, setNewComment] = useState("");
  const [newName, setNewName] = useState("");
  const [newRating, setNewRating] = useState(0);

  const handleCommentChange = (e) => setNewComment(e.target.value);
  const handleNameChange = (e) => setNewName(e.target.value);
  const handleRatingChange = (rating) => setNewRating(rating);

  const handleAddComment = () => {
    if (newComment && newName && newRating > 0) {
      setReviews([
        ...reviews,
        {
          name: newName,
          date: new Date().toLocaleString(),
          image: "/images/course-c-1-1.webp", // Placeholder image
          comment: newComment,
          rating: newRating,
        },
      ]);
      setNewComment("");
      setNewName("");
      setNewRating(0);
    }
  };

  const categories = [
    { name: "Digital Marketing", count: 10 },
    { name: "Web Designing", count: 6 },
    { name: "Python AI", count: 4 },
    { name: "Full Stack Development", count: 5 },
    { name: "Graphics Designing", count: 8 },
    { name: "App Development", count: 9 },
    { name: "Share Marketing", count: 3 },
  ];

  return (
    <>
       <BreadcrumbBanner
        description="Powering 2 Billion mobile devices across the globe, Android inevitably stands out..."
        bgImage="/images/banner/blog-banner.webp"
        sideImage="/images/blog/side-blog.webp"
      />

      <div className="block lg:flex mx-5 lg:mx-28 gap-10 my-20 relative">
        <div className="w-full lg:w-[70%] relative">
          <h3 className="course-details__title mb-5 text-[18px] lg:text-[28px] font-medium">
            The Complete Data Science Course
          </h3>
          <div className="pt-7 mb-7 flex items-center flex-wrap gap-y-5 gap-x-[45px] border-t border-[#DBD8E6]">
            <div className="flex items-center space-x-4">
              <Image
                src="/images/team/team1.webp"
                alt="Vishal"
                width={50}
                height={50}
                className="rounded-full"
              />
              <h4 className="text-lg font-semibold">
                <Link
                  href="/course-instructor-details"
                  className="text-blue-600 hover:underline"
                >
                  Vishal 
                </Link>
              </h4>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-blue-600 text-xl">
                <FaPlayCircle />
              </span>
              <p className="text-gray-700">30 Classes</p>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-yellow-500 text-xl">
                <FaStar />
              </span>
              <p className="text-gray-700">
                <span className="font-semibold">3.4</span>{" "}
                <span>(36 Reviews)</span>
              </p>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/course-d-1-2.webp"
              alt="The Complete Data Science Course"
              width={600}
              height={300}
              className="w-full h-auto rounded-lg"
            />

            <span className="absolute top-2 left-2 bg-blue-600 text-white text-sm px-3 py-1 rounded">
              Technology
            </span>
          </div>

          <div>
            <ul className="flex border-b mt-5 border-gray-300">
              <li
                onClick={() => setActiveTab("#overview")}
                className={`px-4 py-2 cursor-pointer ${
                  activeTab === "#overview"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600"
                }`}
              >
                Overview
              </li>

              <li
                onClick={() => setActiveTab("#reviews")}
                className={`px-4 py-2 cursor-pointer ${
                  activeTab === "#reviews"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600"
                }`}
              >
                Reviews
              </li>
            </ul>

            <div className="mt-4">
              {activeTab === "#overview" && (
                <>
                  <div className="animate-fadeInUp my-5">
                    <h1 className="text-2xl font-semibold text-gray-800 mb-4">
                      Course Descriptions
                    </h1>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        Consectetur adipisicing elit, sed do eiusmod tempor is
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, made of owl the quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea dolor commodo
                        consequat. Duis aute irure and dolor in reprehenderit.
                      </p>
                      <p className="text-gray-600">
                        The is ipsum dolor sit amet consectetur adipiscing elit.
                        Fusce eleifend porta arcu in hac augue habitasse platea
                        dictumst. In lacus libero, faucibus at malesuada,
                        sagittis placerat eros sed, tincidunt augue ac ante
                        rutrum sodales augue consequat.
                      </p>
                    </div>
                  </div>

                  <div className="animate-fadeInUp">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                      Requirements for The Course
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Nulla facilisi. Vestibulum tristique sem in eros eleifend
                      imperdiet. Donec quis convallis neque. In id lacus
                      pulvinar lacus, eget vulputate lectus. Ut viverra bibendum
                      lorem, at tempus nibh mattis in. Sed a massa eget lacus
                      consequat auctor.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Ut Viverra Bibendum Lorem, At Tempus Nibh Mattis",
                        "Quis Nostrud Exercitation Ullamco Laboris Nisi",
                        "Duis Aute Irure And Dolor In Reprehenderit",
                        "Ante Rutrum Sed The Is Sodales Augue Consequat",
                      ].map((requirement, index) => (
                        <li
                          key={index}
                          className="flex items-center text-gray-700"
                        >
                          <FaCheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}

              {activeTab === "#reviews" && (
                <>
                  <div className="comments-one course-details__comments">
                    <h3 className="comments-one__title text-2xl font-semibold mb-4">
                      {reviews.length} Reviews, Digital Marketing Course
                    </h3>
                    <ul className="list-unstyled comments-one__list space-y-4">
                      {reviews.map((review, index) => (
                        <li
                          key={index}
                          className="comments-one__card flex space-x-4 border-b border-gray-200 py-4"
                        >
                          <div className="comments-one__card__image flex-shrink-0">
                            <img
                              src={review.image}
                              alt={review.name}
                              className="w-16 h-16 rounded-full object-cover"
                            />
                          </div>
                          <div className="comments-one__card__content flex-1">
                            <div className="comments-one__card__top flex justify-between items-start mb-2">
                              <div className="comments-one__card__info">
                                <h3 className="comments-one__card__title text-lg font-semibold">
                                  {review.name}
                                </h3>
                                <p className="comments-one__card__date text-sm text-gray-500">
                                  {review.date}
                                </p>
                              </div>
                              <div className="eduhive-ratings flex space-x-1">
                                {Array(5)
                                  .fill()
                                  .map((_, starIndex) => (
                                    <span
                                      key={starIndex}
                                      className={`eduhive-ratings__icon ${
                                        starIndex < review.rating
                                          ? "text-yellow-500"
                                          : "text-gray-300"
                                      }`}
                                    >
                                      <i className="fa fa-star"></i>
                                    </span>
                                  ))}
                              </div>
                            </div>
                            <p className="comments-one__card__text text-sm text-gray-700">
                              {review.comment}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>

                    {/* Add Comment Form */}
                    <div className="mt-6">
                      <h4 className="text-xl font-semibold mb-4">
                        Leave a Comment
                      </h4>
                      <div className="mb-4 flex items-center space-x-2">
                        <span className="text-lg font-semibold">Rating:</span>
                        {Array(5)
                          .fill()
                          .map((_, starIndex) => (
                            <span
                              key={starIndex}
                              onClick={() => handleRatingChange(starIndex + 1)}
                              className={`cursor-pointer ${
                                starIndex < newRating
                                  ? "text-yellow-500"
                                  : "text-gray-300"
                              }`}
                            >
                              <i className="fa fa-star"></i>
                            </span>
                          ))}
                      </div>
                      <input
                        type="text"
                        className="w-full mb-4 p-2 border border-gray-300 rounded outline-none"
                        placeholder="Your Name"
                        value={newName}
                        onChange={handleNameChange}
                      />
                      <textarea
                        className="w-full mb-4 p-2 border border-gray-300 rounded outline-none"
                        placeholder="Your Comment"
                        value={newComment}
                        onChange={handleCommentChange}
                      />

                      <button
                        onClick={handleAddComment}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                      >
                        Submit Review
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[30%] h-max sticky top-20">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h5 className="text-lg font-semibold mb-5">Latest Post</h5>
            <div className="space-y-4">
              {latestPosts.map((post) => (
                <div key={post.id} className="flex items-center gap-4">
                  <div className="w-20 h-20 relative">
                    <Link href={post.link}>
                      <Image
                        src={post.imgSrc}
                        alt={post.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </Link>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 flex items-center gap-1">
                      <span className="text-blue-500">
                        <FaCalendarWeek />
                      </span>
                      <span>{post.date}</span>
                    </div>
                    <h6 className="text-base font-semibold mt-1 ">
                      <Link href={post.link} className="hover:text-blue-500">
                        {post.title}
                      </Link>
                    </h6>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="shadow-lg rounded-lg bg-white p-6 my-5 ">
            <h5 className="text-lg font-semibold mb-4 border-b pb-2">
              Categories
            </h5>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center text-gray-700 hover:text-blue-600"
                >
                  <Link href="/blog-details" className="">
                    {category.name}
                  </Link>
                  <span className="text-sm text-gray-500">
                    ({category.count})
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white shadow-md p-4 rounded-lg">
            <Link href="/sign-up" className="block overflow-hidden rounded-lg">
              <Image
                src="/images/sidebar-banner.webp"
                alt="Sidebar Promotion"
                width={300} // Adjust width as needed
                height={200} // Adjust height as needed
                className="w-full h-auto rounded-lg"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-5 lg:mx-28 mb-20">
        <p className=" text-xl lg:text-3xl font-semibold mb-8 text-center" >Similar Articles</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
          {blogPosts.slice(0, 3).map((post, ind) => (
            <Mainarticlecomp key={ind} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default page;

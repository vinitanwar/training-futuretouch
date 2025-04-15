"use client"
import BreadcrumbBanner from '@/app/components/Breadcrumb'
import React, { useState, useEffect } from 'react'
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
import { baseurl, imgurl } from '@/app/components/common/apiserve';
import axios from 'axios';

export const Compoblog = ({ slug }) => {

  const [activeTab, setActiveTab] = useState("#overview");

  const reviewsData = [
    {
      name: "Rahul Sharma ",
      date: "2/17/2025 at 2:37 PM",
      image: "/images/course-c-1-1.webp",
      comment:
        "The Digital Marketing course at Future IT Touch Institute was a game-changer for me. The trainers explained SEO, social media marketing, and Google Ads in an easy-to-understand way. The hands-on projects helped me build real-world skills, and I even landed a freelance job before completing the course. Highly recommended!",
      rating: 5,
    },
    {
      name: "Priya Verma",
      date: "2/17/2025 At 10:00 AM",
      image: "/images/course-c-1-2.webp",
      comment:
        "I had no prior experience in digital marketing, but this course made everything simple and practical. The step-by-step guidance on content marketing, paid ads, and analytics was extremely helpful. Thanks to Future IT Touch Institute, I now manage social media campaigns for a startup!",
      rating: 4,
    },
  ];

  const latestPosts = [
    {
      id: 1,
      title: "Full Stack Development",
      date: "10 Oct, 2024",
      imgSrc: "/images/blog/blog-thumb-01.webp",
      link: "/blog/full-stack-development-mastering-the-art-of-web-development/",
    },
    {
      id: 2,
      title: "Creativity with Graphic Designing",
      date: "25 Sep, 2024",
      imgSrc: "/images/blog/blog-thumb-04.webp",
      link: "/blog/unlock-your-creativity-with-graphic-designing-at-future-it-touch-institute/",
    },
    {
      id: 3,
      title: "A Gateway to Financial Growth",
      date: "05 Aug, 2024",
      imgSrc: "/images/blog/blog-thumb-10.webp",
      link: "/blog/stock-marketing-a-gateway-to-financial-growth",
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

  const [loader, setLoader] = useState(true)
  const [bloginfo, setBloginfo] = useState()



  const fatchblog = async () => {
    setLoader(true)
    let response = await axios.get(`${baseurl}/blog/${slug}`)
    response = await response.data;
    setBloginfo(response)
    setLoader(false)
  }
  const [blogData, setBlogdata] = useState();

  const fetchblog2 = async () => {
    setLoader(true);
    let response = await axios.get(`${baseurl}/blogs`);
    response = await response.data;
    setBlogdata(response);
    setLoader(false);
  };

  useEffect(() => {
    fatchblog()
    fetchblog2();
  }, [])

  console.log(bloginfo, "dfv,dfvmldfvk dfkvdf")
  return (
    <>
     
      <BreadcrumbBanner
        description="The IT industry is evolving faster than ever, and staying ahead requires continuous learning. Emerging technologies like Artificial Intelligence, cloud computing, blockchain, and cybersecurity are shaping the future of businesses worldwide. As companies embrace digital transformation, the demand for skilled IT professionals is skyrocketing. Whether you are a beginner or an experienced developer, upgrading your skills is crucial to securing better job opportunities. 

"
        bgImage="/images/banner/blog-banner.webp"
        sideImage="/images/blog/side-blog.webp"
      />

      <div className="block lg:flex mx-5 lg:mx-28 gap-10 my-20 relative">
        <div className="w-full lg:w-[70%] relative">
          <h1 className="course-details__title mb-5 text-[18px] lg:text-[28px] font-medium">
            {bloginfo?.title}
          </h1>
          <div className="pt-7 mb-7 flex items-center flex-wrap gap-y-5 gap-x-[45px] border-t border-[#DBD8E6]">
            <div className="flex items-center space-x-4">
              <Image
                src="/images/team/team1.webp"
                alt="Ankit Sharma "
                width={50}
                height={50}
                className="rounded-full"
              />
              <h4 className="text-lg font-semibold">
                <Link
                  href="/course-instructor-details"
                  className="text-blue-600 hover:underline"
                >
                  Ankit Sharma
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
              // src={`${imgurl}/storage/${bloginfo?.blog_image}`}
              src="/images/blog/blog-1.webp"
              alt="The Complete Data Science Course"
              width={600}
              height={200}
              className="w-full h-[500px] object-cover rounded-lg"
            />

            <span className="absolute top-2 left-2 bg-blue-600 text-white text-sm px-3 py-1 rounded">
              Technology
            </span>
          </div>

          <div>
            <ul className="flex border-b mt-5 border-gray-300">
              <li
                onClick={() => setActiveTab("#overview")}
                className={`px-4 py-2 cursor-pointer ${activeTab === "#overview"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600"
                  }`}
              >
                Overview
              </li>

              <li
                onClick={() => setActiveTab("#reviews")}
                className={`px-4 py-2 cursor-pointer ${activeTab === "#reviews"
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
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                      Course Descriptions
                    </h3>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        From social media marketing and search engine optimization (SEO) to content creation and paid advertising, digital marketing covers a wide range of strategies that help businesses reach their target audience effectively. Learning digital marketing opens up vast career opportunities, whether you want to work for a company, start your own business, or become a freelance marketer.
                      </p>
                      <p className="text-gray-600">
                        At Future IT Touch Institute, our Digital Marketing Course is designed to provide hands-on training in SEO, Google Ads, social media campaigns, email marketing, and analytics. Our expert-led sessions help students master the latest tools and techniques, ensuring they stay ahead in this fast-growing industry. Whether you're a beginner or an entrepreneur looking to grow your business online, our course will equip you with the skills needed to succeed in the competitive digital marketing landscape.
                      </p>
                    </div>
                  </div>

                  <div className="animate-fadeInUp">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                      Requirements for the Digital Marketing Course at Future IT Touch Institute
                    </h3>
                    <p className="text-gray-600 mb-4">
                      To enroll in the Digital Marketing Course at Future IT Touch Institute, students must meet the following requirements:
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Basic Computer Knowledge",
                        "Internet Access",
                        "Educational Qualification",
                        "Good Communication Skills",
                        "Creativity and Analytical Thinking",
                        "Interest in Online Marketing",
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
                                      className={`eduhive-ratings__icon ${starIndex < review.rating
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
                              className={`cursor-pointer ${starIndex < newRating
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
                  <span className="">
                    {category.name}
                  </span>
                  <span className="text-sm text-gray-500">
                    ({category.count})
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white shadow-md p-4 rounded-lg">
            <Link href="/contact-us" className="block overflow-hidden rounded-lg">
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



      {!loader && (
        <>
          <p className=" text-xl lg:text-3xl font-semibold mb-8 text-center" >Similar Articles</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-5 lg:mx-28 pb-20">
            {blogData?.slice(3).map((post, index) => (
              <Mainarticlecomp key={index} post={post} />
            ))}
          </div>
        </>
      )}
    </>
  )
}




const Mainarticlecomp = ({ post }) => {
  return (
    <article className="relative overflow-hidden bg-white border border-gray-200 rounded-b-md p-5 transition duration-300 ease-in-out">
      <h4 className="text-lg mb-2">
        <Link href={`/blog/${post.slug}`} className="hover:underline">
          {post.title}
        </Link>
      </h4>

      <div className="text-gray-500 text-sm flex flex-wrap gap-4 mb-3">
        <span>
          <i className="far fa-clock mr-1 text-blue-500"></i>
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            {post.updated_at.split("T")[0]}
          </Link>
        </span>
        <span>
          <i className="far fa-keyboard mr-1 text-blue-500"></i>
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            {post.writer}
          </Link>
        </span>
      </div>

      <div className="text-gray-500 text-sm mb-3">
        <i className="far fa-folder-open mr-1 text-blue-500"></i>
        {post.keywords?.map((category, index) => (
          <span key={index}>
            <Link href={`/blog/${post.slug}`} className="hover:underline">
              {category}
            </Link>
            {index < post.keywords.length - 1 ? ", " : ""}
          </span>
        ))}
      </div>

      <p
        className="text-gray-700 mb-4"
        dangerouslySetInnerHTML={{ __html: post.about_blog }}
      ></p>

      <Link
        href={`/blog/${post.slug}`}
        className="text-blue-600 font-medium hover:underline"
      >
        Read more
      </Link>
    </article>
  );
};

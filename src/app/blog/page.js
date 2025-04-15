"use client";
import Link from "next/link";
import BreadcrumbBanner from "../components/Breadcrumb";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseurl } from "../components/common/apiserve";

const SkeletonLoader = () => (
  <article className="relative overflow-hidden bg-white border border-gray-200 rounded-b-md p-5 animate-pulse">
    <div className="h-6 bg-gray-300 rounded w-3/4 mb-3"></div>

    <div className="flex flex-wrap gap-4 mb-3">
      <div className="h-4 bg-gray-300 rounded w-1/4"></div>
      <div className="h-4 bg-gray-300 rounded w-1/4"></div>
    </div>

    <div className="h-4 bg-gray-300 rounded w-2/4 mb-3"></div>

    <div className="h-20 bg-gray-300 rounded mb-4"></div>

    <div className="h-4 bg-gray-300 rounded w-1/4"></div>
  </article>
);

const Mainarticlecomp = ({ post }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  if (isLoading) return <SkeletonLoader />;
  return (
    <>
      <article className="relative overflow-hidden bg-white border border-gray-200 rounded-b-md p-5 transition duration-300 ease-in-out">
        <p className="text-lg mb-2">
          <Link href={post.slug} className="hover:underline">
            {post.title}
          </Link>
        </p>

        <div className="text-gray-500 text-sm flex flex-wrap gap-4 mb-3">
          <span>
            <i className="far fa-clock mr-1 text-blue-500"></i>
            <Link href={post.slug} className="hover:underline">
              {post.updated_at.split("T")[0]}
            </Link>
          </span>
          <span>
            <i className="far fa-keyboard mr-1 text-blue-500"></i>
            <Link href={post.slug} className="hover:underline">
              {post.writer}
            </Link>
          </span>
        </div>

        <div className="text-gray-500 text-sm mb-3">
          <i className="far fa-folder-open mr-1 text-blue-500"></i>
          {post.keywords?.map((category, index) => (
            <span key={index}>
              <Link href={post.slug} className="hover:underline">
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
          href={post.slug}
          className="text-blue-600 font-medium hover:underline"
        >
          Read more
        </Link>
      </article>
    </>
  );
};

const BlogList = () => {
  const [blogData, setBlogdata] = useState();
  const [loader, setLoader] = useState(true);
  const fetchblog = async () => {
    setLoader(true);
    let response = await axios.get(`${baseurl}/blogs`);
    response = await response.data;
    setBlogdata(response);
    setLoader(false);
  };

  useEffect(() => {
    fetchblog();
  }, []);

  return (
    <>
      <head>
        <title>Blog - Future IT Touch's Institute in Chandigarh, India</title>
        <meta
          name="description"
          content="Explore the Future It Touch Blog for expert tips on Web Design, SEO, and Digital Marketing. Learn proven strategies, trends, and boost your skills today!"
        />
      </head>

      <BreadcrumbBanner
        description="The IT industry is evolving faster than ever, and staying ahead requires continuous learning. Emerging technologies like Artificial Intelligence, cloud computing, blockchain, and cybersecurity are shaping the future of businesses worldwide. As companies embrace digital transformation, the demand for skilled IT professionals is skyrocketing. Whether you are a beginner or an experienced developer, upgrading your skills is crucial to securing better job opportunities. "
        bgImage="/images/banner/blog-banner.webp"
        sideImage="/images/blog/side-blog.webp"
      />

      {!loader && (
        <div className=" py-20 mb-3">
          <h1 className="text-center text-lg lg:text-3xl font-semibold">
            Our Blogs
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-5 lg:mx-28">
            {blogData?.map((post, index) => (
              <Mainarticlecomp key={index} post={post} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default BlogList;

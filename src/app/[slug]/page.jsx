import React from "react";
import CourseCompo from "./CourseCompo";


export async function generateStaticParams() {
  try {
    const res = await fetch("https://admin.futureittouch.com/api/v1/coursesnew");
    const data = await res.json();

    if (!Array.isArray(data)) {
      console.error("Invalid API response:", data);
      return [];
    }

    return data.map((course) => ({
      slug: course.slug, // Adjust according to API response
    }));
  } catch (error) {
    console.error("Error fetching course slugs:", error);
    return [];
  }
}

const Page = async ({ params }) => {
  // Ensure params are awaited properly
  if (!params || !params.slug) return <p>Loading...</p>;

  return <CourseCompo slug={params.slug} />;
};

export default Page;

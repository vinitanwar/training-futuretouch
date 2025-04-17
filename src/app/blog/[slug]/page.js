import React from 'react'
import { Compoblog } from './Compoblog'


export async function generateStaticParams() {
  try {
    const res = await fetch("https://gursimran.online/api/v1/blogs");
    const data = await res.json();

    
    if (!Array.isArray(data)) {
      console.error("Invalid API response:", data);
      return [];
    }

    return data.map((course) => ({
      slug: course.slug, 
    }));
  } catch (error) {
    console.error("Error fetching course slugs:", error);
    return [];
  }
}

 const page = ({params}) => {

  return (
    <Compoblog slug={params.slug} />
   
  )
}
export default page;

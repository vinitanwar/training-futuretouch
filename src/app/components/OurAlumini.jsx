'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Image from 'next/image';

const alumniTestimonials = [
  {
    name: "Milee Thakkar",
    image: "https://iide-media.blr1.cdn.digitaloceanspaces.com/production/home-thumbnail-milee-thakkar-98c597c9fe5c8dc98e6b0557e3ace00b.webp",
    video: "https://iide-media.blr1.cdn.digitaloceanspaces.com/production/b99f88fdf777408ed575641a6b7296a0.mp4",
  },
  {
    name: "Risha Jain",
    image: "https://iide-media.blr1.cdn.digitaloceanspaces.com/production/home-thumbnail-risha-jain-c5efe4d5e365f591ea057b32a39d03c7.webp",
    video: "https://iide-media.blr1.cdn.digitaloceanspaces.com/production/fb84d7fa4d43e1709b3a101bbac12fae.mp4",
  },
  {
    name: "Milee Thakkar",
    image: "https://iide-media.blr1.cdn.digitaloceanspaces.com/production/home-thumbnail-milee-thakkar-98c597c9fe5c8dc98e6b0557e3ace00b.webp",
    video: "https://iide-media.blr1.cdn.digitaloceanspaces.com/production/b99f88fdf777408ed575641a6b7296a0.mp4",
  },
  {
    name: "Risha Jain",
    image: "https://iide-media.blr1.cdn.digitaloceanspaces.com/production/home-thumbnail-risha-jain-c5efe4d5e365f591ea057b32a39d03c7.webp",
    video: "https://iide-media.blr1.cdn.digitaloceanspaces.com/production/fb84d7fa4d43e1709b3a101bbac12fae.mp4",
  },
  {
    name: "Milee Thakkar",
    image: "https://iide-media.blr1.cdn.digitaloceanspaces.com/production/home-thumbnail-milee-thakkar-98c597c9fe5c8dc98e6b0557e3ace00b.webp",
    video: "https://iide-media.blr1.cdn.digitaloceanspaces.com/production/b99f88fdf777408ed575641a6b7296a0.mp4",
  },
  {
    name: "Risha Jain",
    image: "https://iide-media.blr1.cdn.digitaloceanspaces.com/production/home-thumbnail-risha-jain-c5efe4d5e365f591ea057b32a39d03c7.webp",
    video: "https://iide-media.blr1.cdn.digitaloceanspaces.com/production/fb84d7fa4d43e1709b3a101bbac12fae.mp4",
  },
];
const AlumniTestimonials = () => {
  return (
    <div className='container py-20 px-5 lg:px-28'>
      <div className='text-center mb-10'>
        <h2 className='text-2xl md:text-5xl font-semibold'>
          Hear It From <span className='text-blue-500'>Our Alumni</span>
        </h2>
        <p className='mt-4 text-gray-600 md:w-1/2 mx-auto'>
          Our graduates have transformed their careers with Future IT Touch Institute’s expert training and hands-on learning approach.
        </p>
      </div>

      <Swiper
        slidesPerView={2}
        spaceBetween={20}

        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 6 },
        }}
        className='flex justify-center'
      >
        {alumniTestimonials.map((alumni, index) => (
          <SwiperSlide key={index}>
            <div className='relative w-full rounded-3xl overflow-hidden'>
              <Image
                src={alumni.image}
                alt={alumni.name}
                width={200}
                height={300}
                className='w-full h-full object-cover rounded-3xl'
              />
              <video
                src={alumni.video}
                className='absolute inset-0 w-full h-full object-cover rounded-3xl transition-opacity duration-300 hover:opacity-100 opacity-0'
                playsInline
                autoPlay
                loop
                muted
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AlumniTestimonials;

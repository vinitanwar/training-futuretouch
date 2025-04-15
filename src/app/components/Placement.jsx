'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';

export default function PlacementSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center pb-20 px-5 lg:px-32">
      <div className="w-full lg:max-w-6xl px-0 lg:px-4 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">Our Placement Achievements</h2>
        <p className="text-lg text-gray-600 mb-6">
          We have successfully placed numerous candidates in top companies with excellent career growth.
        </p>
      </div>

      {/* Desktop Image - Visible on large screens only */}
      <div className="w-full hidden lg:block">
        <Image
          src="/images/pic3.webp"
          alt="Placement Success"
          width={1920}
          height={800}
          className="w-full h-auto mt-5"
        />
      </div>

      {/* Mobile Slider - Visible only on mobile */}
      <div className="w-full block lg:hidden mt-5">
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
        >
          {/* Add more SwiperSlide items if needed */}
          {['/images/a1.webp', '/images/a2.webp', '/images/a3.webp', '/images/a4.webp', '/images/a5.webp', '/images/a6.webp'].map((src, index) => (
            <SwiperSlide key={index}>
              <Image
                src={src}
                alt={`Placement Slide ${index + 1}`}
                width={600}
                height={400}
                className="rounded-lg w-full h-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

"use client"
import React from 'react'
import CountUp from "react-countup";
import { motion } from "framer-motion";
import Image from 'next/image';


const Counter = () => {
    const funFacts = [
        {
          id: 1,
          icon: "student.webp",
          count: 30,
          suffix: "k+",
          text: "Satisfied Student",
          delay: 0,
          bg: "bg-blue-500",
        },
        {
          id: 2,
          icon: "webinar.webp",
          count: 6500,
          suffix: "+",
          text: "Class Completed",
          delay: 100,
          bg: "bg-yellow-500",
        },
        {
          id: 3,
          icon: "active-learning.webp",
          count: 6561,
          suffix: "+",
          text: "Active Students",
          delay: 200,
          bg: "bg-blue-500",
        },
        {
          id: 4,
          icon: "personal-trainer.webp",
          count: 400,
          suffix: "+",
          text: "Experts Instructors",
          delay: 300,
          bg: "bg-yellow-500",
        },
      ];

  return (
    <>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-5 md:px-28 py-20">
        {funFacts.map((fact) => (
          <motion.div
            key={fact.id}
            className={`p-6 ${fact.bg} text-white text-center rounded-lg shadow-lg`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: fact.delay / 1000 }}
          >
            <div className="text-4xl mb-4">
             <Image src={`/images/${fact.icon}`} width={20} height={20} alt="Active Students" className="w-auto h-16 mx-auto" />
            </div>
            <h3 className="text-3xl font-bold">
              <CountUp end={fact.count} duration={1.5} />
              {fact.suffix}
            </h3>
            <p className="text-lg mt-2">{fact.text}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default Counter
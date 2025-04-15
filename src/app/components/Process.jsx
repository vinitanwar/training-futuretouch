"use client"
import React from 'react'

const Process = () => {

  const steps = [
    {
      id: 1,
      title: "Registration",
      description:
        "On successful registration, you will receive a call from our Senior Admission Officer. They will gather information such as your academic background, past work experience (if any), and details regarding your career goals and objectives. Based on this information, you will be able to select the right digital marketing course from our range of offerings.",
      icon: "/images/register.webp",
    },
    {
      id: 2,
      title: "Submit Your Documents",
      description:
        "For the Certified Digital Marketing Expert Program, you are required to submit your highest qualification documents. For the Digital Marketing Master & Strategic Leadership Program, you need to submit either your work experience document or your LinkedIn profile at the time of admission.",
      icon: "/images/submit.webp",
    },
    {
      id: 3,
      title: "Select Your Batch",
      description:
        "Our Digital Marketing Training offers both weekday (Tuesdays and Thursdays) and weekend (Saturdays and Sundays) options. You can choose one day to focus on mastering the skills. Note: You have the flexibility to change your selected days if needed.",
      icon: "/images/list.webp",
    },
    {
      id: 4,
      title: "Pay Your Fee",
      description:
        "After selecting your batch, please proceed to pay your course fee through options such as credit card, debit card, net banking, or instalments through our EMI partners. Please note that EMI options are available in India only.",
      icon: "/images/sponsorship.webp",
    },
  ];
  return (
    <>
      <div className="container mx-auto px-5 lg:px-28 py-20">
        <p className="text-center font-semibold text-lg lg:text-3xl mb-4">Admission Process</p>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative text-center ${index % 2 !== 0 ? "mt-12" : ""
                }`}
            >
              {index !== steps.length - 1 && (
                <div className="absolute top-[13%] right-[-20%] rotate-2 hidden lg:block">
                  <img
                    src="/images/down-right.webp"
                    alt="Arrow"
                    className="w-12 h-auto"
                  />
                </div>
              )}
              <div className="relative bg-white shadow-lg w-32 h-32 flex items-center justify-center rounded-full mx-auto">
                <span className="absolute top-0 right-0 bg-blue-500 text-white w-10 h-10 flex items-center justify-center rounded-full text-lg font-bold border-4 border-white">
                  {step.id}
                </span>
                <img src={step.icon} alt={step.title} className="w-12" />
              </div>
              <div className="mt-6">
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="text-gray-600 text-sm text-justify">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  )
}

export default Process
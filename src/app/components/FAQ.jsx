"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const faqData = [
    {
        category: "How does Future IT Touch Institute help students build a successful IT career?",
        questions: [
            {
                question: "Do you provide hands-on projects and practical training?",
                answer:
                    "Yes! All our courses include real-world projects, case studies, and live coding sessions to ensure practical learning."
            },
            {
                question: "What kind of career support do you offer?",
                answer:
                    "We provide resume-building workshops, mock interviews, and direct job referrals to our hiring partners."
            },
            {
                question: "Can I get mentorship from industry experts?",
                answer:
                    "Absolutely! Our mentors are experienced IT professionals who guide students throughout the course and beyond."
            }
        ]
    },
    {
        category: "How does Future IT Touch Institute ensure quality learning?",
        questions: [
            {
                question: "Do you have experienced instructors?",
                answer:
                    "Yes! Our instructors are industry professionals with years of experience in IT and software development."
            },
            {
                question: " Are the courses updated with the latest technologies?",
                answer:
                    "Absolutely! We continuously update our curriculum to match industry trends and demands."
            }
        ]
    },
    {
        category: "What career opportunities can I expect after completing a course?",
        questions: [
            {
                question: " What job roles can I apply for?",
                answer:
                    "Depending on your course, you can apply for roles like Web Developer, Data Analyst, UI/UX Designer, Digital Marketer, and more."
            },
            {
                question: " Do you provide internship opportunities?",
                answer:
                    "Yes! We offer internship programs to give students hands-on industry experience."
            }
        ]
    },
    {
        category: "Career Mentoring",
        questions: [
            {
                question: "What if I need additional support during my course?",
                answer:
                    "We provide extra doubt-clearing sessions, one-on-one mentorship, and 24/7 access to course materials. If students miss a class, they can watch recorded lectures anytime. Our lifetime access policy ensures continuous learning and skill enhancement."
            }
        ]
    }
];


const FAQ = () => {
    const [openCategory, setOpenCategory] = useState(0);
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleCategory = (index) => {
        setOpenCategory(openCategory === index ? null : index);
        setOpenQuestion(null);
    };

    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    return (
        <div className="faq-container  bg-gray-100  px-5 lg:px-28  py-20">
            <h2 className="text-2xl font-bold text-center mb-6">
                Frequently Asked Questions
            </h2>

            <div className="block lg:flex items-center gap-10 justify-center">
                <div className="faq-wrapper w-full lg:w-3/5">
                    {faqData.map((category, catIndex) => (
                        <div key={catIndex} className="border-b ">
                            {/* Category Header */}
                            <div
                                className="flex justify-between items-center py-3 cursor-pointer"
                                onClick={() => toggleCategory(catIndex)}
                            >
                                <p className="text-lg font-semibold">{category.category}</p>
                                <span>{openCategory === catIndex ? <i className="fa fa-angle-up "></i> : <i className="fa fa-angle-down"></i>}</span>
                            </div>


                            <AnimatePresence>
                                {openCategory === catIndex && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="mb-3 overflow-hidden"
                                    >
                                        {category.questions.map((faq, faqIndex) => (
                                            <div key={faqIndex} className="border-t">
                                                <div
                                                    className="flex justify-between items-center py-2 cursor-pointer"
                                                    onClick={() => toggleQuestion(faqIndex)}
                                                >
                                                    <h4 className="text-md font-medium">{faq.question}</h4>
                                                    <span className="text-justify">{openQuestion === faqIndex ? <i className="fa fa-angle-up "></i> : <i className="fa fa-angle-down "></i>}</span>
                                                </div>

                                                <AnimatePresence>
                                                    {openQuestion === faqIndex && (
                                                        <motion.p
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: "auto" }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                                            className="text-gray-600 pb-2 text-justify overflow-hidden"
                                                        >
                                                            {faq.answer}
                                                        </motion.p>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <div className="w-full mt-10 lg:mt-0 lg:w-2/5">
                    <Image src="/images/faq-3-1.webp" width={500} height={300} className="h-96 w-full object-cover" alt="frequently asked question" />
                </div>
            </div>
        </div>
    );
};

export default FAQ;

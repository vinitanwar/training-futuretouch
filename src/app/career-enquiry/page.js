"use client";
import React from "react";
import BreadcrumbBanner from "../components/Breadcrumb";
import Link from "next/link";
import { FaClock, FaSuitcase } from "react-icons/fa";

const page = () => {
  return (
    <>
      <head>
        <title>Future It Touch – Start Your Career Journey With Us</title>
        <meta
          name="description"
          content="Future IT Touch – Start your career journey with expert Web Design & Digital Marketing courses. Learn SEO, design, and grow your future with confidence!"
        />
      </head>

      <BreadcrumbBanner
        description="At Future It Touch, we believe in fostering a culture of innovation, collaboration, and growth. Whether you're an experienced professional or just starting your journey, we offer exciting opportunities to develop your skills, work on meaningful projects, and be part of a dynamic team. Explore our open positions and take the next step in your career with us!"
        bgImage="/images/banner/blog-banner.webp"
      />

      <div className=" mx-auto px-5 lg:px-28  py-10 lg:py-20">
        <div className="hidden lg:flex flex-col md:flex-row items-center bg-white  p-8 rounded-xl shadow justify-between">
          <div className="flex flex-col">
            <h1 className="text-lg lg:text-3xl font-semibold text-gray-900">
              Digital Marketing Intern (Brandveda Institute)
            </h1>
            <div className="flex flex-col mt-6 md:flex-row md:gap-12">
              <div className="flex items-center gap-2">
                <FaSuitcase />
                <div className="text-lg font-semibold text-gray-700">
                  Flexible
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaClock />
                <div className="text-lg font-semibold text-gray-700">
                  Last Date Of Application:
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  January 10, 2025
                </div>
              </div>
            </div>
          </div>
          <div>
            <Link
              href="#wf-form-Career_Inquiry"
              className="w-full border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-600 hover:text-white transition"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>

      <section className="career-details">
        <div className="container mx-auto px-5 lg:px-28 pb-20">
          <div className="flex  flex-wrap">
            <div className="career-details-left w-full md:w-2/3 pr-0 lg:pr-20 mb-8 md:mb-0">
              <div className="rich-text-block-6 text-lg">
                <p>
                  Do you have a passion for digital marketing and a desire to
                  learn from the best?
                </p>
                <p>
                  Brandveda, a leading digital marketing institute, is seeking
                  enthusiastic and talented interns to join our growing team.
                  This is a fantastic opportunity to gain valuable hands-on
                  experience in a fast-paced and dynamic environment.
                </p>
                <p className="mt-5">
                  <strong>Key Responsibilities:</strong>
                </p>
                <ul role="list" className="list-disc pl-6">
                  <li>
                    Assist the marketing team with various tasks, including
                    social media management, content creation, email marketing,
                    and SEO research.
                  </li>
                  <li>
                    Learn from industry experts and gain practical knowledge of
                    digital marketing strategies and tools.
                  </li>
                  <li>
                    Conduct research and analysis to support marketing campaigns
                    and initiatives.
                  </li>
                  <li>
                    Help create engaging content for our website and social
                    media channels.
                  </li>
                  <li>
                    Stay up-to-date on the latest digital marketing trends and
                    technologies.
                  </li>
                  <li>
                    Participate in brainstorming sessions and contribute fresh
                    ideas.
                  </li>
                  <li>
                    May assist with administrative tasks related to marketing
                    operations (depending on department needs).
                  </li>
                </ul>
                <p className="mt-5">
                  <strong>Requirements:</strong>
                </p>
                <ul role="list" className="list-disc pl-6">
                  <li>
                    Highly motivated and eager to learn about digital marketing.
                  </li>
                  <li>Strong research and analytical skills.</li>
                  <li>Excellent written and verbal communication skills.</li>
                  <li>Creative and a team player with a positive attitude.</li>
                  <li>
                    Proficient in using social media platforms and basic digital
                    tools.
                  </li>
                  <li>
                    Ability to work independently and manage multiple tasks
                    effectively.
                  </li>
                </ul>
                <p className="mt-5">
                  <strong>Benefits:</strong>
                </p>
                <ul role="list" className="list-disc pl-6">
                  <li>Invaluable experience in the digital marketing field.</li>
                  <li>
                    The opportunity to work on real-world marketing projects and
                    campaigns.
                  </li>
                  <li>
                    A chance to learn from experienced professionals and
                    mentors.
                  </li>
                  <li>
                    Develop and enhance your digital marketing skills (e.g.,
                    social media management, content creation, SEO).
                  </li>
                  <li>Build your resume and portfolio with relevant skills.</li>
                  <li>
                    Potential opportunity for full-time employment upon
                    graduation (depending on performance).
                  </li>
                </ul>
                <p>
                  Passionate and organized student seeking hands-on experience
                  in social media, content creation, and digital marketing? Join
                  our team!
                </p>
              </div>
            </div>
            <div className="career-details-right p-8  w-full md:w-1/3">
              <div className="job-details">
                <h3 className="text-2xl font-semibold mb-6">Job details</h3>
                <div className="mb-6">
                  <div className="flex justify-between mb-4">
                    <div>Experience :</div>
                    <div>1 Year</div>
                  </div>
                  <div className="flex justify-between mb-4">
                    <div>No Of Vacancies :</div>
                    <div>2 Posts available</div>
                  </div>
                  <div className="flex justify-between mb-4">
                    <div>Working Hours :</div>
                    <div>6 Hours</div>
                  </div>
                  <div className="flex justify-between mb-4">
                    <div>Salary :</div>
                    <div>6K - 8K</div>
                  </div>
                  <div className="flex justify-between mb-4">
                    <div>Working Days :</div>
                    <div>Monday - Friday</div>
                  </div>
                </div>
                <Link
                  href="#wf-form-Career_Inquiry"
                  className="w-full border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-600 hover:text-white transition"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-16 bg-gradient-to-r from-blue-50 to-white"
        id="wf-form-Career_Inquiry"
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">
              Fill the Application Form
            </h2>
            <p className="text-lg">
              We’d love to hear from you. Please fill out this form.
            </p>
          </div>

          <form
            name="wf-form-Career_Inquiry"
            data-name="Career_Inquiry"
            method="get"
            className="space-y-8 border p-4 lg:p-8"
          >
            {/* First Name and Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="Contact-02-first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  className="w-full p-3  outline-none"
                  type="text"
                  id="Contact-02-first-name"
                  name="Contact-02-first-name"
                  placeholder="First name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="Contact-02-last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  className="w-full p-3  outline-none"
                  type="text"
                  id="Contact-02-last-name"
                  name="Contact-02-last-name"
                  placeholder="Last name"
                  required
                />
              </div>
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="Contact-02-email-2"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  className="w-full p-3  outline-none"
                  type="email"
                  id="Contact-02-email-2"
                  name="Contact-02-email-2"
                  placeholder="your@company.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="Contact-02-phone-2"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  className="w-full p-3  outline-none"
                  type="tel"
                  id="Contact-02-phone-2"
                  name="Contact-02-phone-2"
                  placeholder="Phone Number"
                  required
                />
              </div>
            </div>

            {/* How did you hear about us? */}
            <div className="space-y-2">
              <label
                htmlFor="Contact-02-select"
                className="block text-sm font-medium text-gray-700"
              >
                How did you hear about us?
              </label>
              <select
                id="Contact-02-select"
                name="Contact-02-select"
                className="w-full p-3  outline-none"
                required
              >
                <option value="">How did you hear about us?</option>
                <option value="First">LinkedIn</option>
                <option value="Second">Instagram</option>
                <option value="Third">Indeed</option>
                <option value="Fourth">Naukri</option>
                <option value="Fifth">Reference</option>
              </select>
            </div>

            {/* Experience in years */}
            <div className="space-y-2">
              <label
                htmlFor="Work-Experience"
                className="block text-sm font-medium text-gray-700"
              >
                Experience 
              </label>
              <select
                id="Work-Experience"
                name="Work-Experience"
                className="w-full p-3  outline-none"
                required
              >
                <option value="">Fresher</option>
                <option value="First">6 Months</option>
                <option value="First">1 Year</option>
                <option value="Second">2 Years</option>
                <option value="Third">3 Years</option>
                <option value="Another option">4 Years</option>
                <option value="Another option">5 Years</option>
                <option value="Another option">6 Years</option>
              </select>
            </div>

            {/* CTC (Current and Expected) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="Contact-02-email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Current CTC (Monthly)
                </label>
                <input
                  className="w-full p-3  outline-none"
                  type="text"
                  id="Contact-02-email"
                  name="Contact-02-email"
                  placeholder="INR"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="Contact-02-phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Expected CTC (Monthly)
                </label>
                <input
                  className="w-full p-3  outline-none"
                  type="text"
                  id="Contact-02-phone"
                  name="Contact-02-phone"
                  placeholder="INR"
                  required
                />
              </div>
            </div>

           
            <div className="space-y-2">
              <label
                htmlFor="Notice-Period"
                className="block text-sm font-medium text-gray-700"
              >
                Notice period
              </label>
              <select
                id="Notice-Period"
                name="Notice-Period"
                className="w-full p-3  outline-none"
                required
              >
                <option value="">Fresher</option>
                <option value="First">7 Days</option>
                <option value="Second">15 Days</option>
                <option value="Third">1 Month</option>
                <option value="Third">45 Days</option>
              </select>
            </div>

            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="Contact-02-email-3"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  className="w-full p-3  outline-none"
                  type="text"
                  id="Contact-02-email-3"
                  name="Contact-02-email-3"
                  placeholder="Enter your Present City"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="Contact-02-email-3"
                  className="block text-sm font-medium text-gray-700"
                >
                  State
                </label>
                <input
                  className="w-full p-3  outline-none"
                  type="text"
                  id="Contact-02-email-3"
                  name="Contact-02-email-3"
                  placeholder="Enter your State"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center mt-8">
              <button
                type="submit"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default page;

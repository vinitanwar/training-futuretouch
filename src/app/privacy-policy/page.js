"use client";
import React from "react";
import BreadcrumbBanner from "../components/Breadcrumb";

const page = () => {
  return (
    <>
      <head>
        <title>
        Privacy Policy- Future IT Touch's Institute in Chandigarh, India
        </title>
        <meta
          name="description"
          content="Future IT Touch's Institute prioritizes your privacy, ensuring secure data handling and protection for users across Chandigarh, Mohali, and Panchkula."
        />
      </head>

      <BreadcrumbBanner
        description="Powering 2 Billion mobile devices across the globe, Android inevitably stands out..."
        bgImage="/images/banner/blog-banner.webp"
      />

      <div className="mx-5 lg:mx-28 py-20 text-gray-700">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <p className="mb-4">
          This Privacy Policy describes how we collect, use, and protect your
          personal information when you use our website.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          1. Information We Collect
        </h2>
        <p className="mb-4">
          We collect information that you provide directly to us, such as your
          name, email address, and any other details you submit when contacting
          us or signing up for our services.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>To provide and maintain our services.</li>
          <li>To respond to your inquiries and provide customer support.</li>
          <li>
            To send newsletters or promotional content (only if you opt-in).
          </li>
          <li>To improve our website and user experience.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Protection</h2>
        <p className="mb-4">
          We implement appropriate security measures to protect your personal
          data from unauthorized access, alteration, disclosure, or destruction.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          4. Third-Party Services
        </h2>
        <p className="mb-4">
          We may use third-party services (such as analytics tools or payment
          gateways) that collect, process, and store data in compliance with
          their own privacy policies.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Your Rights</h2>
        <p className="mb-4">
          You have the right to access, update, or delete your personal
          information. If you have any concerns about your data, please contact
          us.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          6. Updates to This Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page with the updated date.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">7. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at:
          <br /> <strong>Email:</strong> info@futureittouch.com
        </p>
      </div>
    </>
  );
};

export default page;

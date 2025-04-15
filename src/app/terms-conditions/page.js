import React from "react";
import BreadcrumbBanner from "../components/Breadcrumb";

const TermsAndConditions = () => {
  return (
    <>

<head>
        <title>
        Terms & Condtion - Future IT Touch's Institute in Chandigarh
        </title>
        <meta
          name="description"
          content="Read the Terms and Conditions for using Future It Touch’s platform. Access Web Design, SEO, and Digital Marketing courses with confidence and clarity."
        />
      </head>
       <BreadcrumbBanner
        description="Powering 2 Billion mobile devices across the globe, Android inevitably stands out..."
        bgImage="/images/banner/blog-banner.webp"
       
      />
      <div className="mx-5 lg:mx-28 py-20 text-gray-700">
        <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
        <p className="mb-4 text-gray-600">
          Welcome to our website. By accessing or using our platform, you agree
          to comply with and be bound by the following terms and conditions.
        </p>

        <h2 className="text-xl font-semibold mt-4">1. Acceptance of Terms</h2>
        <p className="text-gray-600">
          By using this website, you agree to be legally bound by these terms.
          If you do not agree, please refrain from using our services.
        </p>

        <h2 className="text-xl font-semibold mt-4">2. Use of Services</h2>
        <p className="text-gray-600">
          Our services are provided "as is" without any warranties of any kind.
          We reserve the right to modify or discontinue any part of our services
          without notice.
        </p>

        <h2 className="text-xl font-semibold mt-4">3. User Responsibilities</h2>
        <p className="text-gray-600">
          Users must not engage in any activity that disrupts or interferes with
          our services. Any misuse of our platform will lead to termination of
          access.
        </p>

        <h2 className="text-xl font-semibold mt-4">
          4. Limitation of Liability
        </h2>
        <p className="text-gray-600">
          We are not responsible for any direct, indirect, or incidental damages
          resulting from the use of our services.
        </p>

        <h2 className="text-xl font-semibold mt-4">5. Changes to Terms</h2>
        <p className="text-gray-600">
          We reserve the right to update these terms at any time. Users will be
          notified of significant changes.
        </p>
      </div>
    </>
  );
};

export default TermsAndConditions;

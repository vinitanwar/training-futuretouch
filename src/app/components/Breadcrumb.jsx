"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BreadcrumbBanner = ({ title, description, bgImage, sideImage }) => {
    const pathname = usePathname();

    const formattedPathname = pathname
        .split("/")
        .filter(Boolean)
        .map((segment) =>
            segment.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())
        )
        .join(" / ");

    
    if (!bgImage && !sideImage) return null;

    return (
        <div
            className="relative bg-cover z-0 px-28 bg-no-repeat max-sm:px-5 max-sm:py-7 gap-10 py-10 max-lg:px-10"
            style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
        >
            {bgImage && <div className="absolute inset-0 bg-black bg-opacity-50 z-[-1]"></div>}
            <div className="flex gap-5 justify-between items-center max-sm:block max-lg:block">
                <div>
                    <p className="text-white font-bold text-3xl max-sm:text-2xl max-lg:text-xl">
                        {formattedPathname || "Home"}
                    </p>
                    {description && <>
                        <div className="text-[#dcd7f8] mt-3 text-lg text-justify">
                            <p>{description}</p>
                        </div>
                        <div className="flex gap-3 mt-5">
                            <Link
                                href="/contact-us"
                                className="flex items-center bg-[#dc3545] justify-center text-white py-2 px-2 sm:px-8 font-heading transition duration-400 ease-in-out rounded-md text-base focus:outline-none"
                            >
                                Quick Enquiry
                            </Link>
                            <Link href="tel:7056497000" className="flex items-center bg-dark-200 justify-center border text-white py-2 px-2 sm:px-8 font-heading transition duration-400 ease-in-out rounded-md text-base focus:outline-none">
                                Call us - 7056497000
                            </Link>
                        </div></>
                    }
                </div>
                {sideImage && (
                    <img
                        src={sideImage}
                        alt="Side Banner"
                        className="max-lg:mx-auto max-lg:mt-10 h-72 w-auto"
                    />
                )}
            </div>
        </div>
    );
};

export default BreadcrumbBanner;

"use client";

import { useState, useEffect } from "react";
import Select from "react-select";
import Form from "./Form";

const PopupForm = () => {

    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 10000); // Show popup after 2 seconds

        return () => clearTimeout(timer);
    }, []);


    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white relative p-6 shadow-lg w-[450px] rounded-lg">
                <h2 className="text-xl font-semibold text-center">Talk to our expert</h2>
                <img src="/images/Design.webp" alt="" className="my-4 rounded" />
                <Form setIsVisible={setIsVisible} />


                {/* Close Button */}
                <button className="absolute top-2 right-3 text-gray-600 hover:text-gray-900" onClick={() => setIsVisible(false)}>
                    ✖
                </button>
            </div>
        </div>
    );
};

export default PopupForm;

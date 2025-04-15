'use client'
import React, { useState } from "react";
import Select from "react-select";
import axios from "axios";
import Swal from "sweetalert2";
import { baseurl } from "./common/apiserve";


const Form = ({ setIsVisible }) => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setloading] = useState(false)
  const [otpsend, setOtpsend] = useState(false)

  const formSubmit = async (e) => {
    e.preventDefault();
    setloading(true)
    if (!name || !email || !phone || !selectedCourse || !message) {
      return
    }

    const response = await axios.post(`${baseurl}/sendquery`, { number: `+91${phone}`, });
    if (response.data.success) {
      setOtpsend(true)

    }

    else {
      Swal.fire({
        title: "Error!",
        text: response.data.message,
        icon: "error",
        confirmButtonText: "Retry",
      });
      setloading(false)
    }




  };

  return (
    <>{!otpsend &&
      <form className="space-y-4" onSubmit={formSubmit}>
        <select
          required
          className="w-full px-1 text-black py-3 border rounded shadow-sm  focus:outline-none"
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
        >
          <option value="">Select Course</option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="Web Designing">Web Designing</option>
          <option value="Python AI">Python AI</option>
          <option value="Full Stack Development">Full Stack Development</option>
          <option value="Graphics Designing">Graphics Designing</option>
          <option value="App Development">App Development</option>
          <option value="Stock Marketing">Stock Marketing</option>
        </select>

        <input type="text" value={name} required onChange={(e) => setName(e.target.value)} placeholder="Name" className="w-full p-2 border rounded outline-none" />

        <input type="email" value={email} required onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full p-2 border rounded outline-none" />

        <input type="tel" value={phone} required onChange={(e) => setPhone(e.target.value)} placeholder="Phone" className="w-full p-2 border rounded outline-none" />

        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message..." className="w-full p-2 border rounded outline-none" />

        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700" disable={loading}>
          {loading ? "Loading..." : "Enquire Now"}
        </button>
      </form>
    }
      {otpsend &&
        <Verifyotp number={phone} setIsVisible={setIsVisible} course={selectedCourse} name={name} email={email} message={message} />
      }
    </>
  );
};


const Verifyotp = ({ number, setIsVisible, name, email, message, course }) => {

  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    setOtp([...otp.map((d, i) => (i === index ? element.value : d))]);

    // Focus the next   automatically
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  const [loader, setLoader] = useState(false)
  const handelotp = async () => {
    const newopt = otp.join("")
    setLoader(true)
    const response = await axios.post(`${baseurl}/verifyotp`, { code: newopt, number: `+91${number}`, name, email, message, course })
    console.log(response.data)

   
    Swal.fire({
      title: "Success!",
      text: "Thank you, your query was successfully sent!",
      icon: "success",
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/";
      }
    });

    
    if (response.data.success) {
      setIsVisible(false)
      Swal.fire({
        title: "Success!",
        text: "Thankyou your query successfully sent!",
        icon: "success",
        confirmButtonText: "OK",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: response.data.message,
        icon: "error",
        confirmButtonText: "Retry",
      });
    }
    setLoader(false)

  }


  return (
    <div className="flex justify-center items-center p-10  bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4 text-center">Enter OTP</h2>
        <div className="flex space-x-2">
          {otp.map((data, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className="w-12 h-12 border rounded-md text-center text-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onFocus={(e) => e.target.select()} // Automatically highlight text on focus
            />
          ))}
        </div>
        {otp.join("").length != 6 ?
          <p className="text-gray-500 mt-4 text-center">
            OTP Entered: <span className="font-medium">{otp.join("")}</span>
          </p> :
          <p className="bg-green-500 text-white mt-4 text-center p-2 cursor-pointer" onClick={() => handelotp()} disable={loader}>

            {loader ? "Loading..." : "Verify Otp"}   </p>
        }
      </div>
    </div>
  );


}


export default Form;
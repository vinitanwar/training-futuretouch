

import React from 'react'



const page = (props) => {
  return(
   <>
     <section className="bg-gray-100 py-16 ppx-5 lg:x-20">
      <div className="container mx-auto bg-white p-5 lg:p-20">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 pb-3 lg:pb-0 text-center lg:border-r border-gray-300">
            <img
               src="/images/certificate.svg"
              alt="Certificate"
              className="p-2 lg:p-20 mx-auto"
            />
          </div>
 
          {/* Form Section */}
          <div className="w-full lg:w-1/2 px-6 lg:px-14 mt-6 lg:mt-0">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">Certificate Verification</h3>
              <p className="text-gray-600">Login to Verification Certificate Student</p>
            </div>
 
            <form
              
              method="post"
              id="myform"
              className="space-y-4"
              autoComplete="off"
              noValidate
            >
              <div className="form-group">
                <input
                  type="text"
                  name="urn"
                  id="urn"
                  placeholder="Enter Student Urn ID"
                  className="w-full px-4 py-2 border border-gray-300 rounded outline-none"
                  data-message-required="Please Enter Student Urn Id"
                  data-validate="required"
                />
              </div>
 
              <div className="form-group">
                <input
                  type="text"
                  name="code"
                  id="code"
                  placeholder="Enter Certificate Serial No"
                  className="w-full px-4 py-2 border border-gray-300 rounded outline-none"
                  data-message-required="Please Enter Student Certificate Serial No"
                  data-validate="required"
                />
              </div>
 
              <input type="hidden" name="Submit" value="urn_verify" />
 
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
   </>
   )

 }

 export default page;
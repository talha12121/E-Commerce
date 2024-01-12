import React from "react";
import svg1 from "../../assests/oladoc-care-img-online-2.svg";
import svg2 from "../../assests/oladoc-care-img-online-4.svg";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import screen1 from "../../assests/Screenshot_1.png";
import screen2 from "../../assests/Screenshot_2.png";
import screen3 from "../../assests/Screenshot_3.png";
import book from "../../assests/book.png";
import search from "../../assests/search.png";
import check from "../../assests/check.png";
import docImage from "../../assests/doctorImage.png";

function MiddleSection() {
  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex justify-center gap-3 mt-4">
        <div className="flex gap-2 border rounded max-md:!block">
          <div className="bg-[#fff3e8] w-[50%] d-flex justify-center items-center max-md:!w-[100%] max-md:h-[50%]">
            <img src={svg1} alt="" />
          </div>
          <div>
            <p className="font-bold !mb-0 mt-2 max-md:text-sm ">Doc Care</p>
            <p className="max-md:text-sm">
              Instant Video Consultation with Top Doctors
            </p>
            <p
              onClick={() => navigate("/dashboard")}
              className="bg-[#ff9e15] px-2 py-1 text-white w-40 rounded max-md:w-[100%] max-md:text-center cursor-pointer"
            >
              Start Consulting{" "}
            </p>
          </div>
        </div>
        <div className="flex gap-2 border rounded max-md:!block">
          <div className="bg-[#e8f1ff] w-[50%] d-flex justify-center items-center max-md:!w-[100%] max-md:h-[50%]">
            <img src={svg2} alt="" />
          </div>
          <div>
            <p className="font-bold !mb-0 mt-2 max-md:text-sm">
              Doctors Online Now
            </p>
            <p className="max-md:text-sm">
              Instant Video Consultation with Top Doctors
            </p>
            <p
              onClick={() => navigate("/dashboard")}
              className="bg-[#000066] px-2 py-1 text-white w-40 rounded max-md:w-[100%] max-md:text-center cursor-pointer "
            >
               Book Appointment
            </p>
          </div>
        </div>
      </div>
      {/* ///////////////////////////// */}
      <div className="container">
        <h2 className="d-flex justify-center mt-5 ">
          Find doctors by health concern
        </h2>
        <div className="row justify-center gap-x-8  mt-4 m-0 max-md:gapx-3">
            <div className="col-3 col-md-1  mb-3">
                <div>
                <div className="rounded-full w-[56px] cursor-pointer h-[56px] flex justify-center items-center  p-2 bg-[#333385] text-white">
              <FaEye />
            </div>
                    <span>Gynecologist</span>
                </div>
            </div>
            <div className="col-3 col-md-1  mb-3">
                <div >
                <div className="rounded-full w-[56px] cursor-pointer h-[56px] flex justify-center items-center  p-2 bg-[#333385] text-white">
              <FaEye />
            </div>
                    <span>Skin Specialist</span>
                </div>
            </div>
            <div className="col-3 col-md-1 mb-3">
                <div >
                <div className="rounded-full w-[56px] cursor-pointer h-[56px] flex justify-center items-center  p-2 bg-[#333385] text-white">
              <FaEye />
            </div>
                    <span>Child Specialist</span>
                </div>
            </div>
            <div className="col-3 col-md-1  mb-3">
               <div>
                <div className="rounded-full w-[56px] cursor-pointer h-[56px] flex justify-center items-center  p-2 bg-[#333385] text-white">
              <FaEye />
            </div>
                    <span>Orthopedic Surgeon</span>
                </div>
            </div>
            <div className="col-3 col-md-1  mb-3">
                <div className="rounded-full w-[56px] cursor-pointer h-[56px] flex justify-center items-center  p-2 bg-[#333385] text-white">
              <FaEye />
            </div>
                    <span className="text-center w-[100%]">ENT Specialist</span>
            </div>
            <div className="col-3 col-md-1  mb-3">
                
                <div className="rounded-full w-[56px] cursor-pointer h-[56px] flex justify-center items-center  p-2 bg-[#333385] text-white">
              <FaEye />
            </div>
                    <span>Diagnostics</span>
            </div>
            <div className="col-3 col-md-1  mb-3">
                
                <div className="rounded-full w-[56px] cursor-pointer h-[56px] flex justify-center items-center  p-2 bg-[#333385] text-white">
              <FaEye />
            </div>
                    <span>Diabetes specialist</span>
                </div>
            
            <div className="col-3 col-md-1  mb-3">
                
                <div className="rounded-full w-[56px] cursor-pointer h-[56px] flex justify-center items-center  p-2 bg-[#333385] text-white">
              <FaEye />
            </div>
                    <span>Eye Specialist</span>
                
            </div>
            
        </div>
      </div>

      {/* ///////////////////////////////////////// */}

      <div className="bg-[#f5f5f5] text-center py-4 py-md-5 mt-5">
        <div className="container">
            <h2 className="h4 mb-4 pb-2 font-light">Looking for more?</h2>
            <div className="row m-0 pt-1">
                <div className="col-4">
                    <div className="flex justify-center mb-2">
                    <img src={screen1} alt=""  />

                    </div>
                    <span>Book Medical Tests</span>
                </div>
                <div  className="col-4 text-body">
                    <div className="flex justify-center mb-2">
                        <img src={screen3} alt=""  />
                            
                        
                    </div>
                    <span>Read Health Articles</span>
                </div>
                <div  className="col-4 text-body">
                    <div className="flex justify-center mb-2">
                        <img src={screen2} alt=""  />
                            
                        
                    </div>
                    <span>Ask a Question</span>
                </div>
            </div>
        </div>
    </div>

    {/* /////////////////////////////////////////// */}
    <div className=" py-4 md:py-5">
        <div className="container">
            <h2 className="h4 text-center mb-4">Book appointments in 3 easy steps</h2>
            <div className="row md:pt-4 items-center justify-center  mx-0 md:mx-row px-2 md:px-0">
                <div className="col-12 col-md-5 pb-4 order-md-2 max-md:order-1">
                    <ul className="list-unstyled">
                        <li className="flex items-center mb-10">
                            <img src={search} width="50px" height="50px"  />
                            <span>
                                <span className=" font-bold">Search</span> for doctors by specialty, hospital, service or disease
                            </span>
                        </li>
                        <li className="flex items-center mb-10">
                            <img src={check} width="50px" height="50px" />
                                
                            
                            <span>
                                <span className=" font-bold">Select</span> based on Experience, Fee or Rating
                            </span>
                        </li>
                        <li className="flex items-center mb-10">
                            <img src={book} width="50px" height="50px" />
                                
                            
                            <span>
                                <span className=" font-bold">Book</span> a Confirmed Appointment within Seconds
                            </span>
                        </li>
                    </ul>
                    <div className="text-center p-2.5 w-[45%] max-md:w-[100%] cursor-pointer bg-[#006]"><a href="/dashboard" className="font-light text-white  md:mt-2 no-underline">Find a doctor</a></div>
                </div>
                <div className="col-12 col-md-5 order-md-1">
                    <div className="mx-auto mb-3 md:mb-2">
                        <img className="max-md:hidden transform scale-x-[-1]" src={docImage} />
                        
                       
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default MiddleSection;

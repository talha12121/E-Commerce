import React from "react";
import svg1 from "../../assests/oladoc-care-img-online-2.svg";
import svg2 from "../../assests/oladoc-care-img-online-4.svg";
import { useNavigate } from "react-router-dom"; 
import { FaEye } from "react-icons/fa";
function MiddleSection() {
    const navigate = useNavigate()
  return (
    <>
      <div className="d-flex justify-center gap-3 mt-4">
        <div className="flex gap-2 border rounded max-md:!block">
          <div className="bg-[#fff3e8] w-[50%] d-flex justify-center items-center max-md:!w-[100%] max-md:h-[50%]">
            <img src={svg1} alt="" />
          </div>
          <div>
            <p className="font-bold !mb-0 mt-2 max-md:text-sm ">Doc Care</p>
            <p  className="max-md:text-sm">Instant Video Consultation with Top Doctors</p>
             <p onClick={()=>navigate("/dashboard")}  className="bg-[#ff9e15] px-2 py-1 text-white w-40 rounded max-md:w-[100%] max-md:text-center cursor-pointer">Start Consulting </p>
          </div>

        </div>
        <div className="flex gap-2 border rounded max-md:!block">
          <div className="bg-[#e8f1ff] w-[50%] d-flex justify-center items-center max-md:!w-[100%] max-md:h-[50%]">
            <img src={svg2} alt="" />
          </div>
          <div>
            <p className="font-bold !mb-0 mt-2 max-md:text-sm">Doctors Online Now</p>
            <p className="max-md:text-sm">Instant Video Consultation with Top Doctors</p>
             <p onClick={()=>navigate("/dashboard")} className="bg-[#000066] px-2 py-1 text-white w-40 rounded max-md:w-[100%] max-md:text-center cursor-pointer ">Book Appointment </p>
          </div>

        </div>
        
      </div>
 {/* ///////////////////////////// */}
      <div className="container">
       <h2 className="d-flex justify-center mt-5 ">Find doctors by health concern</h2>
     <div className=" flex justify-center  max-md:grid grid-cols-4 gap-4">
         <div >
            <div className="rounded-full p-3 bg-[#333385] text-white"><FaEye/></div>
            
            </div>
         <div>
            <div className="rounded-full p-3 bg-[#333385] text-white"><FaEye /></div>
            
            </div>
         <div>
            <div className="rounded-full p-3 bg-[#333385] text-white"><FaEye/></div>
               
            </div>
         <div>
            <div className="rounded-full p-3 bg-[#333385] text-white"><FaEye/></div>
            </div>
         <div>
            <div className="rounded-full p-3 bg-[#333385] text-white"><FaEye/></div>
            </div>
         <div>
            <div className="rounded-full p-3 bg-[#333385] text-white"><FaEye/></div>
            </div>
         <div>
            <div className="rounded-full p-3 bg-[#333385] text-white"><FaEye/></div>
            </div>
         <div>
            <div className="rounded-full p-3 bg-[#333385] text-white"><FaEye/></div>
            </div>
        
     </div>
      </div>
    </>
  );
} 

export default MiddleSection;

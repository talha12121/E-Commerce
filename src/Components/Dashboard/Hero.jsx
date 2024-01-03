import React from "react";
import image from "../../assests/header-bg.jpg";

function Hero() {
  return (
    <>
      <div
        className="bg-cover bg-center h-96  flex items-center justify-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="text-white text-center">
          <h1 className="text-3xl mb-4 ">
            Find and book the{" "}
            <span className="text-orange-500 font-bold">best doctors</span> near
            you
          </h1>
          <p className="text-lg"> All doctors treat, but a good doctor lets nature heal.</p>
          <div className="absolute w-80  top-28 right-3">
            <div className="h-96 bg-no-repeat relative max-lg:!bg-none"
              style={{
                backgroundImage:
                  "url(https://pngimg.com/d/doctor_PNG16009.png)",
              }}
            >
              
            </div>
          </div>
          <div className="d-flex justify-center mt-12 ">
            <p className="text-lg bg-[rgba(43,47,136,0.7)]  w-40 p-2">
              2500+ Doctors
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

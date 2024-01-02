import React from "react";
import Logo from "../../assests/docLogo.png"
import DropDown from "./Dropdown";
export default function Header() {
 
  return (
    <>
      <div className=" d-flex justify-between items-center pt-1 pl-2 pb-1 pr-3 shadow-md">
        <div className="d-flex items-center ">
          <img src={Logo} alt="" className="mix-blend-color-burn w-14"/>
          <span className="font-bold font-sans" style={{color:"#004a4a"}}>DocFind</span>
        </div>
        
        <div >
          <DropDown/>
        </div>
        
      </div>
    </>
  );
}

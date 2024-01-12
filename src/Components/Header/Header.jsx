import React ,{useContext, useEffect, useState} from "react";
import Logo from "../../assests/docLogo.png"
import DropDown from "./Dropdown";

export default function Header() {
  
return (
    <>
      <div className="shadow-xl flex justify-between items-center pt-1 pl-2 pb-1 pr-3 shadow-md">
        <a href="/home" className="d-flex items-center no-underline">
          <img  src={Logo} alt="" className=" w-14"/>
          <span className="font-bold font-sans" style={{color:"#004a4a"}}>DocFind</span>
        </a>
        
        <div className="flex items-center justify-end">
          <DropDown/> 
          
        </div>
        
      </div>
    </>
  );
}

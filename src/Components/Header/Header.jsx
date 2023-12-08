import React from "react";
import Logo from "../../assests/docLogo.png"
import "./Header.css";
import { Link } from "react-router-dom";
import DropDown from "./Dropdown";
import Dashboard from "../Dashboard/Dashboard";
export default function Header({links , text ,onClick}) {
  
  
  return (
    <>
   
      <div className="header">
        <div className="header_logo">
          <img src={Logo} alt="" style={{mixBlendMode:"color-burn"}} width={"100px"} />
          <span style={{fontWeight:"bold" , fontFamily:"sans-serif" , color:"#004a4a"}}>DocFind</span>
        </div>
        
        <div className="signup_btn">
        <Link to={links} className="signup_btn_link"><button onClick={onClick} >{text}</button></Link>
          <DropDown/>
        </div>
        
      </div>
    </>
  );
}

import React from "react";
import Logo from "../../assests/docLogo.png"
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header({links , text}) {

  return (
    <>
      <div className="header">
        <div className="header_logo">
          <img src={Logo} alt="" style={{mixBlendMode:"color-burn"}} width={"100px"} />
          <span style={{fontWeight:"bold" , fontFamily:"sans-serif" , color:"#004a4a"}}>DocFind</span>
        </div>
        
        <div className="signup_btn">
          <button ><Link to={links} className="signup_btn_link">{text}</Link></button>
        </div>
        
      </div>
    </>
  );
}

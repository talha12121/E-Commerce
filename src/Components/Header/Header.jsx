import React from "react";
import Logo from "../../assests/logo.png"
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header({links , text}) {

  return (
    <>
      <div className="header">
        <div className="header_logo">
          <img src={Logo} alt="" width={"100px"} />
        </div>
        <div className="signup_btn">
          <button ><Link to={links} className="signup_btn_link">{text}</Link></button>
        </div>
        
      </div>
    </>
  );
}

import React, { useEffect, useState } from "react";
import Logo from "../../assests/logo.png"
import "./Home.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Homeheader({ links, text }) {
  const [category, setCategory] = useState([])

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setCategory(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className="header">
        <div className="header_logo">
          <img src={Logo} alt="" width={"100px"} />
        </div>
        <div>
          <ul className="categoryList">
            {category.map((elem, index) => (
              <Link><li key={index}>{elem}</li></Link>
            ))}
          </ul>
        </div>
        <div className="signup_btn">
          <button><Link to={links} className="signup_btn_link">{text}</Link></button>
        </div>
      </div>
    </>
  );
}

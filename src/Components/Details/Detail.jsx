import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Loader from "../Loader/Loader";
import "../Home/Home.css";

export default function Detail() {
  const [single, setSingle] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setSingle(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [productId]);

  if (!single) {
    return <Loader />;
  }

  return (
    <>
      <div className="mainDiv">
        <div>
          <img
            src={single.image}
            className="singleProductImage"
            alt="product_image"
          />
        </div>
        {/* <div className="descriptionBox"> 
      <p>{single.title}</p>
        </div> */}
      </div>
    </>
  );
}

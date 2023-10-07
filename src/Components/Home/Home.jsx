import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import Loader from "../Loader/Loader";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Homeheader from "./Homeheader";
import { Link } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
       
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []); 

  return (
    <>
      <Homeheader text="cart" />
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          <h2 className="text-center mb-4">All Products</h2>
          <div className="row">
            {products.map((product) => (
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={product.id}>
                <Link to={`/product/${product.id}`}>
                <Card>
                  <Card.Img variant="top"style={{width:"40%" , height:"184px"}} src={product.image} />
                  <Card.Body>
                    <Card.Title style={{fontSize:"15px"}}>{product.title}</Card.Title>
                    <Card.Title style={{fontSize:"15px"}}>Price = <span style={{color:"green"}}>${product.price}</span></Card.Title>
                    {/* <Button variant="primary">View Details</Button> */}
                  </Card.Body>
                </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

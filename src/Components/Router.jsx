import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import Home from "./Home/Home";
import Detail from "./Details/Detail";


export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      <Route path="/product/:productId" element={<Detail/>} />
       
      </Routes>
    </BrowserRouter>
  );
}

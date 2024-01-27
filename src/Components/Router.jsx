import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import UserDetail from "./Dashboard/UserDetail";
import Home from "./Dashboard/Home";
import Profile from "./Header/Profile";


export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/details/:id" element={<UserDetail />} />
     
       
      </Routes>
    </BrowserRouter>
  );
}

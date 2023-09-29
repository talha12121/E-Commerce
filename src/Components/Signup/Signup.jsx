import React from "react";
import Logo from "../../assests/logo.png";
import "../Header/Header.css";
import { Link } from "react-router-dom";
import "./Signup.css";
import { useState } from "react";
import Swal from "sweetalert2";
import { auth, database } from "../../config.jsx";
import { getDatabase, ref, set } from "firebase/database";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
const SignupForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const db = getDatabase();
const navigate  = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        set(ref(db, "users/" + user.uid), {
          uid: user.uid,
          name: data.name,
          email: data.email,
        }).then(() => {
          Swal.fire({
            icon: "success",
            title: "Good job!",
            text: "Signup Successful",
          });
        });
        navigate("/login")
      }) .catch((error) => {
        if( data.email.length === 0 || data.password.length === 0){
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Fields Cant be Empty",
          });
        }else{
          console.log(data.email.length)
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Email already exist",
          });

        }
        
      });
  };

  return (
    <>
      <Header links={"/login"} text = {"Login"}/>

      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Signup</h2>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              onChange={(e) => setData({ ...data, name: e.target.value })}
              
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              onChange={(e) => setData({ ...data, email: e.target.value })}
              
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => setData({ ...data, password: e.target.value })}
              
            />
          </div>
          <button type="submit">Signup</button>
          <div className="not_account">
            <p>
              Have an account <Link to="/login">Login </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignupForm;

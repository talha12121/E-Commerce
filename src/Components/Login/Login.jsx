import React from "react";
import Header from "../Header/Header";
import "./Login.css";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";
import { getDatabase, ref, child, get } from "firebase/database";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate  = useNavigate()

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.email, data.password)
     .then((userCredential) => {

        const user = userCredential.user;
        console.log("done");
        Swal.fire({
          icon: "success",
          title: "Good job!",
          text: "Login Successful",
        });
        navigate("/dashboard")
        
     
      })
      .catch((error) => {
        if( data.email.length === 0 || data.password.length === 0){
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Fields Cant be Empty",
          });
        }else{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Incorrect Email or Password",
        });
      }
      });
  };

  return (
    <>
      <Header links={"/signup"} text={"Sign Up"}/>

      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="form-group">
            <label>Email</label>
            <input
              type={"email"}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type={"password"}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              
            />
          </div>
          <button type="submit">Login</button>
          <div className="not_account">
            <p>
              Dont have an account <Link to="/signup">Create an account</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;

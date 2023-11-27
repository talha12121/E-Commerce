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
    gender: "",
    age:"",
    experience:"",
    file:""
  });
  const db = getDatabase();
  const navigate = useNavigate();

  const handleSubmit = (e ) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
       
        set(ref(db, "users/" + user.uid), {
          uid: user.uid,
          name: data.name,
          email: data.email,
          gender: data.gender,
          role:activeTab,
          age:data.age ? data.age : "",
          experience: data.experience ? data.experience : "",
        }).then(() => {
          Swal.fire({
            icon: "success",
            title: "Good job!",
            text: "Signup Successful",
          });
          
          
        });
        navigate("/login");
      })
      .catch((error) => {
        console.log(error)
        if (data.email.length === 0 || data.password.length === 0) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Fields Cant be Empty",
          });
        } else {
          console.log(data.email.length);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Email already exist",
          });
        }
      });
      
  };
  const [activeTab , setActiveTab] = useState("doctor")
  const changeStatus = (tab) => {
    setActiveTab(tab);
    
  };
  


  return (
    <>
    <Header links={"/login"} text={"Login"} />
    <div  className=" customTabs">
      <div onClick={() => changeStatus("patient")}>Patient</div>
      <div onClick={() => changeStatus("doctor")}>Doctor</div>
    </div>

    {activeTab === "doctor" ? (
      <div className="login-form-container" style={{marginTop:"100px"}}>
      <form className="login-form" onSubmit={handleSubmit}>

        <h2>Signup For Doctor</h2>
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
            onChange={(e) =>
              setData({ ...data, password: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select
            onChange={(e) => setData({ ...data, gender: e.target.value })}
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="form-group">
      <label>Experience</label>
      <input
        type="text"
        onChange={(e) => setData({ ...data, experience: e.target.value })}
        
      />
    </div>
        {/* <div className="form-group">
      <label>Upload Image</label>
      <input
        type="file"
        onChange={(e) => setData({ ...data, file: e.target.value })}
        
      />
    </div> */}
        <button type="submit">Signup</button>
        <div className="not_account">
          <p>
            Have an account <Link to="/login">Login </Link>
          </p>
        </div>
      </form>
    </div>
    ) : (
      <div className="login-form-container" style={{ marginTop: "100px" }}>
            <form className="login-form" onSubmit={handleSubmit}>
              <h2>Signup For Patient</h2>
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
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Gender</label>
                <select
                  onChange={(e) => setData({ ...data, gender: e.target.value })}
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="form-group">
                <label>Age</label>
                <input
                  type="number"
                  onChange={(e) => setData({ ...data, age: e.target.value })}
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
    )}
      

      
    </>
  );
};

export default SignupForm;

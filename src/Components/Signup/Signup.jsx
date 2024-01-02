import React from "react";
import Logo from "../../assests/logo.png";
import { Link } from "react-router-dom";
import "./Signup.css";
import { useState } from "react";
import Swal from "sweetalert2";
import { auth, storage } from "../../config.jsx";
import { getDatabase, ref, set } from "firebase/database";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  uploadBytesResumable,
  getDownloadURL,
  ref as ss,
} from "firebase/storage";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Loader from "../Loader/Loader.jsx";

const SignupForm = () => {
  const [uploadingImage, setUploadingImage] = useState(false);
  const [activeTab, setActiveTab] = useState("doctor");
  const [loading, setLoading] = useState(false)

  let sleep = () => new Promise((r) => setTimeout(r, 2000))

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    age: "",
    experience: "",
    image: "",
  });
  const db = getDatabase();
  const navigate = useNavigate();
  
  const changeStatus = (tab) => {
    setActiveTab(tab);
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    setData({ ...data, image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    await sleep()
    setLoading(false)
    if (!data.image) {
      alert("Please select an image");
      return;
    }

    if (data.image.type !== "image/jpeg" && data.image.type !== "image/png") {
      alert("Select only PNG, JPEG, or JPG");
      return;
    }

    setUploadingImage(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
        
      );
      const user = userCredential.user;
      
      const storageRef = ss(storage, `users/${user.uid}`);
      const uploadTask = uploadBytesResumable(storageRef, data.image);

      uploadTask.on(
        "state_changed",
        null,
        (error) => {
          console.error("Error uploading image:", error.message);
          alert("Error uploading image. Please try again.");
          setUploadingImage(false);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            set(ref(db, "users/" + user.uid), {
              uid: user.uid,
              name: data.name,
              email: data.email,
              gender: data.gender,
              role: activeTab,
              age: data.age ? data.age : "",
              experience: data.experience ? data.experience : "",
              image: downloadURL,
            }).then(() => {
              Swal.fire({
                icon: "success",
                title: "Good job!",
                text: "Signup Successful",
              });

              navigate("/login");
            });
            setUploadingImage(false);
          });
        }
      );
    } catch (error) {
      console.error("Error during image upload:", error.message);
      alert("Error during image upload. Please try again.");
      setUploadingImage(false);
    }
  };

  
  return (
    <>
      <Header links={"/login"} text={"Login"} />
      <div className="customTabs">
        <div onClick={() => changeStatus("patient")}>Patient</div>
        <div onClick={() => changeStatus("doctor")}>Doctor</div>
      </div>

      {activeTab === "doctor" ? (
        <div className="login-form-container" style={{ marginTop: "140px" }}>
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
                onChange={(e) => setData({ ...data, password: e.target.value })}
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
                onChange={(e) =>
                  setData({ ...data, experience: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Upload Image</label>
              <input type="file" onChange={handleChange} />
            </div>
            <button type="submit">{loading ? <Loader width='30px' height='50px' color="#ffffff" /> : "SignUp"  } </button>
            <div className="not_account">
              <p>
                Have an account <Link to="/login">Login </Link>
              </p>
            </div>
          </form>
        </div>
      ) : (
        <div className="login-form-container" style={{ marginTop: "140px" }}>
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
                onChange={(e) => setData({ ...data, password: e.target.value })}
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
            <div className="form-group">
              <label>Upload Image</label>
              <input type="file" onChange={handleChange} />
            </div>
            <button type="submit">{loading ? <Loader width='30px' height='50px' color="#ffffff"  /> : "SignUp"  } </button>
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

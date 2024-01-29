import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import { auth, storage } from "../../config.jsx";
import { getDatabase, ref, set } from "firebase/database";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { uploadBytesResumable,getDownloadURL,ref as ss,} from "firebase/storage";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader.jsx";

const Form = ({ showInputText, role }) => {
  const [uploadingImage, setUploadingImage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    age: "",
    experience: "",
    image: "",
  });

  let sleep = () => new Promise((r) => setTimeout(r, 5000));
  const db = getDatabase();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const file = e.target.files[0];
    setData({ ...data, image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     if (!data.image || !data.name || !data.email || !data.password || !data.gender || data.age ? !data.age : !data.experience  ) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Inputs are valid",
          });
      return;
    }
     if (data.image.type !== "image/jpeg" && data.image.type !== "image/png") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Image Format Not Acceptable png/jpeg Allowed",
          });
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
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Error uploading image. Please try again",
          });
          setUploadingImage(false);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const userData = {
              uid: user.uid,
              name: data.name,
              email: data.email,
              gender: data.gender,
              role: role,
              age: data.age ? data.age : "",
              experience: data.experience ? data.experience : "",
              image: downloadURL,
            };

            set(ref(db, "users/" + user.uid), userData)
              .then(() => {
                Swal.fire({
                  icon: "success",
                  title: "Good job!",
                  text: "Signup Successful",
                });

                navigate("/login");
              })
              .catch((databaseError) => {
                console.error(
                  "Error storing user data in the database:",
                  databaseError.message
                );
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Error storing user data in the database. Please try again.",
                  });
               
                setUploadingImage(false);
              });
            console.log(userData);
          });
        }
      );

      setLoading(true);
      await sleep();
      setLoading(false);
    } catch (error) {
      console.error("Error during image upload:", error.message);
      alert("Error during image upload. Please try again.");
      setUploadingImage(false);
    }
  };

  return (
    <>
      <div
        className="flex justify-center items-center h-[70vh]"
        style={{ marginTop: "140px" }}
      >
        <form
          className="shadow-lg w-[500px] p-7 rounded-2xl"
          onSubmit={handleSubmit}
        >
          <h2 className="text-[#846464] font-[Times New Roman', Times, serif] text-center">
            Signup For <span className="capitalize">{role}</span>
          </h2>
          <div className="mb-3.5">
            <label className="text-[#333] mb-1 block">Name</label>
            <input
              className="w-[100%] p-2.5 rounded border bg-white"
              type="text"
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <div className="mb-3.5">
            <label className="text-[#333] mb-1 block">Email</label>
            <input
              className="w-[100%] p-2.5 rounded border bg-white"
              type="email"
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className="mb-3.5">
            <label className="text-[#333] mb-1 block">Password</label>
            <input
              className="w-[100%] p-2.5 rounded border bg-white"
              type="password"
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>
          <div className="mb-3.5">
            <label className="text-[#333] mb-1 block">Gender</label>
            <select
              className="w-[100%] p-2.5 rounded border bg-white"
              onChange={(e) => setData({ ...data, gender: e.target.value })}
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="mb-3.5">
            <label className="text-[#333] mb-1 block">{showInputText}</label>
            <input
              className="w-[100%] p-2.5 rounded border bg-white"
              type="text"
              onChange={(e) => {
                if (showInputText === "Age") {
                  setData({ ...data, age: e.target.value });
                } else if (showInputText === "Experience") {
                  setData({ ...data, experience: e.target.value });
                }
              }}
            />
          </div>

          <div className="mb-3.5">
            <label className="text-[#333] mb-1 block">Upload Image</label>
            <input
              className="w-[100%] p-2.5 rounded border bg-white"
              type="file"
              onChange={handleChange}
            />
          </div>
          <button
            className="w-[100%] p-2.5 border-none rounded bg-[#4caf50] text-[#fff] cursor-pointer"
            type="submit"
          >
            {loading ? (
              <Loader width="30px" height="50px" color="#ffffff" />
            ) : (
              "SignUp"
            )}{" "}
          </button>
          <div className="flex justify-center mt-1">
            <p>
              Have an account{" "}
              <Link className="no-underline" to="/login">
                Login{" "}
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;

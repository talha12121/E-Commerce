import React from "react";
import Header from "../Header/Header";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";


const LoginForm = () => {
  
  const navigate  = useNavigate()

  const [data, setData] = useState({
    email: "",
    password: "",
    
  });
  
  const [loading, setLoading] = useState(false)
  
  let sleep = () => new Promise((r) => setTimeout(r, 1000))
  const handleSubmit = async (e) => {
   
    e.preventDefault();
   localStorage.setItem("token" , Math.random())
    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.email, data.password)
     .then((userCredential) => {

        const user = userCredential.user;
        
        Swal.fire({
          icon: "success",
          title: "Good job!",
          text: "Login Successful",
        });
        navigate("/home")
        
     
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
      setLoading(true)
      await sleep()
      setLoading(false)
  };

  return (
    <>
      <Header links={"/signup"} text={"Sign Up"}/>

      <div className="flex justify-center items-center h-[70vh]">
        <form className="shadow-lg w-[500px] p-7 rounded-2xl" onSubmit={handleSubmit}>
          <h2 className="text-[#846464] font-[Times New Roman', Times, serif] text-center">Login</h2>
          <div className="mb-3.5">
            <label className="text-[#333] mb-1 block">Email</label>
            <input
            className="w-[100%] p-2.5 rounded border"
              type={"email"}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              
            />
          </div>
          <div className="mb-3.5">
            <label className="text-[#333] mb-1 block">Password</label>
            <input
            className="w-[100%] p-2.5 rounded border"
              type={"password"}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              
            />
          </div>
          <button 
          className="w-[100%] p-2.5 border-none rounded bg-[#4caf50] text-[#fff] cursor-pointer"
           type="submit">
            {loading ? <Loader width='30px' height='50px' color="#ffffff"  /> : "Login"  }
            </button>
          <div className="flex justify-center mt-1">
            <p>
              Dont have an account <Link className="no-underline" to="/signup">Create an account</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;

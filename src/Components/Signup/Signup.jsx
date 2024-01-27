import React , {useState} from "react";
import Header from "../Header/Header";
import Form from "./Form.jsx";

const SignupForm = () => {
  const [activeTab, setActiveTab] = useState("patient");

  const changeStatus = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Header />
      <div className="flex justify-center text-black gap-20 border-none p-3.5 cursor-pointer">
        <div
          className="bg-[#4caf50] rounded-2xl text-white py-1.5 px-4"
          onClick={() => changeStatus("patient")}>Patient</div>
        <div
          className="bg-[#4caf50] rounded-2xl text-white py-1.5 px-4"
          onClick={() => changeStatus("doctor")}>Doctor</div>
      </div>

      {activeTab === "doctor" ? (
        <Form showInputText={"Experience"} role="doctor" />
      ) : (
        <Form showInputText={"Age"} role="patient" />
      )}
    </>
  );
};

export default SignupForm;

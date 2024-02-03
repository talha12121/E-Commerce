import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import Header from "./Header";
import Loader from "../Loader/Loader";
import defaultLogo from "../../assests/default_img.png";
import Card from "react-bootstrap/Card";
import NoteContext from "../Context/NoteContext";

function Profile() {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const { userContext, setUserContext } = useContext(NoteContext);
  const navigate = useNavigate();
  useEffect(() => {
    const getToken = localStorage.getItem("token");
    if (getToken) {
      const getCurrentUserData = localStorage.getItem("currentUserData");
      const jsonCurrentUserData = JSON.parse(getCurrentUserData);
      // if(jsonCurrentUserData.role === "doctor"){

      // const appointmentKeys = Object.keys(userContext.appointments);
      // appointmentKeys.forEach(key => {
      //   const appointmentData = userContext.appointments[key];
      //   console.log(`Data for appointment ${key}:`, appointmentData);
      // });
      // }
      if (getCurrentUserData) {
        setUserData(jsonCurrentUserData);
      } else {
        console.error("Error parsing user data:");
      }
      setLoading(false);
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Header />
      {loading ? (
        <Loader width={80} height={80} color="#4fa94d" />
      ) : (
        <div className="container">
          <h2 className="text-center mt-4">Profile</h2>

          <div className="row">
            <div className="col-md-12">
              <Card className="!rounded-3xl mt-2 !shadow-xl overflow-hidden">
                <Card.Img
                  variant="top"
                  className="mr-auto ml-auto pt-2 sm:!w-52 h-52 lg:!w-52 md:!w-52"
                  src={
                    userData && userData.image ? userData.image : defaultLogo
                  }
                />

                <Card.Body>
                  <Card.Title className="!text-[15px]">
                    Name = {userData && userData.name ? userData.name : "NIL"}
                  </Card.Title>
                  <Card.Title className="!text-[15px]">
                    Email =
                    {userData && userData.email ? userData.email : "NIL"}
                  </Card.Title>
                  <Card.Title className="!text-[15px]">
                    Gender =
                    {userData && userData.gender ? userData.gender : "NIL"}
                  </Card.Title>
                  {userData.age && (
                    <Card.Title className="!text-[15px]">
                      Age =
                      {userData && userData.age
                        ? userData.age + " year"
                        : "NIL"}
                    </Card.Title>
                  )}
                  {userData.experience && (
                    <Card.Title className="!text-[15px]">
                      Experience =
                      {userData && userData.experience
                        ? userData.experience + " year"
                        : "NIL"}
                    </Card.Title>
                  )}
                   {/* <Card.Title className="!text-[15px]">
                     {userData.role === "doctor" ?   userContext ?"Appointment By =" + userContext.appointments.data.name:"Appointment By =" : ""}
                  </Card.Title>  */}
                 </Card.Body>
              </Card> 
              </div> 
              </div> 
              </div> 

      )}
    </>
  );
}

export default Profile;

import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getDatabase, ref, child, get } from "firebase/database";
import Loader from "../Loader/Loader";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import defaultLogo from "../../assests/default_img.png"
function UserDetail() {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [appoint, setAppoint] = useState(false);
 

  const getToken = localStorage.getItem("token")
  const id = useParams();
 const navigate = useNavigate()

  useEffect(() => {
    if(getToken){

    const fetchData = async () => {
      const dbRef = ref(getDatabase());
      try {
        const snapshot = await get(child(dbRef, `users/${id.id}`));
        if (snapshot.exists()) {
          setUserData(snapshot.val());
          console.log(snapshot.val());
          setLoading(false);
        
        } else {
          console.log("No data available");
          
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }else{
    navigate("/login")
  }
  }, [id.id]);
  const Logout = () => {
    const getToken = localStorage.getItem("token");
    const removeToken = () => {
      localStorage.removeItem("token");
    };
      if (getToken) {
      removeToken();
      navigate("/login");
    } else {
      console.log("Token not found");
    }
  };

  const appointment = ()=>{
   
  setAppoint(true)
  console.log(appoint)
  }
  return (
    <>
    <Header text={"Logout"} onClick={Logout}/>
      {loading ? (
        <Loader width={80} height={80} color="#4fa94d" />
      ) : (
        <div className="container">
      <h2 className="text-center mt-4">User Details </h2>

          <div className="row">
            <div className="col-md-12 ">
              <Card className="!rounded-3xl mt-2 !shadow-xl overflow-hidden">
                <Card.Img
                  variant="top"
                  className="mr-auto ml-auto pt-2 sm:!w-52 h-52 lg:!w-52 md:!w-52"
                  src={ userData.image? userData.image : defaultLogo} />
              
                <Card.Body>
                  <Card.Title className="!text-[15px]">
                    Name = {userData.name}
                  </Card.Title>
                  <Card.Title className="!text-[15px]">
                    Email = {userData.email}
                  </Card.Title>
                  <Card.Title className="!text-[15px]">
                    Gender = {userData.gender}
                  </Card.Title>
                  <Card.Title className="!text-[15px]">
                    Age = {userData.age ? userData.age + ' year'   : 'NIL'}
                  </Card.Title>
                  <Card.Title className="!text-[15px]">
                    Experience = {userData.experience ? userData.experience + " year" : 'NIL'}
                  </Card.Title>
                  
                </Card.Body>
                <div className="d-flex justify-center mb-3">
                  {userData.role == "doctor" ?
                     <Button className="border w-50 pt-2 pb-2 " onClick={appointment}>Book An Appointment</Button>
                   : ""}
                   </div>
              </Card>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UserDetail;

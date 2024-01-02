import React, { useEffect, useState } from 'react';
import { getDatabase, ref, child, get  } from 'firebase/database';
import { onAuthStateChanged } from 'firebase/auth';
import Loader from '../Loader/Loader';
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import { useNavigate } from "react-router-dom"; 
import {auth} from "../../config"
import defaultLogo from "../../assests/default_img.png"
import { useUserContext } from '../Redux/Context';

function Dashboard() {
  const [userData, setUserData] = useState([]);
  const [currentUserData, setCurrentUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { updateFilteredUsers } = useUserContext(); 

  const navigate = useNavigate()
  const getToken = localStorage.getItem("token")
 
  useEffect(() => {
    if(getToken){
      const fetchData = async () => {
        const dbRef = ref(getDatabase());
        try {
          const snapshot = await get(child(dbRef, 'users'));
  
          if (snapshot.exists()) {
            const allUsers = Object.values(snapshot.val());
            setUserData(allUsers);
            
            setLoading(false)
            
          } else {
            console.log('No data available');
          }
        } catch (error) {
          console.error(error);
        }
      };
      
      fetchData();
    }else{
      navigate("/login")
    }
  }, []); 


  const Logout = () => {
    console.log("x")
    // const getToken = localStorage.getItem("token");
    // const removeToken = () => {
    //   localStorage.removeItem("token");
    // };
    //   if (!getToken) {
    //   removeToken();
    //   navigate("/login");
    // } else {
    //   console.log("Token not found");
    // }
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const fetchData = async () => {
          const dbRef = ref(getDatabase());
          try {
            const snapshot = await get(child(dbRef, `users/${user.uid}`));
            if (snapshot.exists()) {
              const currentUser = snapshot.val();
              console.log(currentUser);
              setCurrentUserData(currentUser);
            } else {
              console.log('No data available');
            }
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }
     
    }, []);
  
    return () => unsubscribe(); 
  }, []);
  const filteredUsers = userData.filter((user) => user.uid == currentUserData.uid);
  const filteredDoctor = userData.filter((user) => user.role === "doctor");
  const filteredPatient = userData.filter((user) => user.role === "patient");

  return (
    <>
    <Header text={"Logout"} onClick={Logout}/>
    
    {loading ? (
      <Loader width={80} height={80} color="#4fa94d" />
      
    ) : (
      <div className="container">
      <h2 className="text-center mt-4">User:{currentUserData.name + " " + currentUserData.role}</h2>
      <div className="row">
        {filteredUsers.map((s) => s.role).join('') === "doctor"  ?
       filteredPatient.map((data, index) => (   
        <div  className="col-lg-4 col-md-6 col-sm-12 mb-4 cursor-pointer"  key={index}>
          <Card className='!no-underline'>
            <Link to={`/details/${data.uid}`}>
            <Card.Img variant="top"style={{width:"100%" , height:"184px" , objectFit:"contain"}} src={data.image? data.image : defaultLogo } />
            <Card.Body>
              <Card.Title className="!text-[15px] !text-black">Name = {data.name}</Card.Title>
              <Card.Title className="!text-[15px] !text-black">Email = {data.email}</Card.Title>
              <Card.Title className="!text-[15px] !text-black">Gender = {data.gender}</Card.Title>
              <Card.Title className="!text-[15px] !text-black">Role = {data.role}</Card.Title>
            </Card.Body>
          </Link>
          </Card>
        </div>
      )):
      filteredDoctor.map((data, index) => (
        <div  className="col-lg-4 col-md-6 col-sm-12 mb-4 cursor-pointer"  key={index}>
          <Card>
            <Link to={`/details/${data.uid}`} className='no-underline'>
            <Card.Img variant="top"style={{width:"100%" , height:"184px" , objectFit:"contain"}} src={data.image ? data.image :defaultLogo } />
            <Card.Body>
              <Card.Title className="!text-[15px] !text-black ">Name = {data.name}</Card.Title>
              <Card.Title className="!text-[15px] !text-black ">Email = {data.email}</Card.Title>
              <Card.Title className="!text-[15px] !text-black ">Gender = {data.gender}</Card.Title>
              <Card.Title className="!text-[15px] !text-black ">Role = {data.role}</Card.Title>
            </Card.Body>
          </Link>
          </Card>
        </div>
      ))
      }
      
     
          </div>
          </div>
        
        
     
    )}
  </>
  
  
  
  
  );
}

export default Dashboard;
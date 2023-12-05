import React, { useEffect, useState } from 'react';
import { getDatabase, ref, child, get } from 'firebase/database';
import Loader from '../Loader/Loader';
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import "./dashboard.css";
import { useNavigate } from "react-router-dom"; 
import { all } from 'axios';


function Dashboard() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  
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
  
  return (
    <>
    <Header text={"Logout"} onClick={Logout}/>
    {loading ? (
      <Loader />
    ) : (
      <div className="container">
      <h2 className="text-center mt-4">All Users</h2>
      <div className="row">
             {userData.map((data, index) => (
              <div  className="col-lg-4 col-md-6 col-sm-12 mb-4" style={{cursor:"pointer"}} key={index}>
                {/* Name: {data.name}, Email: {data.email}, Gender: {data.gender} */}
                <Card>
                  <Link to={`/details/${data.uid}`}>
                  <Card.Img variant="top"style={{width:"50%" , height:"184px"}} src={data.image?data.image :"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAk1BMVEX///8AESEAAADCxsj///3+/f8ADh8AABX8/PwAABMAEiAAAAsAABEAAA4DFCMAAAjY2t309fYABhsAABjp6uydoKRCRUoAABu1uLx1en7JzM5rcHONj5OqrbG+wMCWmZ5LTlMqLTUJDxZiZWwVGSUPEyNaXmI3OUEXGh8tMjY3OTve4uGChIdrbnceIStUVloADSTxrA1xAAAEKUlEQVR4nO2a7XaiMBBAkzHE8CGQABZR61eVdnHXvv/TbaJ2i2dVaA1h95zcX+0fvSczzEwGEbJYLBaLxWKxWCwWi8VisVgs+iGEfP7Zp8gFjMeDwaCoOEPI6VvmxGCxFHBku8uKnmWYwwjiWbn1XYqxhzGmweh1mXNEHNRbGGUC5SUk0qjGCA4FIqyvKDKUTv0hDi+lQhysZ5z0IqXCUy0BX4PCJkV9RJAREr8FV50k0SElPRyWg9LyphMOYcf7SHW+G+HQuyHleTDpQ2pxPZ/+AM/mneJXcV9K/EiNS01G950w9jOzRg6qAN/KpzMhjbjJRihTeNaQUcoKcrPdmY9F2CRF3Y3ZblNsaZPTMdWNloW53+yE6bAw2GoI2jenlGQ0N6akmN7uMDX8mVGpg9tGKtoblVoOW0lNjErt2kmZPamfURspwzk1ayeVGywJDsrblAS6NVmnHBT/alPRx2YrOj8kjU7haMJMShGUNcbPw2D2tixvfEAb5iks3ow6KRqfP+qa7XyKdNUwowcHblxKVoW7D6AY9bB/IWh6J9dDCpnMPNM4iG1uppV88vaEmJeS03d6Y7+hNhw/GXHMSx3FJiqvvHpt8NR/T+6ix9Uny8DHuH4DlJLvIItBP/sphUNQOg2AhheRe91zRIw2mDrH02DFBGCUCEGpEEOAl1msKn5/O88z/HmyG5erVTne7IseKuY11EPG0yquqpT/G9t9ghzFn//VFvsUuj4yXX45y/eV8qonNWOqZlb7vJ+nL822EMGkuHzz4ZxSP4JtZn5nhuZjcEP87tPd5ben2Y76FIcCxgZHFxkgggYlPJ3rkiwDwXQ2fx4MnuezqQswPE8PCZQDGVtmpNswwhfri2s7DSJXVqrEjYL62ip01wtupi3LRjyGd++zt3in9ued22Ct53gUxmn3j6GMBsrfGnewnwQ/Bqjr8q6cIGncLNZCOAR5Te46hFnSvO28QAznXc6gMggsb75aXUDVZDzvcJCRlXvutriu/yUmz6qzw2IoBvGlczojIO4u16tS4K8l1IfVuOpC6liXl622UteIluojtIeQIdb0Mu0esNAtdJKK/W8k+Qc0ivXnOiHO8guF/G9GS6eDobTVRvEOsrJrJy0btixNJKXuqY+hDL5VDD4JQfObUqbWUd8pmzU8sUp1dmb5UfMHM+r4+lZvtyH8MHwwepiGyUHvDyji+2u7llpaWyBBk4ejpwCtb7V4+aRD6qnUWdSLtYboyfitdS5ns2+PB5dEGksVa/fKuJlgqi9+fCX0hE+s9K2vYv/Bav6B58fapHLw9JyUp3FUyPRJ6ct0KaXDSYZPo1ShT0pfoeIbeHDCOyFgo3F5zPcvoIGXvUYnOfEff9v9GEXMdS60de0I5ef8A1t2i8VisVgsFovFYrFYLBaL5T/kNwtEOygqw6y1AAAAAElFTkSuQmCC"} />
                  <Card.Body>
                    <Card.Title style={{fontSize:"15px"}}>Name = {data.name}</Card.Title>
                    <Card.Title style={{fontSize:"15px"}}>Email = {data.email}</Card.Title>
                    <Card.Title style={{fontSize:"15px"}}>Gender = {data.gender}</Card.Title>
                    <Card.Title style={{fontSize:"15px"}}>Role = {data.role}</Card.Title>
                    {/* <Button variant="primary">View Details</Button> */}
                  </Card.Body>
                </Link>
                </Card>
              </div>
            ))}
          </div>
          </div>
        
        
     
    )}
  </>
  
  
  
  
  );
}

export default Dashboard;
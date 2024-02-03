import { useParams } from "react-router-dom";
import React, { useEffect, useState , useContext } from "react";
import { getDatabase, ref, child, get ,set , push} from "firebase/database";
import Loader from "../Loader/Loader";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import defaultLogo from "../../assests/default_img.png"
import NoteContext from "../Context/NoteContext";
function UserDetail() {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [appoint, setAppoint] = useState(false);
 const {userContext , setUserContext} = useContext(NoteContext)

  const getToken = localStorage.getItem("token")
  const id = useParams();
 const navigate = useNavigate()
 const getCurrentUSerData = localStorage.getItem("currentUserData")
  const JsonCurrentUSerData = JSON.parse(getCurrentUSerData)

  useEffect(() => {
    if(getToken){

    const fetchData = async () => {
      const dbRef = ref(getDatabase());
      try {
        const snapshot = await get(child(dbRef, `users/${id.id}`));
        if (snapshot.exists()) {
          setUserData(snapshot.val());
          console.log(snapshot.val());
          setUserContext(snapshot.val())
          console.log("userContext" , userContext)
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
  

  const appointment = () => {
    const db = getDatabase();
    const appointmentsRef = ref(db, `users/${id.id}/appointments`);
    const newAppointment = {
        data: JsonCurrentUSerData,
    };
    console.log("New Appointment Data:", newAppointment);
    const newAppointmentRef = push(appointmentsRef); // Generates a unique key
    const appointmentKey = newAppointmentRef.key; // Get the generated key
    const appointmentPath = `users/${id.id}/appointments/${appointmentKey}`;
    
    set(ref(db, appointmentPath), newAppointment)
        .then(() => {
            console.log("Appointment added successfully!");
            setAppoint(true);
        })
        .catch((error) => {
            console.error("Error adding appointment: ", error);
        });
};

  
  return (
    <>
    <Header />
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
              
            {/* </div>
          </div>
          {/* <div className="lg:p-4 !shadow-xl border border-zinc-200 rounded">
          
          <div className="row align-items-center p-2">
            <div className="col-md-2 self-start">
              
              <div className="row ">
                <div className="col-3 col-md-12 md:px-3">
                  <div className="relative">
                    <div className="relative border-0">
                     <img src={userData.image ? userData.image : defaultLogo} className="!rounded-full !border !border-zinc-700 w-[100px] h-[100px]" />
                     
                    </div>
                  </div>
                </div>
                <div className="col-9 pl-1  md:hidden">
                  <h2>
                    <div className="mb-1 mt-1">{userData.role === "doctor" ?"Dr. " + userData.name :userData.name} </div>
                    </h2>
                  <p className="mb-1">
                    General Physician, Family Physician, Hypertension
                    Specialist, Consultant Physician
                  </p>
                  <p className="mb-1 ">MBBS</p>
                </div>
              </div>
              <div className="doc-discription-columns text-area d-md-none">
                <div className="item">
                  <span className="od-wte">10 Years</span>
                  <span className="od-wte-text-muted">Experience</span>
                </div>
                <div className="item">
                  <span className="od-wte">
                    100%
                    <span className="d-inline-block font-normal">
                      (116)
                    </span>
                  </span>

                  <span className="d-patient-none od-wte-text-muted">
                    Satisfied
                  </span>
                  <span className="d-patient-none-2 od-wte-text-muted">
                    Satisfied
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-10 col-lg-7 pt-md-0 px-0 pl-md-2 pr-md-4 mb-md-2 pb-md-2 mx-2 mx-md-0 listing-card-info">
              <div className="d-none d-md-block text-area">
                <h2>
                  <div className="doctor-name mb-1 mt-2" style={{display:"flex" , alignItems:"center" ,fontWeight: 400}}>
                    {userData.role === "doctor" ?"Dr. " + userData.name :userData.name} 
                  </div>
                </h2>
                <p className="mb-1 doc-specialization">
                  General Physician, Family Physician, Hypertension
                  Specialist, Consultant Physician
                </p>
                <p className="mb-1  doc-degree">MBBS</p>
                <div className="doc-discription-columns">
                  <div className="item">
                    <span className="font-medium">{userData.experience} Years </span>
                    <span className="od-wte-text-muted">Experience</span>
                  </div>
                  <div className="item">
                    <div>
                      <span className="font-medium">
                        100%
                        <span className="inline-block">(116)</span>
                      </span>
                      <span className="od-wte-text-muted">
                        Satisfied Patients
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 lg:mb-2 lg:pb-2 btn-holder order-3 lg:order-2 ">
              <div className="row lg:pt-0">
              
                <div className="col-6 col-lg-12  mb-2">
                  <div className="border border-[#001766] text-[#001766] p-2 flex items-center flex-wrap justify-center" >
                    Video Consultation </div>
                </div>
               
                <div className="col-6 col-lg-12 mb-2 ">
                  
                    <div className="bg-[#ff9e15] text-white p-2 flex items-center flex-wrap justify-center">

                    Book Appointment
                    </div>
                  
                </div>
              </div>
            </div>
            
            <div
              className="col-12 pl-0 md:px-3 lg:py-2 lg:order-4"
             
            >
             
              <div >
                <div>
                  <div className="p-2 ">
                    <div className="flex text-[14px] font-medium items-center">
                    
                      <span className="block mb-1 font-medium">
                        Online Video Consultation (Online)
                      </span>
                      <span className="hidden ml-auto flex-shrink-0 pl-2">
                        Rs. 1,000
                      </span>
                    </div>
                    <div className="flex text-[11px]">
                      <div className="px-2  font-medium">
                        <div className="row items-center no-underline">
                          <span className="mr-2 "></span>
                          <span className="col pl-0  text-[14px] font-normal">
                            Available tomorrow
                          </span>
                        </div>
                      </div>
                      <div className="inline-flex flex-shrink-0 ml-auto text-[14px] font-medium">
                        <span className="doctor-fee">Rs. 1,000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      
        </div>
        </div>
        </div>
      )}
    </>
  );
}

export default UserDetail;

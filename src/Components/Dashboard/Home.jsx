import React, { useContext ,useEffect , useState } from "react";
import { getDatabase, ref, child, get  } from 'firebase/database';
import { onAuthStateChanged } from 'firebase/auth';
import Hero from "./Hero";
import {auth} from "../../config"

import MiddleSection from "./MiddleSection";
import Header from "../Header/Header";
import NoteContext from "../Context/NoteContext";

function Home() {

  const [currentUserData, setCurrentUserData] = useState([]);
  
 const {userContext , setUserContext} = useContext(NoteContext)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const fetchData = async () => {
          const dbRef = ref(getDatabase());
          try {
            const snapshot = await get(child(dbRef, `users/${user.uid}`));
            if (snapshot.exists()) {
              const currentUser = snapshot.val();
             
              setCurrentUserData(currentUser);
              setUserContext(currentUser)
              
             
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
  return (
    <>
      <Header />
       <Hero />
       <MiddleSection />
    </>
  );
}

export default Home;

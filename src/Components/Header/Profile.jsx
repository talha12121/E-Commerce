import React, { useState, useEffect, useContext } from 'react';
import Header from './Header';
import Loader from '../Loader/Loader';
import defaultLogo from '../../assests/default_img.png';
import Card from 'react-bootstrap/Card';


function Profile() {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);


  useEffect(() => {
    const getCurrentUserData = localStorage.getItem('currentUserData');
    if (getCurrentUserData) {
  
        const jsonCurrentUserData = JSON.parse(getCurrentUserData);
        setUserData(jsonCurrentUserData);
      } else {
        console.error('Error parsing user data:');
        
      }
      setLoading(false);
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
                  src={userData && userData.image ? userData.image : defaultLogo}
                />

                <Card.Body>
                  <Card.Title className="!text-[15px]">
                    Name = {userData && userData.name ? userData.name : 'NIL'}
                  </Card.Title>
                  <Card.Title className="!text-[15px]">
                    Email = {userData && userData.email ? userData.email : 'NIL'}
                  </Card.Title>
                  <Card.Title className="!text-[15px]">
                    Gender = {userData && userData.gender ? userData.gender : 'NIL'}
                  </Card.Title>
                  <Card.Title className="!text-[15px]">
                    Age = {userData && userData.age ? userData.age + ' year' : 'NIL'}
                  </Card.Title>
                  <Card.Title className="!text-[15px]">
                    Experience =
                    {userData && userData.experience
                      ? userData.experience + ' year'
                      : 'NIL'}
                  </Card.Title>
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

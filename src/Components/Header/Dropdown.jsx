import React, { useContext } from 'react';
import { Dropdown, Space } from 'antd';
import defaultImage from "../../assests/default_img.png"
// import NoteContext from '../Context/NoteContext';
import { Link, useNavigate } from "react-router-dom";




const DropDown = () => {
  const navigate = useNavigate()
  // const { userContext } = useContext(NoteContext);
  const getToken = localStorage.getItem("token")
  // console.log(userContext)
  const getCurrentUSerData = localStorage.getItem("currentUserData")
  const JsonCurrentUSerData = JSON.parse(getCurrentUSerData)
  
  const Logout = () => {
    localStorage.removeItem("currentUserData")
    if (getToken) {
      localStorage.removeItem("token")
      setTimeout(()=>{
        navigate("/login")

      },1000)
    }
  }

  const items = [
    {
      label: <Link className="no-underline" to="/profile">Profile</Link>,
      key: '0',
    },
    {
      label: <Link className="no-underline" to="/login">Login</Link>,
      key: '1',
    },
    {
      label: <Link className="no-underline" to="/signup">Sign up</Link>,
      key: '2',
    },
    {
      label: <a className="no-underline" onClick={Logout}>Logout</a>,
      key: '3',
    },
  ];



  return (
    <Dropdown
      className="!w-[25%]"
      menu={{
        items,
      }}
      trigger={['click']}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space className="cursor-pointer" >
          {getToken && JsonCurrentUSerData ?
            <img className='w-[165px] h-[45px] rounded-full' style={{ border: '2px solid grey' }} src={JsonCurrentUSerData.image} alt="" />
            :
            <img className='w-[165px] h-[45px] rounded-full' style={{ border: '2px solid grey' }} src={defaultImage} alt="" />
          }
        </Space>
      </a>
    </Dropdown>
  )
}

export default DropDown;

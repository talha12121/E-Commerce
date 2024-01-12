import React, { useContext } from 'react';
import { Dropdown, Space } from 'antd';
import defaultImage from "../../assests/default_img.png"
import NoteContext from '../Context/NoteContext';
import { useNavigate } from "react-router-dom";



const DropDown = () => {
  const navigate = useNavigate()
  const { userContext } = useContext(NoteContext);
  const getToken = localStorage.getItem("token")
  console.log(userContext)

  const Logout = () => {
    if (getToken) {
      localStorage.removeItem("token")
      setTimeout(()=>{
        navigate("/login")

      },1000)
    }
  }

  const items = [
    {
      label: <a className="no-underline" href="">Profile</a>,
      key: '0',
    },
    {
      label: <a className="no-underline" href="/login">Login</a>,
      key: '1',
    },
    {
      label: <a className="no-underline" href="/signup">Sign up</a>,
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
          {getToken && userContext ?
            <img className='w-[165px] h-[45px] rounded-full' style={{ border: '2px solid grey' }} src={userContext.image} alt="" />
            :
            <img className='w-[165px] h-[45px] rounded-full' style={{ border: '2px solid grey' }} src={defaultImage} alt="" />
          }
        </Space>
      </a>
    </Dropdown>
  )
}

export default DropDown;

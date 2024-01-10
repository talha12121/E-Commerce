import React, { useContext } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import defaultLogo from "../../assests/default_img.png"
import { FaUser } from "react-icons/fa6";
import NoteContext from '../Context/NoteContext';
const items = [
  {
    label: <a className="no-underline" href="">Profile</a>,
    key: '0',
  },
  {
    label: <a className="no-underline" href="">Logout</a>,
    key: '1',
  },
  {
    label: <a className="no-underline" href="/signup">Sign up</a>,
    key: '2',
  },
  {
    label: <a className="no-underline" href="/login">Login</a>,
    key: '3',
  },
 
];

const DropDown = () => {
  const { userContext } = useContext(NoteContext);
  const getToken = localStorage.getItem("token")

  console.log(userContext)
    return(

        <Dropdown
        className="!w-[25%]"
        menu={{
            items,
            
        }}

        trigger={['click']}
        >
    <a  onClick={(e) => e.preventDefault()}>
      <Space className="cursor-pointer " >
        {getToken && userContext?
         <img className='w-[100px] h-[40px]  rounded-full border-gray-700' src={userContext.image} alt="" />
        :
      <FaUser color='black' size={20} className='cursor-pointer' />
}

    
      </Space>
    </a>
  </Dropdown>
      )
}
export default DropDown;
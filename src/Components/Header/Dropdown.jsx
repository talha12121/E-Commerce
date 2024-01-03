import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import defaultLogo from "../../assests/default_img.png"
import { useUserContext } from '../Redux/Context';
import { FaUser } from "react-icons/fa6";
const items = [
  {
    label: <a href="">Profile</a>,
    key: '0',
  },
  {
    label: <a href="">Logout</a>,
    key: '1',
  },
  {
    label: <a href="/signup">Sign up</a>,
    key: '2',
  },
  {
    label: <a href="/login">Login</a>,
    key: '3',
  },
 
];

const DropDown = () => {
    const { filteredUsers } = useUserContext();
console.log(filteredUsers)
    return(

        <Dropdown
        menu={{
            items,
        }}
        trigger={['click']}
        >
    <a onClick={(e) => e.preventDefault()}>
      <Space className="cursor-pointer " >
      <FaUser color='black' size={20} className='cursor-pointer' />
        {/* <img width={35} style={{borderRadius:"50%" , cursor:"pointer"}} src={defaultLogo} alt="" /> */}
        
      </Space>
    </a>
  </Dropdown>
      )
}
export default DropDown;
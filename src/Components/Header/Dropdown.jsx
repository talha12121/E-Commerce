import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import defaultLogo from "../../assests/default_img.png"
import { FaUser } from "react-icons/fa6";
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
      <FaUser color='black' size={20} className='cursor-pointer' />
      </Space>
    </a>
  </Dropdown>
      )
}
export default DropDown;
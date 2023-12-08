import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import defaultLogo from "../../assests/default_img.png"
import { useUserContext } from '../Redux/Context';
const items = [
  {
    label: <a href="">Profile</a>,
    key: '0',
  },
  {
    label: <a href="">Logout</a>,
    key: '1',
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
      <Space >
        
        <img width={35} style={{borderRadius:"50%" , cursor:"pointer"}} src={defaultLogo} alt="" />
        
      </Space>
    </a>
  </Dropdown>
      )
}
export default DropDown;
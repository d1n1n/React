import { Link } from "react-router-dom";
import { Button, Flex } from 'antd';
import React, {useState } from 'react';
import {

CaretRightFilled,
  FileDoneOutlined,
  InfoOutlined,

} from '@ant-design/icons';
import { Layout, Menu} from 'antd';

import {useContext} from "react";
const { Header, Sider } = Layout;
export default function SideBar(){
  
  const [collapsed, setCollapsed] = useState(false);

    return(
        <>
    <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <div>
            
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon:  <Link to="/doctorform">{React.createElement(CaretRightFilled )}</Link>,
              label: 'Doctor Form',
            },
            {
              key: '2',
              icon:<Link to="/appointment">{React.createElement(FileDoneOutlined )}</Link>,
              label: 'Appointments ',
            },
        ]}
        />
    </Sider>
    


        </>
    )
}
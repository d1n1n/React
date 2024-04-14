import { Link } from "react-router-dom";
import { Button, Flex } from 'antd';
import React, {useState } from 'react';
import {

CaretRightFilled,
  FileDoneOutlined,
  InfoOutlined,

} from '@ant-design/icons';
import { Layout, Menu} from 'antd';
import { CounterContext } from "../context/counter-reducer";
import {useContext} from "react";
const { Header, Sider } = Layout;
export default function SideBar(){
  const {count} = useContext(CounterContext); 
  const [collapsed, setCollapsed] = useState(false);

    return(
        <>
    <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <div>
            <p style={{color: 'white', padding : '10px'}}>Number of favored events:{count}</p>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon:  <Link to="/movie">{React.createElement(CaretRightFilled )}</Link>,
              label: 'Movie',
            },
            {
              key: '2',
              icon:<Link to="/concert">{React.createElement(FileDoneOutlined )}</Link>,
              label: 'Concert',
            },
            {
              key: '3',
              icon:<Link to="/sportevent">{React.createElement(InfoOutlined )}</Link>,
              label: 'Sport Event'
            }
        ]}
        />
    </Sider>
    


        </>
    )
}
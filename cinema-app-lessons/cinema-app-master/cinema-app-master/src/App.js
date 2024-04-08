import './App.css';
import About from './components/About';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Privacy from './components/Privacy';
import Login from './components/Login';
import {Route, Routes,Link } from "react-router-dom";

import React, { useState } from 'react';
import {

  HomeOutlined,
  FileDoneOutlined,
  InfoOutlined,
  LoginOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
const { Header, Sider, Content } = Layout;
export default function App() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon:  <Link to="/home">{React.createElement(HomeOutlined)}</Link>,
              label: 'Home',
            },
            {
              key: '2',
              icon:<Link to="/about">{React.createElement(FileDoneOutlined )}</Link>,
              label: 'About',
            },
            {
              key: '3',
              icon:<Link to="/privacy">{React.createElement(InfoOutlined )}</Link>,
              label: 'Privacy',
            },
            {
              key: '4',
              icon:<Link to="/login">{React.createElement(LoginOutlined )}</Link>,
              label: 'Login',
            },
          ]}
        />
      </Sider>
      <Layout>
        
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: '90vh',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/notFound" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          
        </Routes>
        </Content>
      </Layout>
    </Layout>
  );
 
}

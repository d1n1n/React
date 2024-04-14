import './App.css';
import Concert from './components/Concert';
import Movie from './components/Movie';
import SportEvent from './components/SportEvent';
import Events from './components/Events';

import {Route, Routes } from "react-router-dom";

import React, {  } from 'react';
import { Layout, theme } from 'antd';


const { Content } = Layout;
export default function App() {
 
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Events />
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
          <Route path="/movie" element={<Movie />} />
          <Route path="/concert" element={<Concert />} />
          <Route path="/sportevent" element={<SportEvent />} />
          


        </Routes>
        </Content>
      </Layout>
    </Layout>
  );
 
}

import React from 'react';
import './App.css';
import SideBar from './components/SideBar';
import DoctorForm from './components/DoctorForm';
import AppointmentForm from './components/AppointmentForm';
import { Route, Routes } from "react-router-dom";
import { Layout, theme } from 'antd';

import { DoctorContext } from './context/DoctorContext';
const { Content } = Layout;

export default function App() {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    
    return (
        <Layout>
            <SideBar />
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
                            <Route path="/doctorform" element={<DoctorForm />} />
                            <Route path="/appointment" element={<AppointmentForm />} />
                        </Routes>
                    
                </Content>
            </Layout>
        </Layout>
    );
}

import React, { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import SmartDeviceDetails from './components/SmartDeviceDetails';
import SmartDeviceContext from './components/SmartDeviceContext';
import './App.css';
import Home from './components/Home';

const ws = new WebSocket('ws://localhost:5001');


class SmartApp extends Component {

    state = {
        devices: [
            { type: 'bulb', id: '1', name: 'Smart Bulb' },
            { type: 'outlet', id: '2', name: 'Smart Outlet' },
            { type: 'temperatureSensor', id: '3', name: 'Temperature Sensor' },
        ]
    }

    componentDidMount = () => {
        ws.addEventListener('open', (data) => {
            console.log('Connected to the server');
            //console.log("VALUE:", data.name, "TYPE:", typeof (data), "TIME:", (new Date()).getSeconds());

            ws.send('Hello from client');
        });
        ws.addEventListener("message", ({ data }) => {
            const devices = JSON.parse(data);
            this.setState({ devices })
            //console.log(this.state.devices);
        });
    }

    render() {
        return (
            <SmartDeviceContext.Provider value={this.state.devices}>
                <div className="container">

                    <Navbar />

                    <div className="row mainbox">

                        <div className="col-4">
                            <Sidebar />
                            <Routes>
                                {/* <Route path='/api/v1/devices' element={<Sidebar />} /> */}
                                <Route path="/" element={<Navigate replace to="/api/v1/devices" />} />
                            </Routes>
                        </div>

                        {/* -the right column- */}
                        <div className="col-8 bckg">

                            <Routes>
                                <Route path='/api/v1/devices/:id' element={<SmartDeviceDetails />} />
                                <Route path='/api/v1/devices' element={<Home />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </SmartDeviceContext.Provider>
        );
    }
}

export default SmartApp;
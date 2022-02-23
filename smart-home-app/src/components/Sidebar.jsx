import React, { useContext } from 'react';
import SmartDevice from './SmartDevice';
import SmartDeviceContext from './SmartDeviceContext';

function Sidebar(props) {
    //console.log(props.devices);
    const currentDevice = useContext(SmartDeviceContext);
    //console.log("Incoming Data", currentDevice);
    return <SmartDevice />

}

export default Sidebar;
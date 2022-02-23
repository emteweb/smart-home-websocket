import React, { useContext } from 'react';
import SmartDeviceContext from './SmartDeviceContext';
import { faThermometerHalf, faPlug } from "@fortawesome/free-solid-svg-icons";                            // import font-awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from 'react-router-dom';
import { drag } from '../utilities/interact.js';
import drawCircle from '../utilities/canvasLoadAnimation.js';
import '../diagram.css';
import SmartBulb from './SmartBulb';

drag();


function SmartDeviceDetails(props) {
    const currentDevice = useContext(SmartDeviceContext);
    console.log("Data", currentDevice);
    let { id } = useParams();
    const bulb = currentDevice[0];
    const outlet = currentDevice[1];
    const temperatureSensor = currentDevice[2];

    const canvas = document.querySelector('canvas');
    drawCircle(canvas, currentDevice[1].powerConsumption)

    return (
        <>
            {(() => {
                switch (id) {
                    case 'bulb': return (

                        <div className="dropTarget mtr">
                            <div id='drag-1' className="row g-0 resize-drag">

                                <div className="col-md-6">
                                    <div className="row" style={{ padding: '20px 75px' }}>
                                        <div className="col">
                                            <SmartBulb />
                                        </div>
                                    </div>

                                    <div className="row" style={{ padding: '30px 0px' }}>
                                        <div className="col">
                                            <div className='canvas-wrapper'>
                                                <canvas className='canvas ' height="200px" width="200px"></canvas>
                                                <div className='pie-text'>{currentDevice[0].brightness} W</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="card-body">
                                        <h4 className="card-title">{bulb.name}</h4>
                                        <p className="card-text">Type: {bulb.name}</p>
                                        <p className="card-text">Power:
                                            <span className={(bulb.isOn === 'On' ? 'powerOn' : 'powerOff')} >
                                                {bulb.isOn} </span>
                                        </p>
                                        <p className="card-text">
                                            {bulb.isOn === 'On' ? `Color: ${bulb.color}` : 'Color: -'} </p>

                                        <p className="card-text">
                                            {bulb.isOn === 'On' ? `Brightness: ${bulb.brightness}` : 'Brightness: 0'} </p>

                                        <p className="card-text">Connection: {bulb.connState}</p>
                                        <p className="card-text"><small class="text-muted">Last updated: ...</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    case 'outlet': return (

                        <div className="dropTarget mtr">
                            <div id='drag-1' className="row g-0 resize-drag">

                                <div className="col-md-6">

                                    <div className="row" style={{ padding: '20px 75px' }}>
                                        <div className="col">
                                            {outlet.isOn === 'On'
                                                ? <FontAwesomeIcon icon={faPlug} style={{ fontSize: 80, color: '#00ff00' }} />
                                                : <FontAwesomeIcon icon={faPlug} style={{ fontSize: 80, color: '#d9534f' }} />
                                            }

                                        </div>
                                    </div>

                                    <div className="row" style={{ padding: '30px 0px' }}>
                                        <div className="col">
                                            <div className='canvas-wrapper'>

                                                <canvas className='canvas ' height="200px" width="200px"></canvas>
                                                <div className='pie-text'>{outlet.powerConsumption} W</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-md-6">
                                    <div className="card-body">
                                        <h4 className="card-title">Name: {outlet.name}</h4>
                                        <p className="card-text">Type: {outlet.name}</p>
                                        <p className="card-text">Power:
                                            <span className={(outlet.isOn === 'On' ? 'powerOn' : 'powerOff')} >
                                                {outlet.isOn}</span></p>
                                        <p className="card-text">
                                            {outlet.isOn === 'On' ? `Power consumption: ${outlet.powerConsumption} W` : 'Power consumption: -'} </p>
                                        <p className="card-text">Connection: {outlet.connState}</p>
                                        <p className="card-text"><small class="text-muted">Last updated: ...</small></p>

                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                    case 'temperatureSensor': return (
                        <div className="dropTarget mtr">
                            <div id='drag-1' className="row g-0 resize-drag">

                                <div className="col-md-6">

                                    <div className="row" style={{ padding: '20px 75px' }}>
                                        <div className="col">
                                            <FontAwesomeIcon icon={faThermometerHalf} style={{ fontSize: 80, color: 'white' }} />
                                        </div>
                                    </div>

                                    <div className="row" style={{ padding: '30px 0px' }}>
                                        <div className="col">
                                            <div className='canvas-wrapper'>
                                                <canvas className='canvas ' height="200px" width="200px"></canvas>
                                                <div className='pie-text'>{temperatureSensor.temperature} °C</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-md-6">
                                    <div className="card-body">
                                        <h4 className="card-title"><b>Name:</b> {temperatureSensor.name}</h4>
                                        <p className="card-text">Type: {temperatureSensor.name}</p>
                                        <p className="card-text">Temperature: {temperatureSensor.temperature}</p>
                                        <p className="card-text">Connection: {temperatureSensor.connState}</p>
                                        <p className="card-text"><small class="text-muted">Last updated: ...</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    default: return null;
                }
            })()}
        </>

    );
}

export default SmartDeviceDetails;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { faChartLine } from "@fortawesome/free-solid-svg-icons";                            // import font-awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SmartDeviceContext from './SmartDeviceContext';

function SmartDevice(props) {

    //console.log(props.details);

    const currentDevice = useContext(SmartDeviceContext);
    //console.log("Data", currentDevice);

    return (
        <>
            {currentDevice.map(dev => (

                <div className="card mb-3" key={dev.id}>
                    <div className="row g-0">
                        <div className="col-md-4 iconImage">
                            <FontAwesomeIcon icon={faChartLine} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{dev.name}</h5>
                                <h6>Type: {dev.type}</h6>
                                <p className="card-text"><small className="text-muted">Status: {dev.connState}</small></p>
                                <button className="btn btn-info"><Link to={`/api/v1/devices/${dev.type}`} style={{ color: 'black', textDecoration: 'none' }}>Details</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }
        </>

    );
}

export default SmartDevice;
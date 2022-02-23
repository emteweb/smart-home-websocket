import React, { useContext } from 'react';
import SmartDeviceContext from './SmartDeviceContext';
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SmartBulb(props) {
    const currentDevice = useContext(SmartDeviceContext);
    const bulb = currentDevice[0];
    return (
        <div>
            {(bulb.isOn === 'Off')
                ? <FontAwesomeIcon icon={faLightbulb} style={{ fontSize: 80, color: 'gray' }} />
                : null
            }
            {(bulb.isOn === 'On' && (bulb.brightness > 0 && bulb.brightness <= 20))
                ? <FontAwesomeIcon icon={faLightbulb} style={{ fontSize: 80, color: '#ffffe6' }} />
                : null
            }
            {(bulb.isOn === 'On' && (bulb.brightness > 20 && bulb.brightness <= 40))
                ? <FontAwesomeIcon icon={faLightbulb} style={{ fontSize: 80, color: '#ffffb3' }} />
                : null
            }
            {(bulb.isOn === 'On' && (bulb.brightness > 40 && bulb.brightness <= 60))
                ? <FontAwesomeIcon icon={faLightbulb} style={{ fontSize: 80, color: '#ffff80' }} />
                : null
            }
            {(bulb.isOn === 'On' && (bulb.brightness > 60 && bulb.brightness <= 80))
                ? <FontAwesomeIcon icon={faLightbulb} style={{ fontSize: 80, color: '#ffff4d' }} />
                : null
            }
            {(bulb.isOn === 'On' && (bulb.brightness > 80 && bulb.brightness <= 100))
                ? <FontAwesomeIcon icon={faLightbulb} style={{ fontSize: 80, color: '#ffff1a' }} />
                : null
            }
        </div>
    );
}

export default SmartBulb;
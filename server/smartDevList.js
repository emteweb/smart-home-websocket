function getDevices() {
    const valueRand = Math.ceil(Math.random() * 100);
    const randArr = Math.floor(Math.random() * 3);
    connectionState = ['Connected', 'Disconnected', 'Poor connection'];
    const power = Math.floor(Math.random() * 2);
    isTurnedOn = ['On', 'Off'];
    color = ['Red', 'Green', 'Blue'];

    /* return smartDevices = [
        { smartBulb: 
            { type: 'bulb', id: '1', name: 'Smart Bulb', connState: connectionState[randArr], isOn: isTurnedOn[power], brightness: valueRand, color: color[randArr] } },
        { smartOutlet: 
            { type: 'outlet', id: '2', name: 'Smart Outlet', connState: connectionState[randArr], isOn: isTurnedOn[power], powerConsumption: valueRand } },
        { smartTemperatureSensor: 
            { type: 'temperatureSensor', id: '3', name: 'Temperature Sensor', connState: connectionState[randArr], temperature: valueRand } },
    ] */
    return smartDevices = [
        { type: 'bulb', id: '1', name: 'Smart Bulb', connState: connectionState[randArr], isOn: isTurnedOn[power], brightness: valueRand, color: color[randArr] },
        { type: 'outlet', id: '2', name: 'Smart Outlet', connState: connectionState[randArr], isOn: isTurnedOn[power], powerConsumption: valueRand },
        { type: 'temperatureSensor', id: '3', name: 'Temperature Sensor', connState: connectionState[randArr], temperature: valueRand },
    ]
}

module.exports = { getDevices }
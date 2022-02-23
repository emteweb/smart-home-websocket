import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

const socket = new WebSocket('ws://localhost:5001');

function App(props) {

  //const [random, setRandom] = useState({ number: 0 });
  const [random, setRandom] = useState("");


  useEffect(() => {
    // Listen for messages
    socket.addEventListener('message', function (event) {
      //console.log('Message from server: ', event.data);
      const num = event.data;
      setRandom(num);
      //console.log(random);
      console.log("VALUE:",random, "TYPE:", typeof (random), "TIME:", (new Date()).getSeconds());
    });
  });

  /* useEffect(() => {
    // Listen for messages
    socket.addEventListener('message', function (event) {
      //console.log('Message from server: ', event.data);
      const num = JSON.parse(event.data);
      setRandom(num);
      console.log(random, " - ", (new Date()).getSeconds());
    });
  }); */
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

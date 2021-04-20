import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [ data, setFacts ] = useState([]);

  useEffect( () => {
      const events = new EventSource('http://localhost:3003/stream');

      events.onmessage = (event) => {
        const parsedData = JSON.parse(event.data);
        setFacts((facts) => facts.concat(parsedData));
      };
          
  }, [data]);

  const startStream = () => {
    fetch('http://localhost:3003/start')
  }

  return (
    <div>
      <button onClick={startStream}>Start</button>
      <ul>
        {
          data.map((fact, i) => 
            <li key={i}>{fact}</li>
          )
        }
      </ul>
    </div>
  );
}

export default App;
import React, { useState, useEffect } from "react";
import axios from 'axios';

function App() {
  const [nasaData, setNasaData] = useState({});

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=fB4ysTncHrP86v3bq2wLZ4Vw4v4bgHm3Ld0KewbW')
      .then(response => {
        setNasaData(response.data);
      })
      .catch(error => console.log(error))
  }, [])

  console.log(nasaData)

  return (
    <div className="App">
      
    </div>
  );
}

export default App;

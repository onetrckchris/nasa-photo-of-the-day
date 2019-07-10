import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';

import ChrisAPOD from './components/ChrisAPOD';

const APODContainer = styled.div`
  display: flex;
  margin: auto;
  padding: 20px;
`;

function App() {
  const [nasaData, setNasaData] = useState({});

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=fB4ysTncHrP86v3bq2wLZ4Vw4v4bgHm3Ld0KewbW&date=1996-02-14')
      .then(response => { setNasaData(response.data) })
      .catch(error => console.log(error))
  }, [])

  console.log(nasaData)

  return (
    <APODContainer className="App">
      <ChrisAPOD nasaData={nasaData} />
    </APODContainer>
  );
}

export default App;

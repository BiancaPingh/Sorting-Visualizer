import './App.css';
import './NavBar.css';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';




function App() {
  const [speedValue, setSpeedValue] = useState(20);
  const [countValue, setValue] = useState(20);

  const state = {
    array: [],
    arraySteps: [],
    colorKey: [],
    colorSteps: [],
    currentStep: 0,
    count: countValue,
    delay: speedValue, //from: 100-state.delay
    algorithm: '',
    timeouts: []
  };

  const randomNumber = (min,max) =>{
    return Math.floor(Math.random() * (max-min) + min);
  }

  const randomArr = () => {
    const count = state.count;
    const temp = [];

    for(let i=0;i<count;i++){
      temp.push(randomNumber(50,250));
    }
    console.log(temp);
  }

  const changeCountValue = (event, countValue) => {
    setValue(countValue);
  };
  const changeSpeedValue = (event, speedValue) => {
    setSpeedValue(speedValue);
  };

  return (
    <div className="App">
      <header className="NavBar">
      <Box sx={{ width: 500 }}>
      <p>Array Size</p>
       <Slider
         size="small"
         aria-label="Small"
         valueLabelDisplay="auto"
         value={countValue}
         onChange={changeCountValue}
       />
     </Box>
     <br/>
     <div className= "vertical"></div>
     <Box sx={{ width: 500 }}>
     <p>Sorting speed</p>
      <Slider
        size="small"
        value={speedValue}
        onChange={changeSpeedValue}
        aria-label="Small"
        valueLabelDisplay="auto"
      />
    </Box>
    <div className= "vertical"></div>
    <Box sx={{ width: 500 }}>
    <p>Generate Array</p>
    <Button onClick={randomArr}>new array</Button>
   </Box>
    <div className= "vertical"></div>
    <Box sx={{ width: 500 }}>
      <ButtonGroup color="secondary" aria-label="Medium-sized button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
          <Button>Four</Button>
      </ButtonGroup>
    </Box>
      </header>
    <body className="App-body">

    </body>
    </div>
  );
}

export default App;

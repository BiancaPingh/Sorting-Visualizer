import './App.css';
import './NavBar.css';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


function App() {
  return (
    <div className="App">
      <header className="NavBar">
      <Box sx={{ width: 500 }}>
      <p>Array Size</p>
       <Slider
         size="small"
         defaultValue={70}
         aria-label="Small"
         valueLabelDisplay="auto"
       />
     </Box>
     <br/>
     <div class= "vertical"></div>
     <Box sx={{ width: 500 }}>
     <p>Sorting speed</p>
      <Slider
        size="small"
        defaultValue={70}
        aria-label="Small"
        valueLabelDisplay="auto"
      />
    </Box>
    <div class= "vertical"></div>
    <Box sx={{ width: 500 }}>
    <p>Generate Array</p>
    <Button>new array</Button>
   </Box>
    <div class= "vertical"></div>
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

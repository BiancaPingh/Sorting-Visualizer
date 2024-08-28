//CSS
import './App.css';
import './NavBar.css';
//JS
import Bar from './Bar.js';
//lib
import { Component } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


class App extends Component {

  componentDidMount(){
    this.randomArr();
  }

  state = {
    array: [],
    arraySteps: [],
    colorKey: [],
    colorSteps: [],
    currentStep: 0,
    count: 20,
    delay: 20, //from: 100-state.delay
    algorithm: '',
    timeouts: []
  };


  randomNumber = (min,max) =>{
    return Math.floor(Math.random() * (max-min) + min);
  }

  randomArr = () => {
    const count = this.state.count;
    const temp = [];
    const col =[];

    for(let i=0;i<count;i++){
      temp.push(this.randomNumber(100,400));
      col.push(0);
    }
    this.setState({
      array: temp,
      arraySteps: [temp],
      colorKey: col,
    })
}

  render(){
    let bars = this.state.array.map((value,index) => {
     return ( <Bar key={index} index={index} length={value} color={this.state.colorKey[index]} />);
    });
    return (
      <div className="App">
        <header className="NavBar">
        <Box sx={{ width: 500 }}>
        <p>Array Size</p>
         <Slider
           size="small"
           aria-label="Small"
           valueLabelDisplay="auto"
           value={this.state.count}
           onChange={this.changeCountValue}
           onDrag={this.handleDragCount}
         />
       </Box>
       <br/>
       <div className= "vertical"></div>
       <Box sx={{ width: 500 }}>
       <p>Sorting speed</p>
        <Slider
          size="small"
          value={this.state.delay}
          onChange={this.changeSpeedValue}
          aria-label="Small"
          valueLabelDisplay="auto"
          onDrag={this.handleDragSpeed}
        />
      </Box>
      <div className= "vertical"></div>
      <Box sx={{ width: 500 }}>
      <p>Generate Array</p>
      <Button onClick={() => this.randomArr()}>new array</Button>
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
      <Box sx={{ width: 900 }} className="App-body">
        {bars}
     </Box>
      </body>
      </div>
    );
  }
  changeSpeedValue = (event, value) => {
    this.state.delay = value;
    this.forceUpdate()
  };
  changeCountValue = (event, value) => {
    this.state.count = value;
    this.forceUpdate()
  };
}

export default App;

//CSS
import './App.css';
import './NavBar.css';
//JS
import Bar from './Bar.js';
import {quickSorting} from './Algorithms/quickSorting.js';
import {bubbleSorting} from './Algorithms/bubbleSorting.js';
import {mergeSorting} from './Algorithms/mergeSorting.js';
import {heapSorting} from './Algorithms/heapSorting.js';
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
    delay: 20,
    algorithm: ['quickSort','mergeSort','bubbleSort','heapSort'],
    timeouts: []
  };

  alg = {
   'quickSort': quickSorting,
   'mergeSort': mergeSorting,
   'bubbleSort': bubbleSorting,
   'heapSort': heapSorting
  }

  clearTimeouts = () => {
    this.state.timeouts.forEach((timeout) => {
      clearTimeout(timeout);
    });
    this.setState({
      timeouts: []
    });
  }

  generateSteps = (index) => {
    this.clearTimeouts();
    let array = this.state.array.slice();
    let steps = this.state.arraySteps.slice();
    let color = this.state.colorSteps.slice();

    this.alg[this.state.algorithm[index]](array, 0, array.length-1, steps, color);

    this.setState({
      arraySteps: steps,
      colorSteps: color,
    });
  }


  start = () => {
    let steps = this.state.arraySteps;
    let colorSteps = this.state.colorSteps;
    this.clearTimeouts();

    let timeouts = [];
    let i=0;

    while(i < steps.length - this.state.currentStep ){
      let timeout = setTimeout(() => {
        let currentStep = this.state.currentStep;
        this.setState({
          array: steps[currentStep],
          colorKey:colorSteps[currentStep],
          currentStep:currentStep+1,
        });
        timeouts.push(timeout);
      }, this.state.delay *i);
      i++;
    }
    this.setState({
      timeouts: timeouts,
    });
  }

  randomNumber = (min,max) =>{
    return Math.floor(Math.random() * (max-min) + min);
  }

  randomArr = () => {
    this.clearTimeouts();
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
      colorSteps: [col],
      currentStep: 0,
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
       <p>Sorting delay</p>
        <Slider
          size="small"
          value={this.state.delay}
          onChange={this.changeSpeedValue}
          aria-label="Small"
          valueLabelDisplay="auto"
          onDrag={this.handleDragSpeed}
          min={15}
          max={100}
        />
      </Box>
      <div className= "vertical"></div>
      <Box sx={{ width: 500 }}>
      <p>Generate Array</p>
      <Button onClick={() => this.randomArr()}>new array</Button>
     </Box>
      <div className= "vertical"></div>
      <Box sx={{ width: 500 }}>
        <ButtonGroup color="secondary" aria-label="Medium-sized button group" sx={{ width: 400 }}>
            <Button onClick={() => this.generateSteps(0)}>Quick sort</Button>
            <Button onClick={() => this.generateSteps(1)}>Merge sort</Button>
            <Button onClick={() => this.generateSteps(2)}>Bubble sort</Button>
            <Button onClick={() => this.generateSteps(3)}>Heap sort</Button>
        </ButtonGroup>
        <br/>
        <Button  variant="outlined" onClick={() => this.start()}>sort</Button>
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

import './ChartBar.css';
import { useState } from 'react';

function Bar({index,length,color}) {

  const [len, setLen] = useState(length);

  const colors = ['blue','red','green'];

  const style ={
    height: length,
    backgroundColor: colors[color]
  }


  const handleChange = (event, len) => {
    setLen(len);
  };

  return (
    <>
      <div className="bar" style={style}>
        <div value={len} onChange={handleChange}>
        </div>
      </div>
    </>
  );
}

export default Bar;

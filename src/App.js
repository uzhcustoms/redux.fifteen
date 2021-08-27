import React, { useState, useEffect } from "react";
import changeStore from "./stores/changeStore";
import * as changeBlock from "./actions/changeActions";
import cells from "./stores/changeStore";
import empty from "./stores/changeStore";
import './App.css';


export default function App() {
  const [counter, setCounter] = useState(changeStore.getCounter());
const [arrCells, setArrCells] = useState(changeStore.setArrayCell());

  useEffect(() => {
    changeStore.addChangeListener(onChange);
    return () => changeStore.removeChangeListener(onChange);
  }, []);

  function onChange() {
    setCounter(changeStore.getCounter());
  }

  

  const handlerClick = (event) => {
    event.target.style.left = changeStore.getEmpty().left;
    event.target.style.top = changeStore.getEmpty().top;
    // changeStore.move();
   
arrCells.findIndex( 
  function checkNumber( item ) {
    return console.log(item.value === event.target.innerText); 
  } 
);
 
    changeBlock.changeBlock();
  };
  

  return (
    <>
    <h1>Пятнашки</h1>
   
    <div className="field">
     
      {changeStore.getArrayNumbers().map((item, idx)=><div onClick={handlerClick} className="cell" style={{left: arrCells[idx+1].left*100, top: arrCells[idx+1].top*100}}>{arrCells[idx+1].value}</div>)}
      
    </div>
    </>
  );
}

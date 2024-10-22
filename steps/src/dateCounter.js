import React, { useState } from "react";
export default function Apps() {
    return (
      <div className="App" style={{textAlign: "center"}}>
        <Counter/>
      </div>
    );
  }
  
  function Counter(){
  const [sub,setSub]=useState(0);
  
  const [counter,setCounter]=useState(1);
    const handleDecrement=()=>{
       setSub((s)=>s-counter)
    }
  
    const handleAdd=()=>{
      setSub((s)=>s+counter)
   }
  
  //  const counterAdd=()=>{
  //     //console.log(sub)
  //     setCounter((counter)=>counter+1)
  //  }
   const date=new Date("apr 10 2030");
   date.setDate(date.getDate()+sub);
  return(
    <div>
      <p>Date counter</p>
      <div>
      <button onClick={()=> setCounter((s)=>s-1)}>-</button>
      <span> steps: {counter}</span>
      <button onClick={()=> setCounter((s)=>s+1)}>+</button>
      </div>
      <div>
      <button onClick={handleDecrement}>-</button>
      <span> count:{sub}</span>
      <button onClick={handleAdd}>+</button>
      </div>
     
      <p>
      <span>{sub === 0 ? "Today is" : sub>0 ? `${sub} days from today is ` : `${Math.abs(sub)} days ago was`}</span>
      {date.toDateString()}</p>
    </div>
  )
  }
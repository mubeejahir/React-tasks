import React  from "react";

const Stats = ({ items }) => {
  const numItems = items.length;
  const numPacked = items.filter((items) => items.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  // const [count,setCount] = useState(0);

  // useEffect(() => {
  //   console.log("component triggered")
  //   console.log("componentDid Update")
  // },[count])

  // useEffect(()=>{
  //   return()=>{
  //     console.log("component destroyed")
  //   }
  // },[])

  // const handleCount=()=>{
  //   setCount(count+1);
  // }

  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your packing list</em>
      </p>
    );

    

  return (
    <footer className="stats">
      <em>
      {/* <div>
      <p>{count}</p>
      <button onClick={handleCount}>Add</button>
      </div> */}
        {percentage === 100
          ? "You got everything ! Ready to go"
          : `you have ${numItems} items on your list, and you already packed ${numPacked}(${percentage}%)`}
      
      
      </em>
      
    </footer>
  );
};

export default Stats;
// import React, { useState, useEffect } from 'react';

// function CountdownTimer() {
//   const [seconds, setSeconds] = useState(10); // Initial countdown time in seconds
//   const [isActive, setIsActive] = useState(false);

//   useEffect(() => {
//     let interval;

//     if (isActive && seconds > 0) {
//       interval = setInterval(() => {
//         setSeconds((prevSeconds) => prevSeconds - 1);
//       }, 1000);
//     }

//     if (seconds === 0) {
//       setIsActive(false);
//       console.log("i'm normal clearinterval")
//       clearInterval(interval);
//     }

//     return () => {
//       console.log("I'm component willunmount")
//       clearInterval(interval); // Cleanup to prevent memory leaks
//     };
//   }, [isActive, seconds]);

//   const startTimer = () => {
//     setIsActive(true);
//   };

//   const pauseTimer = () => {
//     setIsActive(false);
//   };

//   const resetTimer = () => {
//     setIsActive(false);
//     setSeconds(10); // Reset the timer to the initial value
//   };

//   return (
//     <div>
//       <h1>Countdown Timer: {seconds} seconds</h1>
//       <button onClick={startTimer}>Start</button>
//       <button onClick={pauseTimer}>Pause</button>
//       <button onClick={resetTimer}>Reset</button>
//     </div>
//   );
// }

// export default CountdownTimer;

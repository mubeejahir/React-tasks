import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { context } from "./reducer";
import axios from "axios";

// const initialState = {
//   count: 0,
//   step: 1,
// };

// const reducer = (state, action) => {
//   console.log(state, action);

//   // if(action.type ==='inc')return state + 1;
//   // if(action.type ==='dec')return state - 1;
//   // if(action.type ==='setCount')return action.payload;

//   switch (action.type) {
//     case "inc":
//       return { ...state, count: state.count + state.step };
//     case "dec":
//       return { ...state, count: state.count - state.step };
//     case "setCount":
//       return { ...state, count: action.payload };
//     case "setStep":
//       return { ...state, step: action.payload };
//     case 'reset':
//       return initialState;
//     default:
//       throw new Error("unknown action");
//   }
// };

function DateCounter() {
  // const [state, dispatch] = useReducer(reducer, initialState);
  // const { count, step } = state;

  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);

  //Passing state into the context
  const { count, step, dispatch } = useContext(context);
  console.log("count", count, step);
const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   getPosts();
  // }, [setPosts]);

  // const  getPosts= async () => {
  //   // fetch("https://jsonplaceholder.typicode.com/posts")
  //   //   .then((response) => response.json())
  //   //   .then((json) => setPosts(json));
   
  //   // axios.get("https://jsonplaceholder.typicode.com/posts")
  //   // .then((res)=> setPosts(res.data));
  // try{
  //   const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  //   setPosts(res.data);
  // }catch(err){
  //   console.log('error',err)
  // }
  // };

  const url = 'https://jsonplaceholder.typicode.com/posts';
  const data = {
    key1: 'value1',
    key2: 'value2',
  };
  
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // Set the content type based on your API's requirements.
      // You may need to include an API key or authorization token in the headers.
    },
    body: JSON.stringify(data), // Convert your data to a JSON string.
  };
  fetch(url, requestOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the response data (assuming it's JSON).
  })
  .then(data => {
    console.log('API response:', data);
    // Handle the response data here.
  })
  .catch(error => {
    console.error('Error:', error);
    // Handle any errors that occur during the request.
  });


//   const getPosts=()=>{
//   fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json;',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => setPosts(json));
//   }

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  // const dec = function () {
  //   dispatch({ type: "dec" });
  //   // setCount((count) => count - 1);
  //   // setCount((count) => count - step);
  // };

  const inc = function () {
    dispatch({ type: "inc" });
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
  };

  const defineCount = function (e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });

    // setCount(Number(e.target.value));
  };

  const defineStep = function (e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
    // setStep(Number(e.target.value));
  };

  const reset = function () {
    dispatch({ type: "reset" });
    // setCount(0);
    // setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={() => dispatch({ type: "dec" })}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
      {posts.map((post,index)=><h1 key={index}>{post.title}</h1>)}
    </div>
  );
}

export default DateCounter;

import React, { createContext, useReducer } from 'react'

const initialState = {
    count: 0,
    step: 1,
  };
  

   //Context
   const context=createContext();

  const reducer = (state, action) => {
    console.log(state, action);
  
    // if(action.type ==='inc')return state + 1;
    // if(action.type ==='dec')return state - 1;
    // if(action.type ==='setCount')return action.payload;
  
    switch (action.type) {
      case "inc":
        return { ...state, count: state.count + state.step };
      case "dec":
        return { ...state, count: state.count - state.step };
      case "setCount":
        return { ...state, count: action.payload };
      case "setStep":
        return { ...state, step: action.payload };
      case 'reset':
        return initialState;
      default:
        throw new Error("unknown action");
    }
  };
  

const Reducer = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { count, step } = state;

 

  return (
    <context.Provider value={{
        count,
        step,
        dispatch
    }}>
        {children}
    </context.Provider>
  )
}

export {Reducer, context}
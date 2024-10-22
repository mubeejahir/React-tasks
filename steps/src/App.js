import React, { useState } from 'react'
import Map from './map';
const messages = [
  "Learn React ",
  "Apply for jobs ",
  "Invest your new income ",
];

const App=()=>{
return(
  <div>
     {/* <Map/> */}
    <Step/> 
    <Step/>
  </div>
)
}

const Step = () => {
  // const step = 1;
  const [step, setStep]= useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePreivious(){
    if(step>1)
    setStep((s)=> s-1);
    
  }

  const handleNext=()=>{
    if(step<3)
    setStep(step+1);
  }

  return (
    <div>
      <button className='close' onClick={()=>setIsOpen(!isOpen)}>&times;</button>
      {isOpen && (
      <div className="steps">
      <div className="numbers">
        <div className= {step>=1 ? "active" : ""}>1</div>
        <div className= {step>=2 ? "active" : ""}>2</div>
        <div className= {step>=3 ? "active" : ""}>3</div>
      </div>
      <p className="message">step{step}:{messages[step-1]}</p>
      <div className="buttons">
        <button style={{backgroundColor: '#7050f2', color: '#fff'}} onClick={handlePreivious}>Previous</button>
        <button style={{backgroundColor: '#7050f2', color: '#fff'}} onClick={handleNext}>Next</button>
      </div>
    </div>)}
    </div>
  )
}

export default App

// import React, { useState, useContext } from 'react';

// // Create a context for the theme
// const ThemeContext = React.createContext();

// function App() {
//   const [theme, setTheme] = useState('light');

//   const toggleTheme = () => {
//     setTheme(theme === 'light' ? 'dark' : 'light');
//   };

//   return (
//     <ThemeContext.Provider value={theme}>
//       <div>
//         <button onClick={toggleTheme}>Toggle Theme</button>
//         <ThemedComponent />
//       </div>
//     </ThemeContext.Provider>
//   );
// }

// function ThemedComponent() {
//   const theme = useContext(ThemeContext);

//   const themeStyles = {
//     light: { background: 'white', color: 'black' },
//     dark: { background: 'black', color: 'white' },
//   };

//   return (
//     <div style={themeStyles[theme]}>
//       <h1>Themed Component</h1>
//       <p>Current Theme: {theme}</p>
//     </div>
//   );
// }

// export default App;

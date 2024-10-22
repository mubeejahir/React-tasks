// // import React, {component} from 'react';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <p>Hello react!</p>
// //     </div>
// //   );
// // }

// // export default App;

// import React, {Component} from 'react';
// import './App.css';

// class App extends Component{
//   render(){
//     const arr=[{
//       name:"pizza",
//       ingredients:"tomato,cheese,flour"
//     },
//     {
//       name:"pizza1",
//       ingredients:"tomato,cheese,flour"
//     },
//     {
//       name:"pizza2",
//       ingredients:"tomato,cheese,flour"
//     }]

    
//   return(
//     <div>
//       <p>Hello React!</p>
//     <Item items={arr} title="arr"/>
//     </div>
//   )
//   }
// }

// class Item extends Component {
//   render(){
//     const items= this.props.items.map((item)=>(
//       <p key={item.name} >{item.name}{item.ingredients}</p>
//     ))
//     console.log(items);
//     return(
//       <div>
//         <h1>{items}</h1>
//         <h2>{this.props.ingredients}</h2>
//       </div>
//     )
//   }
// }

// export default App;

import React, { Component } from 'react';

// class ParentComponent extends Component {
 
  
//   render() {
//     const data = [
//       { id: 1, name: 'Alice',age:21 },
//       { id: 2, name: 'Bob' },
//       { id: 3, name: 'Charlie' }
//     ];

//     return (
//       <div>
//         {/* <p>count:{this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button> */}
//         <h1>Parent Component</h1>
//         <ChildComponent dataArray={data} />
//       </div>
//     );
//   }
// }
// class ChildComponent extends Component {
//   render() {
//     const dataArray = this.props.dataArray.map(item => (
//       <li key={item.id}>{item.name}{item.age}</li>
      
//     ));

//     return (
//       <div>
//         <h2>Child Component</h2>
//         <ul>{dataArray}</ul>
//       </div>
//     );
//   }
// }
// export default ParentComponent;

class Counter extends Component {
  constructor(props){
    super(props);
    this.state={
      count: 0
    }
  }
  add=()=>{
    this.setState({count: this.state.count + 1})
  }
  render(){
  return(
    <div>
      <p>count:{this.state.count}</p>
      <button onClick={this.add}>Add</button>
    </div>
  )
  }
}

export default Counter;

// import React, { Component } from 'react';

// class ClassComponentExample extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   componentDidMount() {
//     // Runs after the component is mounted
//     document.title = `Count: ${this.state.count}`;
//     console.log('did mount')
//   }

//   componentDidUpdate(prevProps, prevState) {
//     // Runs when component updates
//     if (prevState.count !== this.state.count) {
//       document.title = `Count: ${this.state.count}`;
//       console.log('did update')
//     }
//   }

//   componentWillUnmount() {
//     // Cleanup before unmounting
//     console.log('Component will unmount');
//   }

//   render() {
//     return (
//       <div>
//         <p>Count: {this.state.count}</p>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Increment
//         </button>
//       </div>
//     );
//   }
// }

// export default ClassComponentExample;


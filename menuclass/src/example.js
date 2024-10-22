import React, { Component } from "react";

class Example extends Component {
  constructor(props) {
    super(props);
    this.state={
        value:0
    }
    console.log("i'm a constructor");
    //this.handleClick = this.handleClick.bind(this);
  }
  
  componentDidMount(){
    console.log('Component did mount')
  }
  componentDidUpdate(pre,props){
    if(pre.state !== this.state.value){
    console.log('componentdidupdate')
    }
  }
  

  handleClick (){
    this.setState((pre)=>({value: pre.value + 1}))
  }

  render() {
    return (
      <div>
        <p>value:{this.state.value}</p>
        <button onClick={this.handleClick.bind(this)}>press me!</button>
      </div>
    );
  }
}

export default Example;

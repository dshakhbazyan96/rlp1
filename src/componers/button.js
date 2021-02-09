import React, { Component } from "react";


export default class Button extends Component {
 
 state={
 ind : [],
 buttonasArray:[],
 col : false
 }
 
 componentDidMount(){
   const temp = Array(100).fill(1,1).map((g,index)=>{
     return {
       value:index,
       color:"red",
     }
   });
   this.setState({buttonasArray:temp});
 }
  handleClick = (index)=> () => {
    const {ind,buttonasArray}=this.state;
    buttonasArray[index].color="green";
    this.setState([...ind,index]);

 
  }
  render() {
    const {buttonasArray}=this.state;
    return (
      <div >
        {buttonasArray.map((i, index) => {
          return <button style={{color:i.color}} key={index} onClick={this.handleClick(index)}>{i.value}</button>;
        })}
      </div>
    );
  }
}


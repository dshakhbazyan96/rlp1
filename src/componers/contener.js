import React, { Component } from 'react'

import Button from './button';
import Count from './count';
import Tasks from './tasks';

export default class Constuctr extends Component {
state ={
  count: 1,
  ind : []
}; 

handleIncrement = () => this.setState({count: this.state.count+1})
handleDecrement = () => this.setState({count: this.state.count-1})
handletask=()=>{

}
addIndex=(index)=>{

  const {ind,count}=this.state;
 if (ind.length===count  || ind.some(a=>a===index)) return null;

 ind.push(index);
  this.setState(ind);
}
  render() {

    const {ind,count}=this.state
    console.log({ind} , {count})
    return (
      <div>
       
       <Button ind ={ this.state.ind} addIndex={this.addIndex}  />
       <Count count={this.state.count} handleDecrement={this.handleDecrement} handleIncrement={this.handleIncrement} />
        <Tasks ini={this.state.ind}  Counter={this.state.count}/> 
      </div>
    )
  }
}

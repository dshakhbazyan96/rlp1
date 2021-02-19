import React, { Component } from "react";

import Button from "./button";
import Count from "./count";
import Rand from "./rand.js";
import Tasks from "./tasks";

export default class Constuctr extends Component {
  state = {
    count: 1,
    ind: [],
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count < 10 ? this.state.count + 1 : 1 });
  };

  handleDecrement = () => {
    const count =  this.state.count > 1 ? this.state.count - 1 : 10;
     this.state.ind.length = count;
    this.setState({ count});
    
    
  };
  handletask = () => {};
  addIndex = (index) => {
    const { ind, count } = this.state;
    if (ind.length === count || ind.some((a) => a === index)) return null;

    ind.push(index);
    this.setState(ind);
  };
  render() {
    const { ind, count } = this.state;
    console.log({ ind }, { count });
    return (
      <div>
        <Button ind={this.state.ind} addIndex={this.addIndex} />
        <Count
          count={this.state.count}
          handleDecrement={this.handleDecrement}
          handleIncrement={this.handleIncrement}
        />
        <Tasks ini={this.state.ind} Counter={this.state.count} />
        <Rand />
      </div>
    );
  }
}

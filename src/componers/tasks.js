import React, { Component } from "react";
import style  from "./taskStyle.module.css";
export default class Tasks extends Component {
  state = {
    show: false,
  };
  lenet = () =>
    this.props.ini.map((elem, index) => {
      return <div
      className={style.tasksColor}
      key={index}>{elem}</div>;
    });

  handleAddClick = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  render() {
    const { show } = this.state;
    return (
      <div>
        <button onClick={this.handleAddClick}>add</button>
        {show && this.lenet()}
      </div>
    );
  }
}

import React, { Component } from "react";
import styles from "./countStyle.module.css"
export default class Count extends Component {
  
  render() {
    const { count, handleIncrement, handleDecrement } = this.props;
    return (
      <div className={styles.blok}>
        <button onClick={handleDecrement}>-</button>
        <div className={styles.count}> {count}</div>
        
        <button onClick={handleIncrement}>+</button>
      </div>
    );
  }
}
 
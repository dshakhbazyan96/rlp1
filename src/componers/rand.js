import React, { Component } from "react";
import style from './randStyle.module.css'
const run = Math.floor(Math.random() * 100);
export default class Rand extends Component {
  state = {
    winList: [],
  };

  getRandomNumbers = () => {
    return Math.floor(Math.random() * 100);
  };

  getWinNumbers = () => {
    for (let i = 0; i < 30; i++) {
      setTimeout(() => {
        this.setState({
          winList: [...this.state.winList, this.getRandomNumbers()],
        });
      }, 1000 * i);
    }
  };

 componentDidMount() {
     setInterval(() => {
         this.setState({
             winList:[]
         })
         this.getWinNumbers()
     },30000);
 }
 

  render() {
  
    return <div className={style.control}>{
        this.state.winList.map(elem => <div 
        className={style.randomNu}
        >{elem}</div>)
        }</div>;
  }
}

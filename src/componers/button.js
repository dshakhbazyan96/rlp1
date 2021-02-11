import React, { Component } from "react";
import styles from "./buttonrStyle.module.css"

export default class Button extends Component {
 
 state={
   ind :[],

 buttonasArray:[],
 col : false
 }
 
 componentDidMount(){
   const temp = Array(100).fill(1,1).map((g,index)=>{
     return {
       value:index,
       color:"",
     }
   });
   this.setState({buttonasArray:temp});
 }
  handleClick = (index)=> () => {
   
   this.props.addIndex(index)
   
 
  }
  render() {
    const {buttonasArray}=this.state;
    return (
      <div  className={styles.butt} >
        {buttonasArray.map((i, index) => {
          return <button style={{color:i.color}} key={index} onClick={this.handleClick(index)} 
          className={styles.but}
          >{i.value}</button>;
        })}
      </div>
    );
  }
}


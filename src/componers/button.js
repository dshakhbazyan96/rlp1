import React, { Component } from "react";
import styles from "./buttonrStyle.module.css"

export default class Button extends Component {
 
 state={
   ind :[],
   activite :false,

 buttonasArray:[],
  col : {},
color:"red",
 }
 
 componentDidMount(){
   const temp = Array(100).fill(1,1).map((g,index)=>{
     return {
       value:index,
      
     }
   });
   this.setState({buttonasArray:temp});
 }
  handleClick = (index)=> () => {
   
   this.props.addIndex(index)
   this.setState({
     col: {...this.state.col, [index]: !this.state.col[index] }
        //  activite : !this.state.activite
  });

 
  }
  getIndexColor = (i) => {
    if(this.state.col[i]){
      return "green"
    }
    return 'red'
  }
  render() {
    
    const {buttonasArray, }=this.state;
   
    return (
      <div  className={styles.butt} >
        {buttonasArray.map((i, index) => {
          return <button  className={`${styles.colors}`} style={{background: this.getIndexColor(index)}} key={index} onClick={this.handleClick(index)} 
           className={styles.but}
          >{i.value}</button>;
        })}
      </div>
    );
  }
}


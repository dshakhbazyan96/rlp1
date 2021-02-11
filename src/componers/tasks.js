 import React, { Component } from 'react'

 export default class Tasks extends Component {

 state ={
    
}
     render() { 
        const {counter}=this.props;
        const {ini}=this.props;
        return (
        <div>
        <button onClick={this.handleAddClick}>add</button>
        
       </div>
         )
     }
 }

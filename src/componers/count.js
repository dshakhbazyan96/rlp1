import React, { Component } from 'react'

export default class Count extends Component {
state={
    count:1
}
handleCount = ()=>{
    this.setState({
        count: this.count-1
    })
}

handleCounts = ()=>{
    this.setState({
        count: this.count+1
    })
}



    render() {
       const {count}= this.state
        return (
            <div>
              <button onClick={this.handleCount}>-</button>

             {count}

              <button 
              onClick={
                this.handleCounts
              }>+</button>  
            </div>
        )
    }
}

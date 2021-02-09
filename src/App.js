import React, { Component } from 'react'

import Button from './componers/button';
import Count from './componers/count';

export default class App extends Component {
  render() {
    return (
      <div>
       
       <Button />
       <Count />
      </div>
    )
  }
}

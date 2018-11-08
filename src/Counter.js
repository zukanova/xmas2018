import React, { Component } from 'react'

class Counter extends Component {
  render() {
    return <h1>Doors open: {this.props.num}</h1>
  }
}

export default Counter

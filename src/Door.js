import React, { Component } from 'react'

class Door extends Component {
  render() {
    const { text, num, total, isOpen, onClick } = this.props
    const today = new Date().getDate()
    return (
      <section
        onClick={num <= today ? onClick : undefined}
        className={isOpen ? 'Door open' : 'Door'}
      >
        {isOpen ? text : `${num}/${total}`}
      </section>
    )
  }
}

export default Door

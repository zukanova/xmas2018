import React, { Component } from 'react'
import Door from './Door'
import Counter from './Counter'
import './App.css'

class App extends Component {
  state = {
    doors: this.getRandomDoors()
  }

  getRandomDoors() {
    return [
      { text: 'Leise' },
      { text: 'rieselt' },
      { text: 'der Schnee' },
      { text: 'still' },
      { text: 'und kalt' },
      { text: 'ruht' },
      { text: 'der See' },
      { text: 'weihnachtlich' },
      { text: 'glänzet' },
      { text: 'der Wald' },
      { text: 'Freue dich' },
      { text: 'Christkind' },
      { text: 'kommt' },
      { text: 'bald' },
      { text: 'Foo' },
      { text: 'Foo' },
      { text: 'Foo' },
      { text: 'Foo' },
      { text: 'Hurra' },
      { text: 'Foo' },
      { text: 'Foo' },
      { text: 'Foo' },
      { text: 'Foo' },
      { text: 'Foo' }
    ]
      .map((item, index, arr) => ({
        ...item,
        num: index + 1,
        isOpen: false,
        total: arr.length,
        rand: Math.random()
      }))
      .sort((a, b) => a.rand - b.rand)
  }

  renderDoors() {
    return this.state.doors.map(door => (
      <Door key={door.num} {...door} onClick={() => this.openDoor(door.num)} />
    ))
  }

  openDoor = num => {
    const { doors } = this.state
    const index = doors.findIndex(d => d.num === num)
    const newDoors = [
      ...doors.slice(0, index),
      { ...doors[index], isOpen: true },
      ...doors.slice(index + 1)
    ]

    this.setState({
      doors: newDoors
    })
  }

  render() {
    const openDoorsNum = this.state.doors.filter(door => door.isOpen).length
    return (
      <React.Fragment>
        <Counter num={openDoorsNum} />
        {this.renderDoors()}
      </React.Fragment>
    )
  }
}

export default App

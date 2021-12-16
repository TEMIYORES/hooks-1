import React, { Component } from 'react'

class ClassMouse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
  }
  logMousePosition = (e) => {
    this.setState({ x: e.clientX, y: e.clientY });
  };
  componentDidMount(){
      console.log('mouse move')
    window.addEventListener('mousemove', this.logMousePosition)
  }
  componentWillUnmount(){
      window.removeEventListener('mousemove', this.logMousePosition)
  }
  render() {
      const {x,y} = this.state
    return <div>X : {x} and y : {y}</div>;
  }
}

export default ClassMouse


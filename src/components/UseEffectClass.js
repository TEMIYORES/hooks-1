import React, { Component } from 'react'

class UseEffectClass extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0,
             name:''
        }
    }
    incrementCount = () => {
        this.setState({count : this.state.count + 1})
    }
    componentDidMount(){
        document.title = `Clicked ${this.state.count} times`
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.count !== this.state.count){
        console.log('updating the state')
        document.title = `Clicked ${this.state.count} times`
        }
    }
    render() {
        const {count} = this.state
        return (
            <div>
            <input type="text" value={this.state.name} onChange={e => this.setState({name: e.target.value})}/>
                <button onClick={this.incrementCount}>Clicked {count} times</button>
            </div>
        )
    }
}

export default UseEffectClass

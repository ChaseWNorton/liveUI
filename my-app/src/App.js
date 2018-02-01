import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            back: [],
            current: '',
            forward: [],
        }
    }

    listenForChange(event) {
        this.setState({
            search: event.target.value,

        });
        console.log(this.state.search)
    }

    onSubmit() {

        this.setState({
            back: this.state.back.push(this.state.current),//NEVER DO THIS
            current: this.state.search,
            search: ''
        })
    }

    onClickBack(){
        this.setState({
            current: this.state.back.pop(),
        })
    }

  render() {
    return (
        <div className="start">
            <input onChange={this.listenForChange.bind(this)} type="text" className="search" placeholder="enter address here"></input>
            <button onClick={this.onSubmit.bind(this)}>submit</button>
            <div className="buttons">
                {console.log(this.state)}
                <button onClick={this.onClickBack.bind(this)}>Back</button>
                <button onClick={this.onClickBack.bind(this)}>Forward</button>
            </div>
            <div className="displays">
                <section className="backstack">{this.state.back}</section>
                <section className="current-display">{this.state.current}</section>
                <section className="forward">{this.state.forward}</section>
            </div>
        </div>
    );
  }
}

export default App;

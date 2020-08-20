import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Counters from './components/Counters';
import './App.css';

class App extends Component {

  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counters[index]}; // { id: 3, value: 1 }
    counters[index].value++;
    this.setState({ counters })
  }

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counters[index]}; // { id: 3, value: 1 }
    counters[index].value--;
    this.setState({ counters })
  }

  handleDelete = counterId => {
    const counters = this.state.counters.filter( c => c.id !== counterId);
    this.setState( { counters } )
  }

  handleReset = () => {
    const counters = this.state.counters.map( c => {
      c.value = 0;
      return c;
    })
    this.setState({counters});
  }

  handleRefresh = () => {
     window.location.reload();
  }

  render(){
    return (
      <div className="App">
        <Navbar totalCounter={ this.state.counters.filter( c => c.value > 0).length }></Navbar>
        <main className='container'>
            <Counters 
              counters={this.state.counters}
              onIncrement = {this.handleIncrement}
              onDecrement = {this.handleDecrement}
              onDelete={this.handleDelete} 
              onReset ={this.handleReset}
              onRefresh = {this.handleRefresh}
            />
        </main>
      </div>
    );
  }  
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Blogs from './components/Blogs';
import Post from './components/Post';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render(){
    return (
        <div className="App">
          <Navbar></Navbar>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/contact' component={Contact}></Route>
            <Route path='/blogs' component={Blogs} />
            {/* 
              Routing Paramater  localhost/20 -> fetches me post with id of 20 
              /blogs/1 post_id = blogs/1
            
            */}
            <Route path='/:post_id' component={Post} />
          </Switch>          
        </div>
    );
  }
}

export default App;

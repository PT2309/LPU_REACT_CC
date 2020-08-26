import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Category from './Category';
import Products from './Products';

function App() {
  return (
    <div className="App">
      <nav className='navbar navbar'>
        <ul className='nav navbar-menu'>
          <li>
              <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/category'>Category</Link>
          </li>
          <li>
                <Link to='/products'>Products</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        {/* Path-to-RegExp expression 
          Once path is matched  
          match Object 
            match.url 
            match.path 
            match.isExact 
            match.params
        */}
        <Route exact path='/' component={Home} /> 
        <Route path='/category' component={Category} />
        <Route path='/products' component={Products} />
        <Route path='/:id' render={() => (<p>render from route param</p>)} ></Route>
      </Switch>
    </div>
  );
}

export default App;

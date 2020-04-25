import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import pokemon from './assets/img/pokemon.jpg'

console.log('process.env.PUBLIC_URL', process.env.PUBLIC_URL)
console.log('process.env.REACT_APP_BASENAME', process.env.REACT_APP_BASENAME)

function App() {
  return (
    <Router basename={process.env.REACT_APP_BASENAME}>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <hr />


        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur in, ipsam maxime recusandae unde? Ab accusamus amet error laudantium nihil odit quam rem repellat repellendus sapiente. Commodi, in, nesciunt.</p>
      <img src={pokemon} alt='pokemon'/>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur in, ipsam maxime recusandae unde? Ab accusamus amet error laudantium nihil odit quam rem repellat repellendus sapiente. Commodi, in, nesciunt.</p>
      <img src={pokemon} alt='pokemon'/>
    </div>
  );
}


export default App;

import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
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
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur in, ipsam maxime recusandae unde? Ab accusamus amet error laudantium nihil odit quam rem repellat repellendus sapiente. Commodi, in, nesciunt.</p>
    </div>
  );
}


export default App;

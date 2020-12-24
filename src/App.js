import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { Menu, Container } from 'semantic-ui-react';
import NavMenu from './components/NavMenu';
import Home from './components/Home';
import About from './components/About'
import DataScience from './components/DataScience';

export default function App() {
  return (
    <Router>
      <NavMenu/>
      {/* <Menu>
        <Menu.Item as={Link} to='/'>
          Home
        </Menu.Item>
        <Menu.Item as={Link} to='/datascience'>
          Data Science
        </Menu.Item>
        <Menu.Item as={Link} to='/machinelearning'>
          Machine Learning
        </Menu.Item>
        <Menu.Item as={Link} to='/webdev'>
          Web Development
        </Menu.Item>
        <Menu.Item as={Link} to='/gamedev'>
          Game Development
        </Menu.Item>
      </Menu> */}
      <Switch>
        <Route path="/projects/art_sorting">
          <DataScience/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Nav from '../components/Nav'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <hr />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    )
  }
}

export default App

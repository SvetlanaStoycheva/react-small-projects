import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import SingleMovie from './SingleMovie'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/movies/:id'>
          <SingleMovie />
        </Route>
      </Switch>
    </Router>
  )
}

export default App

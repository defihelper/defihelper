import { HomePage, NotFoundPage } from 'pages'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App () {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='*' component={NotFoundPage} />
      </Switch>
    </Router>
  )
}

export default App

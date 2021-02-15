import React from 'react'
import styled from 'styled-components'
import { HomePage, NotFoundPage } from 'pages'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Theme from './themes'

const Wrapper = styled.div``

function App () {
  return (
    <Wrapper>
      <Theme.Provider>
        <Theme.GlobalStyle />
        <Router>
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='*' component={NotFoundPage} />
          </Switch>
        </Router>
      </Theme.Provider>
    </Wrapper>
  )
}

export default App

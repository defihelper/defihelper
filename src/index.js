import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyles } from './themes'
import App from './App'

import 'normalize.css/normalize.css'
import './fonts/fonts.css'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

import React from 'react'
import { Div } from './style'
import Router from './routes/Router'
import Card from './components/Card/Card'

function App() {
  return (
    <Div>
      <Router></Router>
      <Card />
    </Div>
  )
}

export default App

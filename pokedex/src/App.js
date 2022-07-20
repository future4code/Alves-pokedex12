import React from 'react'
import { Div } from './style'
import Router from './routes/Router'
import GlobalState from './global/GlobalState';

function App() {
  return (
   <Div>
     <GlobalState>
      <Router />
    </GlobalState>
   </Div>
  )
}

export default App

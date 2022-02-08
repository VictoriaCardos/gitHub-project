import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'
import { GlobalStyle } from './styles/global'
import { ContextProvider } from './context/index'
import Modal from 'react-modal'

Modal.setAppElement('#root') //isso é só pra acessibilidade

function App() {
  return (
    <ContextProvider>
      <Router>
        <GlobalStyle />
        <Routes />
      </Router>
    </ContextProvider>
  )
}

export default App

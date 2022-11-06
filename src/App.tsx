// liblary
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

// style
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// type

// components
// pages
import { Navigate } from './components/pages/Navigate/Navigate'
import { RouteList } from './components/pages/Route/RouteList/RouteList'

const App: React.FC = () => {
  // UI
  return (
    <BrowserRouter>
      <Navigate />
      <RouteList />
    </BrowserRouter>
  )
}

export default App

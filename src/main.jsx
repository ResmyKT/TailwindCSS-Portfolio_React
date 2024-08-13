import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from '../Header.jsx'
import Portfolio from './Portfolio.jsx'
import Foooter from './Foooter.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Header/>
    <Portfolio/>
    <Foooter/>
  </StrictMode>,
)

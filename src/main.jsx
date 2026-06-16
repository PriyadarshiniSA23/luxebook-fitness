import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/luxebook.css'
import App from './App.jsx'
import "./styles/tokens.css";

import { BookingProvider } from "./contexts/BookingContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookingProvider>
      <App />
    </BookingProvider>
  </StrictMode>,
)
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { HistoryProvider } from './context/HistoryContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <HistoryProvider>
        <App />
      </HistoryProvider>
    </BrowserRouter>
  ,
)

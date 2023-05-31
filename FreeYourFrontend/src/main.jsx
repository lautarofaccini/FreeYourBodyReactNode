import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.jsx'
import './index.css'
import UsersContextProvider from './context/UsersContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UsersContextProvider >
      <App />
    </UsersContextProvider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './router/router'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Reset } from 'styled-reset'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Reset/>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

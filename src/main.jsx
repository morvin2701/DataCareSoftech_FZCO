import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// gates the "hidden until revealed" styles so content is visible without JS
document.documentElement.classList.add('has-js')

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

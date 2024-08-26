import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Toaster} from "react-hot-toast"
import {Provider} from "react-redux"
import store from './redux/store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {store}>
    <App />
    <Toaster/>
    </Provider>
  </StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import './assets/scss/index.scss';
import {BrowserRouter} from 'react-router-dom'
import { StoreProvider } from './store/index.js';


ReactDOM.createRoot(document.getElementById('root')).render(
   <BrowserRouter>
     <StoreProvider>
      <App/>
     </StoreProvider>
   </BrowserRouter>
)

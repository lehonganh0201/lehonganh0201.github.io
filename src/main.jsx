import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import './assets/scss/index.scss';
import { HashRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import { store } from './store/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
   <HashRouter basename={import.meta.env.PUBLIC_URL}>
    <Provider store={store}>
      <App/>
    </Provider>
   </HashRouter>
)

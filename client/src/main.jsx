import './index.css'
import App from '../App'
import React from 'react'
import axios from 'axios'
import { store } from './redux/Store/store'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

// axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.baseURL = 'https://sport-planet-staff.vercel.app/'
// axios.defaults.baseURL = "https://sportsplanet-production.up.railway.app/";

import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Auth0Provider
        domain='dev-st1uijgryxovpoys.us.auth0.com'
        clientId='Mnhv7nkn8snaaR9XCwTda7Gb8QekVtQ3'
        authorizationParams={{
          redirect_uri: window.location.origin
        }}>
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </Provider>
)

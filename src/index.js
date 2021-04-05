import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import { BrowserRouter } from 'react-router-dom'
import { StrictMode } from 'react'
import { render } from 'react-dom'
import { StoreProvider } from 'redux/store';
import './styles/index.scss'

import App from './app/App'

render(
  <StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <App />
      </StoreProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
)

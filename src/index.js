import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import { StrictMode } from 'react'
import { render } from 'react-dom'
import './styles/index.scss'

import App from './app/App'
import BitFace from './utils/BitFace'

render(
  <StrictMode>
    <App />
    {/* <BitFace /> */}
  </StrictMode>,
  document.getElementById('root')
)

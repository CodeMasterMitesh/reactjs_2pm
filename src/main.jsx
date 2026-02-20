import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import {App} from './App.jsx'
import About from './About.jsx'
import {ContextApi} from './components/ContextApi.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextApi>
      <App/>
    {/* <About /> */}
    </ContextApi>
  </StrictMode>,
)

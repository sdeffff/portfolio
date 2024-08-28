import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as R} from 'react-router-dom'

import App from "./App";
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <R>
      <App />
    </R>
  </StrictMode>,
)
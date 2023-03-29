import React from 'react'
import ReactDOM from 'react-dom/client'

import { AppRouter } from './routers/AppRouter'

import 'semantic-ui-css/semantic.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter/>
  </React.StrictMode>,
)

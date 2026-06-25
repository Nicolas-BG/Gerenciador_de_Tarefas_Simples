import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home'
import MyGlobalStyles from './styles/globalstyles'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyGlobalStyles></MyGlobalStyles>
    <Home variavelzinha="Blabala"> </Home>
  </StrictMode>,
)

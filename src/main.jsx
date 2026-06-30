import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home'
import Page_finder from './Page_finder.jsx'
import MyGlobalStyles from './styles/globalstyles'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyGlobalStyles></MyGlobalStyles>
    <Page_finder></Page_finder>
  </StrictMode>,
)

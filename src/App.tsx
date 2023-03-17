
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { UserProvider } from './components/Contexts/UserContext'
import { Router } from './Router'

export default function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </UserProvider>
  )
}
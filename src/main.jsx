import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
  // All the code written in the App.jsx should be rendered here
createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<App/>}/>
 </Routes>
 </BrowserRouter>


)

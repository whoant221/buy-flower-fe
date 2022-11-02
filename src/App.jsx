import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from './pages/home';
import { DetailProduct } from './pages/detail-product';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">      
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}>
              </Route>
              <Route path="/product/:slug" element={<DetailProduct/>}>
              </Route>
            </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

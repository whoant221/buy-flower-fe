import { useState } from 'react'
import 'antd/dist/antd.css';
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from './pages/home';
import { Cart } from './pages/cart/index.jsx'
import { DetailProduct } from './pages/detail-product';
import { OrderInfo } from './pages/order-info/index'
import { ListProduct } from './pages/list-product'
import { Login } from './pages/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/product/:slug" element={<DetailProduct />}>
          </Route>
          <Route path="/cart" element={<Cart />}>
          </Route>

          <Route path="/orderinfo" element={<OrderInfo />}>
          </Route>

          <Route path="/listproduct" element={<ListProduct />}>
          </Route>

          <Route path="/login" element={<Login />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

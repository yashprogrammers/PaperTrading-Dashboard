import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Login from './Pages/Login.jsx';
import Signup from './Pages/Signup.jsx';
import Portfolio from './Pages/Portfolio.jsx';
import WatchList from './Pages/WatchList.jsx';
import Order from './Pages/Order.jsx';
import Holding from './Pages/Holding.jsx';
import Positions from './Pages/Positions.jsx';
import Wallet from './Pages/Wallet.jsx';
import NotFound from './Pages/NotFound.jsx';
import Search from './Pages/Search.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/portfolio' element={<Portfolio/>} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/watchlist' element={<WatchList/>} />
      <Route path='/orders' element={<Order/>} />
      <Route path='/holdings' element={<Holding/>} />
      <Route path='/positions' element={<Positions/>} />
      <Route path='/wallet' element={<Wallet/>} />
      <Route path='/search' element={<Search/>}/>
      <Route path='*' element={<NotFound/>} />
    </Routes>
  </BrowserRouter>
)

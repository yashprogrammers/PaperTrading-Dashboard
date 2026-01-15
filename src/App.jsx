import React from 'react'
import SideBar from './Pages/components/SideBar'
import Navbar from './Pages/components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Search from './Pages/Search'
import Portfolio from './Pages/Portfolio'
import WatchList from './Pages/WatchList'
import Holding from './Pages/Holding'
import NotFound from './Pages/NotFound'
import Order from './Pages/Order'
import Positions from './Pages/Positions'
import Wallet from './Pages/Wallet'
import './App.css'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="main">
        <SideBar />
        <div className="mainBar">
            <Routes>
              <Route path='/' element={<h1>Hello World!</h1>}/>
              <Route path='/search' element={<Search/>}/>
              <Route path='/watchlist' element={<WatchList/>}/>
              <Route path='/orders' element={<Order/>}/>
              <Route path='/holdings' element={<Holding/>}/>
              <Route path='/positions' element={<Positions/>}/>
              <Route path='/portfolio' element={<Portfolio/>}/>
              <Route path='/wallet' element={<Wallet/>}/>
            </Routes>
        </div>
      </div>
    </>
  )
}

export default App
import React from 'react'
import SideBar from './Pages/components/SideBar'
import Navbar from './Pages/components/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="main">
        <SideBar/>
      </div>
    </>
  )
}

export default App
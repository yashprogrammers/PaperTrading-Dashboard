import React from 'react'
import './css/Navbar.css'

const Navbar = () => {
  return (
    <header className="navbar">
      {/* Left */}
      <div className="nav-left">
        <div className="logo">
          <span className="material-icons logo-icon">show_chart</span>
          <span className="logo-text">PaperTrade</span>
        </div>
      </div>

      {/* Center */}
      <div className="nav-center">
        <span className="material-icons search-icon">search</span>
        <input
          type="text"
          placeholder="Search stocks, sectors, or indices..."
        />
      </div>

      {/* Right */}
      <div className="nav-right">
        <button className="icon-btn">
          <span className="material-icons">dark_mode</span>
        </button>

        <div className="profile">
          <div className="profile-info">
            <span className="name">Alex Rivera</span>
            <span className="role">Pro Trader</span>
          </div>
          <div className="avatar">A</div>
        </div>
      </div>
    </header>
  );
}

export default Navbar
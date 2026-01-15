import React from 'react'
import './css/SideBar.css'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <aside className="sidebar">
      <div className="menu">
        <Link to="/search"><SidebarItem icon="search" label="Search" /></Link>
        <Link to="/"><SidebarItem icon="pie_chart" label="Dashboard" active/></Link>
        <Link to="/watchlist"><SidebarItem icon="view_column" label="Watch List" /></Link>
        <Link to="/orders"><SidebarItem icon="inbox" label="Orders" /></Link>
        <Link to="/holdings"><SidebarItem icon="person" label="Holdings" /></Link>
        <Link to="/positions"><SidebarItem icon="lock" label="Positions" /></Link>
        <Link to="/portfolio"><SidebarItem icon="person" label="Profile" /></Link>
      </div>

      <div className="divider" />

      <div className="menu">
        <SidebarItem icon="workspace_premium" label="Upgrade to Pro" />
        <SidebarItem icon="description" label="Documentation" />
        <SidebarItem icon="help_outline" label="Settings" />
      </div>
    </aside>
  );
}

function SidebarItem({ icon, label, active }) {
  return (
    <div className={`item ${active ? "active" : ""}`}>
      <span className="material-icons">{icon}</span>
      <span className="text">{label}</span>
    </div>
  );
}

export default SideBar
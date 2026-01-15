import React from 'react'
import './css/SideBar.css'

const SideBar = () => {
  return (
    <aside className="sidebar">
      <div className="menu">
        <SidebarItem icon="pie_chart" label="Demo" />
        <SidebarItem icon="view_column" label="Watch List" />
        <SidebarItem icon="pie_chart" label="Dashboard" active/>
        <SidebarItem icon="inbox" label="Orders" />
        <SidebarItem icon="person" label="Holdings" />
        <SidebarItem icon="lock" label="Positions" />
        <SidebarItem icon="login" label="Search" />
        <SidebarItem icon="app_registration" label="Sign Up" />
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
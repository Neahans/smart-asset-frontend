import React from "react";
import { NavLink } from "react-router-dom";

import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <i className="bi bi-box-seam-fill"></i>
        <span>Smart Asset</span>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/dashboard" className="sidebar-link">
          <i className="bi bi-grid-1x2-fill"></i>
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/assets" className="sidebar-link">
          <i className="bi bi-pc-display"></i>
          <span>Assets</span>
        </NavLink>

        <NavLink to="/inventory" className="sidebar-link">
          <i className="bi bi-boxes"></i>
          <span>Inventory</span>
        </NavLink>

        <NavLink to="/tickets" className="sidebar-link">
          <i className="bi bi-ticket-detailed-fill"></i>
          <span>Tickets</span>
        </NavLink>

        <NavLink to="/profile" className="sidebar-link">
          <i className="bi bi-person-circle"></i>
          <span>Profile</span>
        </NavLink>
      </nav>

      <div className="sidebar-bottom">
        <NavLink to="/login" className="sidebar-link logout-link">
          <i className="bi bi-box-arrow-left"></i>
          <span>Logout</span>
        </NavLink>
      </div>
    </aside>
  );
}

export default Sidebar;
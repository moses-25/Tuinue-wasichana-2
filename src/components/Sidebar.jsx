import React from "react";
import "./Sidebar.css";

const Sidebar = ({ links = [], isOpen = true, onClose }) => {
  return (
    <aside className={`sidebar${isOpen ? " open" : ""}`}>
      <button className="sidebar-close-btn" onClick={onClose}>×</button>
      <ul className="sidebar-links">
        {links.map((link, i) => (
          <li key={i}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
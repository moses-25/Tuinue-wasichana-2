import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./MainLayout.css";

const MainLayout = ({ children, sidebarLinks = [], showSidebar = true }) => (
  <div className="main-layout">
    <Navbar />
    <div className="main-layout-body">
      {showSidebar && (
        <Sidebar links={sidebarLinks} isOpen={true} />
      )}
      <main className="main-layout-content">{children}</main>
    </div>
  </div>
);

export default MainLayout;
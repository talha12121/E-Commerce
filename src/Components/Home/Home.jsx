import React, { useState } from 'react';

const ResponsiveNavbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleDrawer}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">
          Your Logo
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Responsive Drawer */}
      {drawerOpen && (
        <div className="sidenav" style={{ width: drawerOpen ? '250px' : '0' }}>
          <a href="#" onClick={toggleDrawer}>
            Close Drawer
          </a>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      )}

      {/* Main Content */}
      <div className="container mt-4">
        <h1>Content Goes Here</h1>
      </div>
    </div>
  );
};

export default ResponsiveNavbar;

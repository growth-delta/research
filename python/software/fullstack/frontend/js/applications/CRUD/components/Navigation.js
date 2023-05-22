import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();

  return (
    <div className="p-8 container">
        <div className="tabs flex justify-center">
            <Link to="/"  className={`tab tab-lifted ${location.pathname === '/' ? 'tab-active' : ''}`}>
                Dashboard
            </Link>
            <Link to="/create"  className={`tab tab-lifted ${location.pathname === '/create' ? 'tab-active' : ''}`}>
                Create
            </Link>
        </div>
    </div>
  );
}

export default Navigation;

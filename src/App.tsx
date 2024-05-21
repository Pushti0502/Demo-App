import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div>
      <nav style={{ backgroundColor: '#333', padding: '1rem' }}>
        <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around', margin: 0, padding: 0 }}>
          <li style={{ margin: 0 }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 1rem' }}>Registration</Link>
          </li>
          <li style={{ margin: 0 }}>
            <Link to="/home" style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 1rem' }}>Home</Link>
          </li>
          <li style={{ margin: 0 }}>
            <Link to="/about" style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 1rem' }}>About</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;

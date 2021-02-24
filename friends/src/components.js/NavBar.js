import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import './../styles/NavBar.css';
function NavBar() {
  const history = useHistory();

  const logout = () => {
    axiosWithAuth()
      .post('/api/logout')
      .then(() => {
        localStorage.removeItem('token');
        history.push('/login');
      });
  };

  return (
    <div className="nav-bar">
      <ul className="nav-links">
        <li>
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/friends">
            Friends
          </Link>
        </li>
        <li>
          <Link className="nav-link" onClick={logout}>
            Log Out
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;

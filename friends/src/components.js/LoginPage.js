import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './../styles/LoginPage.css';

function LoginPage() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState('');

  const history = useHistory();

  const onChange = (evt) => {
    evt.preventDefault();
    setCredentials({
      ...credentials,
      [evt.target.name]: evt.target.value,
    });
    setError('');
  };

  const login = (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    axios
      .post('http://localhost:5000/api/login', credentials)
      .then((res) => {
        console.log(res);
        localStorage.setItem('token', JSON.stringify(res.data.payload));
        history.push('/friends');
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.response.data.error);
        setIsLoading(false);
      });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={login}>
        <label>
          Username
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={onChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={onChange}
          />
        </label>
        {!isLoading ? (
          <button className="login-btn">Log in</button>
        ) : (
          <button className="login-btn loading">Loading</button>
        )}
        {error && <p style={{ color: `red`, fontSize: '12px' }}>{error}</p>}
      </form>
    </div>
  );
}

export default LoginPage;

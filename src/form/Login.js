import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import cors from 'cors';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const payload = {
      username,
      password,
    };

    axios.post('http://localhost:8080/login', payload,
    // {
    //     headers : {
    //         'Access-Control-Allow-Origin': 'http://localhost:3000/'
    //     }
    // }
    )
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={event => setUsername(event.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;

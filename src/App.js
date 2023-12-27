import { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
 
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/users')
    .then(response => response.json())
    .then(data => setUsers(data))
    .then(err => console.log(err))
  },[])

  
 
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {
        users.map((user, i) => (
          <>
          <h2>{user.headline}</h2>
          <p>{user.body}</p>
          </>
        ))
      } 
        
    </div>
  );
}

export default App;

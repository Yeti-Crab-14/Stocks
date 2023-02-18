import React, { useState, useEffect } from 'react';
import SearchCont from './SearchCont';
import TotalPort from '../components/TotalPort';

function App() {
  // user is initialized as empty (unless login is implemented)
  const [user, setUser] = useState({});

  const fetchUserData = async () => {
    try {
      const response = await fetch('/api/user');
      const userData = await response.json();
      setUser(userData);
    } catch (err) {
      console.log('Error while trying to fetch user Data, ', err);
    }
  };
  useEffect(() => {
    fetchUserData();
  });

  return (
    <>
      <TotalPort user={user} />
      <SearchCont />
      <PortContainer user={user} />
    </>
  );
}

export default App;

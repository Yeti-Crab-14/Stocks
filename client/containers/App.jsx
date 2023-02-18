import React, { useState, useEffect } from 'react';
import SearchCont from './SearchCont';
import TotalPort from '../components/TotalPort';
import Profile from './Profile';

function App() {
  // user is initialized as empty (unless login is implemented)
  const [user, setUser] = useState({
    username: 'Angelo',
    profilePic:
      'https://static.vecteezy.com/system/resources/previews/011/415/728/original/christmas-snowman-cartoon-colored-clipart-free-vector.jpg',
  });
  const [netWorth, setNetWorth] = useState(5000);
  const [funds, setFunds] = useState(200);

  const fetchUserData = async () => {
    try {
      // fetch userInfo by username
      const response = await fetch('/api/user');
      const userData = await response.json();
      // userData + their port should be returned from backend
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
      <nav> THIS IS THE NAV BAR</nav>
      <div className="top-content">
        <TotalPort netWorth={netWorth} funds={funds} />
        <Profile user={user} />
      </div>
      <SearchCont />
    </>
  );
}

export default App;

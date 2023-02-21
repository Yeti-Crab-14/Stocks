import React, { useState, useEffect } from 'react';
import SearchCont from './SearchCont';
import TotalPort from './TotalPort';
import Profile from './Profile';
import PortfolioCont from './PortfolioCont';

function App() {
  // user is initialized as dummy user (unless login is implemented)
  const [user, setUser] = useState({
    username: 'Angelo',
    profilePic:
      'https://static.vecteezy.com/system/resources/previews/011/415/728/original/christmas-snowman-cartoon-colored-clipart-free-vector.jpg',
  });
  const [userPort, setUserPort] = useState([
    { symbol: 'AAPL', price: 222, qty: 5 },
    { symbol: 'MSFT', price: 222, qty: 10 },
    { symbol: 'TSLA', price: 222, qty: 15 },
  ]);
  const [netWorth, setNetWorth] = useState(5000);
  const [funds, setFunds] = useState(200);

  const fetchPrices = async () => {
    try {
      const realTimePort = await Promise.all(
        userPort.map(async (ticker, i) => {
          const response = await fetch(
            `https://api.iex.cloud/v1/data/core/quote/${ticker.symbol}?token=${process.env.REACT_APP_IEX_KEY}`
          );
          const parsedRes = (await response.json())[0];
          const newTickerVals = {
            symbol: ticker.symbol,
            qty: ticker.qty,
            price: parsedRes.iexRealtimePrice,
          };
          console.log('newTickerVals: ', newTickerVals);
          return newTickerVals;
        })
      );
      setUserPort(realTimePort);
    } catch (err) {
      console.log('Error in when making search request, ', err);
    }
  };

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
    fetchPrices();
  }, []);
  return (
    <>
      <nav> Stockssssss</nav>
      <div className="top-content">
        <TotalPort netWorth={netWorth} funds={funds} />
        <Profile user={user} />
      </div>
      <div className="search-cont">
        <SearchCont user={user} userPort={userPort} setUserPort={setUserPort} />
      </div>
      <div className="user-port">
        <PortfolioCont
          user={user}
          userPort={userPort}
          setUserPort={setUserPort}
        />
      </div>
    </>
  );
}
export default App;

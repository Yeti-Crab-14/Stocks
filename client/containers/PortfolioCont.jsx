import React from 'react';
import PortTicker from '../components/PortTicker';
import { useState, useEffect } from 'react';

function PortfolioCont({ user }) {
  const [userPort, setUserPort] = useState([
    { symbol: 'AAPL', price: 222 },
    { symbol: 'MSFT', price: 222 },
    { symbol: 'TSLA', price: 222 },
  ]);

  return (
    <section className="portfolio-container">
      PORT FOLIO
      {userPort.map((ticker, i) => (
        <PortTicker key={i} user={user} ticker={ticker} />
      ))}
    </section>
  );
}

export default PortfolioCont;

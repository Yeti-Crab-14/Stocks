import React from 'react';
import PortTicker from '../components/PortTicker';
import { useState, useEffect } from 'react';

function PortfolioCont({ user, userPort, setUserPort }) {
  return (
    <section className="portfolio-container">
      PORTFOLIO
      {userPort.map((ticker, i) => (
        <PortTicker
          key={i}
          user={user}
          ticker={ticker}
          setUserPort={setUserPort}
          userPort={userPort}
        />
      ))}
    </section>
  );
}

export default PortfolioCont;

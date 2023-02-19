import React from 'react';
import BuyButton from './BuyButton';


function PortTicker({ ticker, user }) {
  return (
    <section className="port-ticker-cont">
      <h3>{ticker.symbol}</h3>
      <h3>{ticker.price}</h3>
      <BuyButton user={user} />
    </section>
  );
}

export default PortTicker;

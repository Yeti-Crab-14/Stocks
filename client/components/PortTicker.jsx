import React from 'react';
import BuyButton from './BuyButton';
import SellButton from './SellButton';
import { useState } from 'react';

function PortTicker({ ticker, user }) {
  const [sellQty, setSellQty] = useState(1);
  return (
    <section className="port-ticker-cont">
      <h3>{ticker.symbol}</h3>
      <h3>{ticker.price}</h3>
      <h5>{ticker.qty}</h5>
      <BuyButton setSellQty={setSellQty} user={user} ticker={ticker} />
      <SellButton sellQty={sellQty} user={user} ticker={ticker} />
    </section>
  );
}

export default PortTicker;

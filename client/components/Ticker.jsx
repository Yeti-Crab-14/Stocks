import React from 'react';
import Button from '@mui/material/Button';

function Ticker({ stockSearch }) {
  console.log('stockSearch: ', stockSearch);
  // might have to use delayedPrice -- check when market opens
  const { iexClose, isUSMarketOpen, iexRealtimePrice, symbol } = stockSearch;
  // checks if market is open and assigns to real time price
  // otherwise will assign it to last closed price
  let stockPrice = iexRealtimePrice;
  if (!isUSMarketOpen) stockPrice = iexClose;
  return (
    <section className="ticker-info">
      <h4>{symbol}</h4>
      <h2>{stockPrice}</h2>
      <Button style={{ background: 'green' }}>BUY</Button>
    </section>
  );
}

export default Ticker;

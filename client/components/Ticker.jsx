import React from 'react';
import BuyButton from './BuyButton';

function Ticker({ stockSearch, user }) {
  // might have to use delayedPrice -- check when market opens
  console.log('stockSearch: ', stockSearch);
  const { iexClose, isUSMarketOpen, iexRealtimePrice, symbol } = stockSearch;

  // checks if market is open and assigns to real time price
  // otherwise will assign it to last closed price
  let stockPrice = iexRealtimePrice;
  if (!isUSMarketOpen) stockPrice = iexClose;
  return (
    <section className="ticker-info">
      <h4>{symbol}</h4>
      <h2>{stockPrice}</h2>
      <BuyButton symbol={symbol} user={user} />
    </section>
  );
}

export default Ticker;

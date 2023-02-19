import React from 'react';
import Button from '@mui/material/Button';

function SellButton({ user, ticker, sellQty }) {
  const onSell = async () => {
    // sending the buy request with quantity and symbol/ticker
    const { symbol } = ticker;
    const sellRequest = { symbol, sellQty };
    try {
      const response = await fetch(`api/${user.username}`, {
        method: 'PATCH',
        body: JSON.stringify(sellRequest),
        headers: { 'Content-Type': 'application/json' },
      });
      const parsedRes = await response.json();
      console.log('Your order has been placed. ', parsedRes);
    } catch (err) {
      console.log('Error in buy Request: ', err);
    }
  };
  return (
    <Button
      onClick={() => {
        onSell();
      }}
      variant="contained"
      style={{ background: 'red' }}
    >
      SELL
    </Button>
  );
}

export default SellButton;

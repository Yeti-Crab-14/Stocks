import React, { useState } from 'react';
import Button from '@mui/material/Button';

function BuyButton({ symbol, user }) {
  const [quantity, setQuantity] = useState(1);
  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  const onBuy = async () => {
    // sending the buy request with quantity and symbol/ticker
    const buyRequest = { symbol, quantity };
    try {
      const response = await fetch(`api/${user.username}`, {
        method: 'POST',
        body: JSON.stringify(buyRequest),
        headers: { 'Content-Type': 'application/json' },
      });
      const parsedRes = await response.json();
      console.log('Your order has been placed. ', parsedRes);
    } catch (err) {
      console.log('Error in buy Request: ', err);
    }
  };
  return (
    <>
      <input
        className="quantity-input"
        type="number"
        value={quantity}
        onChange={handleChange}
      />
      <Button
        onClick={() => {
          onBuy();
        }}
        variant="contained"
        style={{ background: 'green', marginTop: '1em' }}
      >
        BUY
      </Button>
    </>
  );
}

export default BuyButton;

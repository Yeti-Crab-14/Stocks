import React, { useState } from 'react';
import Button from '@mui/material/Button';

function BuyButton({
  symbol,
  user,
  setSellQty,
  userPort,
  setUserPort,
  stockPrice,
}) {
  const [quantity, setQuantity] = useState(1);
  const handleChange = (event) => {
    setQuantity(event.target.value);
    setSellQty(event.target.value);
  };

  const addToPort = (sym, quant) => {
    // function to check if ticker already exists in portfolio
    // adds to existing portfolio or creates new entry
    const newPortTicker = { symbol, qty: Number(quant), price: stockPrice };
    const newUserPort = [];
    let foundInPort = false;
    for (let i = 0; i < userPort.length; i++) {
      if (userPort[i].symbol === sym) {
        const newTickerVals = { ...userPort[i] };
        newTickerVals.qty += Number(quant);
        newUserPort.push(newTickerVals);
        foundInPort = true;
      } else {
        newUserPort.push(userPort[i]);
      }
    }
    if (!foundInPort) {
      newUserPort.push(newPortTicker);
    }
    return newUserPort;
  };
  const onBuy = async () => {
    // sending the buy request with quantity and symbol/ticker
    const buyRequest = { symbol, quantity };
    try {
      //   const response = await fetch(`api/${user.username}`, {
      //     method: 'POST',
      //     body: JSON.stringify(buyRequest),
      //     headers: { 'Content-Type': 'application/json' },
      //   });
      //   const parsedRes = await response.json();
      const newPort = addToPort(symbol, quantity);
      setUserPort(newPort);
      setQuantity(1);
      //   console.log('Your order has been placed. ', parsedRes);
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
        min="1"
      />
      <Button
        onClick={() => {
          onBuy();
        }}
        variant="contained"
        style={{ background: 'green' }}
      >
        BUY
      </Button>
    </>
  );
}

export default BuyButton;

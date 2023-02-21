import React from 'react';
import Button from '@mui/material/Button';

function SellButton({ user, ticker, sellQty, setUserPort, userPort }) {
  const userPortAfterSell = (sym, quant) => {
    const newPortValues = [];
    for (let i = 0; i < userPort.length; i++) {
      if (userPort[i].symbol === sym) {
        const soldTickerVals = { ...userPort[i] };
        if (Number(quant) > soldTickerVals.qty) {
          newPortValues.push(soldTickerVals);
          continue;
        }
        if (soldTickerVals.qty - Number(quant) === 0) {
          continue;
        } else {
          soldTickerVals.qty -= Number(quant);
          newPortValues.push(soldTickerVals);
        }
      } else {
        newPortValues.push(userPort[i]);
      }
    }
    return newPortValues;
  };
  const onSell = async () => {
    // sending the buy request with quantity and symbol/ticker
    const { symbol } = ticker;
    const sellRequest = { symbol, sellQty };
    try {
      // const response = await fetch(`api/${user.username}`, {
      //   method: 'PATCH',
      //   body: JSON.stringify(sellRequest),
      //   headers: { 'Content-Type': 'application/json' },
      // });
      // const parsedRes = await response.json();
      const newPortVals = userPortAfterSell(symbol, sellQty);
      setUserPort(newPortVals);
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

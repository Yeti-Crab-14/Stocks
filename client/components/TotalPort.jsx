import React from 'react';

function TotalPort({ netWorth, funds }) {
  return (
    <div className="total-port-cont">
      <h3>Total Net Worth: ${netWorth}</h3>
      <h4>Available Funds: ${funds}</h4>
    </div>
  );
}

export default TotalPort;

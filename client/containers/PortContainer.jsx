import React, { useState, useEffect } from "react";
import Ticker from "../components/Ticker";

/*
app
  -portfolio container
      - stocks in port
*/

// only want to render portfoio if we have stocks

function PortContainer(props) {
  // create a table of the stocks with company, #share, buy button, sellbutton as headers
  const [stocksTable, setNewStocksTable] = useState([]);

  // fetch data for table;
  const getStocksTable = async () => {
    try {
      const response = await fetch("http://localhost:3000")
      const jsonData = await response.json();
      setNewStocksTable(jsonData);
    } catch (err) {
      console.log("error with retrieving user's stocks");
    }
  };

  useEffect(() => {
    getStocksTable();
  }, []);

  return (
    <div id="port-cont">
      <p>Portfolio</p>
      <table id="port-table mt-30 text-center">
        <thead>
          <tr>
            <th>Company</th>
            <th>Shares</th>
            <th>Buy</th>
            <th>Sell</th>
          </tr>
        </thead>
      </table>
      <tbody>
        {stocksTable.map((entry) => (
          <tr key={entry.id}>
            <td>{entry.company}</td>
            <td>{entry.shares}</td>
            <td>Buy Button</td>
            <td>Sell</td>
          </tr>
        ))}
      </tbody>
    </div>
  );
}

export default PortContainer;

import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import React, { useState } from 'react';

function Search({ setStockSearch }) {
  const [ticker, setTicker] = useState('');
  const handleChange = (event) => {
    setTicker(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.iex.cloud/v1/data/core/quote/${ticker}?token=pk_0236a8ea0bac4b18b513eb96d690502c`
      );
      const tickerData = (await response.json())[0];
      setStockSearch(tickerData);
    } catch (err) {
      console.log('Error in when making search request, ', err);
    }
  };

  return (
    <>
      <TextField
        id="outlined-basic"
        label="Ticker"
        variant="outlined"
        name="search"
        value={ticker}
        onChange={handleChange}
      />
      <Button
        id="search-ticker-button"
        variant="outlined"
        endIcon={<SearchIcon />}
        onClick={() => {
          handleSearch();
        }}
        style={{ marginLeft: '2em' }}
      >
        Search
      </Button>
    </>
  );
}

export default Search;

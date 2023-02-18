import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import React from 'react';

function Search() {
  return (
    <>
      <TextField id="outlined-basic" label="Ticker" variant="outlined" />
      <Button variant="outlined" endIcon={<SearchIcon />}>
        Search
      </Button>
    </>
  );
}

export default Search;

import React, { useState } from 'react';
import Search from '../components/Search';
import Ticker from '../components/Ticker';

function SearchCont() {
  const [stockSearch, setStockSearch] = useState('');
  return (
    <section className="search-container">
      <Search setStockSearch={setStockSearch} />
      {stockSearch && <Ticker stockSearch={stockSearch} />}
    </section>
  );
}

export default SearchCont;

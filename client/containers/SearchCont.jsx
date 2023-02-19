import React, { useState } from 'react';
import Search from '../components/Search';
import Ticker from '../components/Ticker';

function SearchCont({ user }) {
  const [stockSearch, setStockSearch] = useState('');
  return (
    <>
      <section className="search-container">
        <Search setStockSearch={setStockSearch} />
      </section>
      {stockSearch && <Ticker user={user} stockSearch={stockSearch} />}
    </>
  );
}

export default SearchCont;

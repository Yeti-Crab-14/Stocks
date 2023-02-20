import React, { useState } from 'react';
import Search from '../components/Search';
import Ticker from '../components/Ticker';

function SearchCont({ user, userPort, setUserPort }) {
  const [stockSearch, setStockSearch] = useState('');
  return (
    <>
      <section className="search-container">
        <Search setStockSearch={setStockSearch} />
      </section>
      {stockSearch && (
        <Ticker
          user={user}
          userPort={userPort}
          setUserPort={setUserPort}
          stockSearch={stockSearch}
        />
      )}
    </>
  );
}

export default SearchCont;

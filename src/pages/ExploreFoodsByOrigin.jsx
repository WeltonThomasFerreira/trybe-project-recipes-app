import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

export default function ExploreFoodsByOrigin() {
  const title = 'Explorar Origem';

  // o Searchbar aqui é um dropdown
  return (
    <>
      <Header title={ title } searchBar={ <SearchBar /> } />
      ;
      <Footer />
    </>
  );
}

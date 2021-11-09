import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Profile() {
  const title = 'Perfil';

  const user = JSON.parse(localStorage.getItem('user'));

  const handleClick = () => {
    localStorage.clear();
  };

  return (
    <>
      <Header title={ title } />
      <h2 data-testid="profile-email">{ user.email }</h2>
      <Link to="/receitas-feitas">
        <button
          type="button"
          data-testid="profile-done-btn"
        >
          Receitas Feitas
        </button>
      </Link>
      <Link to="/receitas-favoritas">
        <button
          type="button"
          data-testid="profile-favorite-btn"
        >
          Receitas Favoritas
        </button>
      </Link>
      <Link to="/">
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ handleClick }
        >
          Sair
        </button>
      </Link>
      <Footer />
    </>
  );
}

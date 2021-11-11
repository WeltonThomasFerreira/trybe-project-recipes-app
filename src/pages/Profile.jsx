import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Profile() {
  const history = useHistory();
  const title = 'Perfil';
  const [email, setEmail] = useState('');

  useEffect(() => {
    const getEmail = async () => {
      const user = await JSON.parse(localStorage.getItem('user'));
      setEmail(user.email);
    };
    getEmail();
  });

  const handleClick = async () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <>
      <Header title={ title } />
      <main>
        <h2 data-testid="profile-email">{email}</h2>
        <Link to="/receitas-feitas">
          <button type="button" data-testid="profile-done-btn">
            Receitas Feitas
          </button>
        </Link>
        <Link to="/receitas-favoritas">
          <button type="button" data-testid="profile-favorite-btn">
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
      </main>
      <Footer />
    </>
  );
}

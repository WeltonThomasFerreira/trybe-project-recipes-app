import React from 'react';
import Login from '../components/Login';
import chiquem from '../images/chiquem.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css';

export default function Home() {
  return (
    <div className="meals home">
      <div className="logo">
        <img src={ chiquem } className="chiquem-logo" alt="logo" />
      </div>

      <main className="container-login-form">
        <p className="describe">Insira email e senha para acessar</p>
        <Login />
      </main>
    </div>
  );
}

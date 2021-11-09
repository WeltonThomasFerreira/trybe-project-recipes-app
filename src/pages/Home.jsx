import React from 'react';
import Login from '../components/Login';
// import rockGlass from '../images/rockGlass.svg';
import chiquem from '../images/chiquem.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css';

export default function Home() {
  return (
    <div className="meals home">
      <div className="logo">
        {/* <h1>TRYBE RECEITAS</h1> */}
        {/* <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
          Glass
        </object> */}
        <img src={ chiquem } className="chiquem-logo" alt="logo" />
      </div>

      <main className="container-login-form">
        {/* <h2 className="login">Login</h2> */}
        <p className="describe">Insira email e senha para acessar</p>
        <Login />
      </main>
    </div>
  );
}

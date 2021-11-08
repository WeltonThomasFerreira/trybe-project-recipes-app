import React from 'react';
import Login from '../components/Login';
import rockGlass from '../images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className="meals">
      <span className="logo">
        TRYBE RECEITAS
        <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
          Glass
        </object>
      </span>
      <hr />
      <main>
        <h2>Login</h2>
        <Login />
      </main>
    </div>
  );
}

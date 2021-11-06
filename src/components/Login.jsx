import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isLoginValid = () => {
    const MIN_LENGTH = 6;
    const isPasswordValid = password.length > MIN_LENGTH;
    const parseEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const isEmailValid = parseEmail.test(email);
    return isEmailValid && isPasswordValid;
  };

  const isDisabled = !isLoginValid();

  const handleSubmit = async () => {
    await localStorage.setItem('mealsToken', '1');
    await localStorage.setItem('cocktailsToken', '1');
    await localStorage.setItem(
      'user',
      JSON.stringify({
        email,
      }),
    );
    history.push('/comidas');
  };

  return (
    <>
      <h2>Login</h2>
      <form>
        <fieldset>
          <input
            data-testid="email-input"
            type="email"
            placeholder="email@email.com"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
          />
          <input
            data-testid="password-input"
            type="password"
            placeholder="senha"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
          />
          <button
            data-testid="login-submit-btn"
            disabled={ isDisabled }
            type="button"
            onClick={ handleSubmit }
          >
            Entrar
          </button>
        </fieldset>
      </form>
    </>
  );
}

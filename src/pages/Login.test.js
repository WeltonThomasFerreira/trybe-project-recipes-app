import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import Login from './Login';

describe('Testando component Login', () => {
  const emailInput = screen.getByTestId('email-input');
  const passwordInput = screen.getByTestId('password-input');
  const submitButton = screen.getByTestId('login-submit-btn');
  test('Renderização do campo e-mail, senha e botão', () => {
    render(<Login />);
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('Verifica se o botão desabilita após preenchimento correto', () => {
    render(<Login />);
    // Verifica se o botão está desabilitado com preenchimento incorreto
    userEvent.type(emailInput, 'email inválido');
    userEvent.type(passwordInput, 'errada');
    expect(submitButton).toBeDisabled();

    // Verifica se o botão habilita com preenchimento correto
    userEvent.type(emailInput, 'email@email.com');
    userEvent.type(passwordInput, '1234567');
    expect(submitButton).toBeEnabled();
  });

  test('Verifica se troca de página após preenchimento e click', () => {
    const history = createMemoryHistory();
    render(<Login history={ history } />);
    userEvent.type(emailInput, 'email@email.com');
    userEvent.type(passwordInput, '1234567');
    userEvent.click(submitButton);

    expect(history.location.pathname).toBe('/comidas');
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../pages/Home';
import renderWithRouter from './helpers/renderWithRouter';

const EMAIL_INPUT = 'email-input';
const PASSWORD_INPUT = 'password-input';
const LOGIN_SUBMIT_BTN = 'login-submit-btn';

describe('Testando component Login', () => {
  test('Renderização do campo e-mail, senha e botão', () => {
    render(<Home />);
    expect(screen.getByTestId(EMAIL_INPUT)).toBeInTheDocument();
    expect(screen.getByTestId(PASSWORD_INPUT)).toBeInTheDocument();
    expect(screen.getByTestId(LOGIN_SUBMIT_BTN)).toBeInTheDocument();
  });

  test('Verifica se o botão desabilita após preenchimento correto', () => {
    render(<Home />);
    const emailInput = screen.getByTestId(EMAIL_INPUT);
    const passwordInput = screen.getByTestId(PASSWORD_INPUT);
    const submitButton = screen.getByTestId(LOGIN_SUBMIT_BTN);
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
    const { history } = renderWithRouter(<Home />);
    const emailInput = screen.getByTestId(EMAIL_INPUT);
    const passwordInput = screen.getByTestId(PASSWORD_INPUT);
    const submitButton = screen.getByTestId(LOGIN_SUBMIT_BTN);
    userEvent.type(emailInput, 'email@email.com');
    userEvent.type(passwordInput, '1234567');
    userEvent.click(submitButton);

    expect(history.location.pathname).toBe('/comidas');
  });
});

import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.isEmailValid = this.isEmailValid.bind(this);
    this.setLocalStorage = this.setLocalStorage.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  setLocalStorage() {
    const { email } = this.state;
    const { history } = this.props;
    const user = { email };
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    localStorage.setItem('user', JSON.stringify(user));
    history.push('/comidas');
  }

  // This fuction verify if emails is valid
  isEmailValid(email) {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email) === true;
  }

  render() {
    const { email, password } = this.state;
    // I need make this because the lint want magic number
    const inputsLength = 6;
    // Verify if password has length bigger than 6 and if email is valid
    const disabled = password.length > inputsLength && this.isEmailValid(email);
    return (
      <>
        <input
          name="email"
          value={ email }
          data-testid="email-input"
          type="email"
          onChange={ this.handleChange }
        />
        <input
          name="password"
          value={ password }
          data-testid="password-input"
          type="password"
          onChange={ this.handleChange }
        />
        <input
          data-testid="login-submit-btn"
          type="button"
          value="Button"
          disabled={ !disabled }
          onClick={ this.setLocalStorage }
        />
      </>
    );
  }
}

Login.propTypes = {
  // eslint-disable-next-line react/require-default-props
  history: PropTypes.objectOf(PropTypes.any),
};

export default Login;

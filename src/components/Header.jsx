import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

const container = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
const titleStyle = { display: 'inline', padding: '20px' };

export default function Header(props) {
  const { title, searchBar } = props;
  const [showSearchBar, setShowSearchBar] = useState(false);

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  return (
    <header>
      <div style={ container }>
        <Link to="/perfil">
          <img
            data-testid="profile-top-btn"
            src={ profileIcon }
            alt="Ícone de perfil"
          />
        </Link>
        <h1 data-testid="page-title" style={ titleStyle }>
          {title}
        </h1>
        {searchBar && (
          <button type="button" onClick={ toggleSearchBar }>
            <img
              data-testid="search-top-btn"
              src={ searchIcon }
              alt="Lupa: Botão de pesquisa"
            />
          </button>
        )}
      </div>
      {showSearchBar && searchBar}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  searchBar: PropTypes.objectOf(PropTypes.any),
};

Header.defaultProps = {
  searchBar: null,
};

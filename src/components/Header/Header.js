import React from 'react';
import PropTypes from "prop-types";
import logo from "../../assets/images/logo.svg";
import './Header.scss';

const Header = (props) => {
    const { children } = props;
    return (
        <header className="header">
            <a href="/" className="header__logo">
                <img src={logo} className="header__logo__img" alt="logo" />
            </a>
            {children}
        </header>
    );
};

Header.propTypes = {
    children: PropTypes.node,
};

export default Header;

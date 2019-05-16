import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import './Header.scss';

const Header = (props) => {
    const { topNav } = props;
    return (
        <header className="header">
            <a href="/" className="header__logo">
                <img src={logo} className="header__logo__img" alt="logo" />
            </a>
            <div className="navigation">
                { topNav && topNav.length > 0 && (
                    <ul className="top-nav">
                        {topNav.map((item, key) => (
                            <li className="top-nav__item" key={key}>
                                <Link
                                    to={item.to}
                                    className={`top-nav__item__link ${item.isHighlighted ? 'top-nav__item__link--highlighted' : ''}`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </header>
    );
};

Header.propTypes = {
    topNav: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired,
        isHighlighted: PropTypes.bool,
    })),
};

Header.defaultProps = {
    topNav: [],
};

export default Header;

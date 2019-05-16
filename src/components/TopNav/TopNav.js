import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import './TopNav.scss';

const TopNav = (props) => {
    const { items } = props;

    if (!items || !items.length) return null;

    return (
        <ul className="top-nav">
            {items.map((item, key) => (
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
    );
};

TopNav.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired,
        isHighlighted: PropTypes.bool,
    })),
};

TopNav.defaultProps = {
    topNav: [],
};

export default TopNav;

import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import iconArrowUp from "../../assets/images/icon-arrow-up.svg";
import iconArrowDown from "../../assets/images/icon-arrow-down.svg";
import './RightNav.scss';

class RightNav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isDropdownOpen: false,
        };
    }

    render() {
        const {toggle, items, onToggle} = this.props;

        if (!toggle) return null;

        return (
            <div className="right-nav">
                <button
                    type="button"
                    className="right-nav__toggle"
                    aria-controls="right-nav-dropdown"
                    aria-expanded={this.state.isDropdownOpen}
                    onClick={() => this.setState(prevState => ({isDropdownOpen: !prevState.isDropdownOpen}))}
                >
                    <span className="right-nav__toggle__name">{toggle.current}</span>
                    <img src={this.state.isDropdownOpen? iconArrowUp : iconArrowDown} className="right-nav__toggle__img" alt="arrow" />
                </button>

                {this.state.isDropdownOpen && (
                    <div className="right-nav__dropdown" id="right-nav-dropdown">
                        <button
                            className="right-nav__dropdown__toggle"
                            onClick={() => {
                                onToggle();
                                this.setState(prevState => ({isDropdownOpen: !prevState.isDropdownOpen}));
                            }}
                        >
                            {toggle.alt}
                        </button>

                        <ul className="right-nav__dropdown__list">
                            {items.map((item, key) => (
                                <li className="right-nav__dropdown__list__item" key={key}>
                                    <Link
                                        to={item.to}
                                        className="right-nav__dropdown__list__item__link"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}

RightNav.propTypes = {
    toggle: PropTypes.shape({
        current: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
    }).isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired,
    })),
    onToggle: PropTypes.func.isRequired,
};

RightNav.defaultProps = {
    items: [],
};

export default RightNav;

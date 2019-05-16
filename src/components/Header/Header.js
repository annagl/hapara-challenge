import React, {Component} from 'react';
import logo from "../../assets/images/logo.svg";
import './Header.scss';
import TopNav from "../TopNav/TopNav";
import RightNav from "../RightNav/RightNav";

const MODES = {
    TEACHER: 'teacher',
    STUDENT: 'student',
};
const TEACHER_EMAIL = 'teacher@school.org';
const STUDENT_EMAIL = 'student@school.org';

const topNav = {
    [MODES.TEACHER]: [{
        name: 'Classes',
        to: '/',
        isActive: true,
    },{
        name: 'Lessons',
        to: '/lessons',
    },{
        name: 'Libraries',
        to: '/libraries',
    }],
    [MODES.STUDENT]: [{
        name: 'Classes',
        to: '/',
        isActive: true,
    }, {
        name: 'Assignments',
        to: '/assignments',
    }]
};

const rightNavItems = [{
    name: 'Settings',
    to: '/settings',
}, {
    name: 'Sign Out',
    to: '/sign-out',
}];

const rightNavToggle = {
    [MODES.TEACHER]: {
        current: TEACHER_EMAIL,
        alt: STUDENT_EMAIL
    },
    [MODES.STUDENT]: {
        current: STUDENT_EMAIL,
        alt: TEACHER_EMAIL
    },
};

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mode: MODES.TEACHER,
        };
    }

    handleModeToggle = () => this.setState((prevState) => {
        return {
            mode: prevState.mode === MODES.TEACHER ? MODES.STUDENT : MODES.TEACHER,
        };
    });

    render() {
        return (
            <header className="header">
                <a href="/" className="header__logo">
                    <img src={logo} className="header__logo__img" alt="logo"/>
                </a>
                <TopNav items={topNav[this.state.mode]}/>
                <RightNav
                    items={rightNavItems}
                    toggle={rightNavToggle[this.state.mode]}
                    onToggle={this.handleModeToggle}
                />
            </header>
        );
    }
}

export default Header;

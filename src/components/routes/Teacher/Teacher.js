import React from 'react';
import PropTypes from "prop-types";
import Header from '../../Header/Header';
import TopNav from '../../TopNav/TopNav';
import RightNav from '../../RightNav/RightNav';

const Teacher = () => {
    const topNav = [{
        name: 'Classes',
        to: '/classes',
        isHighlighted: true,
    },{
        name: 'Lessons',
        to: '/lessons',
    },{
        name: 'Libraries',
        to: '/libraries',
    }];

    const rightNavItems = [{
        name: 'Settings',
        to: '/settings',
    },{
        name: 'Sign Out',
        to: '/sign-out',
    }];

    const rightNavToggle = {
        currentName: 'teacher@school.org',
        name: 'student@school.org',
        to: '/student',
    };

    return (
        <React.Fragment>
            <Header>
                <TopNav items={topNav} />
                <RightNav items={rightNavItems} toggle={rightNavToggle} />
            </Header>
        </React.Fragment>
    );
};

Teacher.propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
};

export default Teacher;

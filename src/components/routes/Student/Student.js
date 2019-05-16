import React from 'react';
import PropTypes from "prop-types";
import Header from "../../Header/Header";
import TopNav from "../../TopNav/TopNav";
import RightNav from "../../RightNav/RightNav";

const Student = () => {
    const topNav = [{
        name: 'Classes',
        to: '/classes',
        isHighlighted: true,
    },{
        name: 'Assignments',
        to: '/assignments',
    }];

    const rightNavItems = [{
        name: 'Settings',
        to: '/settings',
    },{
        name: 'Sign Out',
        to: '/sign-out',
    }];

    const rightNavToggle = {
        currentName: 'student@school.org',
        name: 'teacher@school.org',
        to: '/',
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

Student.propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
};

export default Student;

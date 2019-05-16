import React from 'react';
import PropTypes from "prop-types";
import Header from '../../Header/Header';
import TopNav from '../../TopNav/TopNav';

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

    // const rightNav = [{
    //     name: 'student@school.org',
    //     to: '/student',
    //     isHighlighted: true,
    // },{
    //     name: 'Settings',
    //     to: '/settings',
    // },{
    //     name: 'Sign Out',
    //     to: '/sign-out',
    // }];

    return (
        <React.Fragment>
            <Header>
                <TopNav items={topNav} />
            </Header>
            <h1>Teacher</h1>
        </React.Fragment>
    );
};

Teacher.propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
};

export default Teacher;

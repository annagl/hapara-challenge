import React from 'react';
import PropTypes from "prop-types";
import Header from '../Header/Header';

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

    return (
        <React.Fragment>
            <Header topNav={topNav} />
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

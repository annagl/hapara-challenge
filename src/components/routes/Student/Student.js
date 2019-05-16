import React from 'react';
import PropTypes from "prop-types";
import Header from "../../Header/Header";
import TopNav from "../../TopNav/TopNav";

const Student = () => {
    const topNav = [{
        name: 'Classes',
        to: '/classes',
        isHighlighted: true,
    },{
        name: 'Assignments',
        to: '/assignments',
    }];

    return (
        <React.Fragment>
            <Header>
                <TopNav items={topNav} />
            </Header>
            <h1>Student</h1>
        </React.Fragment>
    );
};

Student.propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
};

export default Student;

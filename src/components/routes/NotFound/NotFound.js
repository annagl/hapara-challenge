import React from 'react';
import PropTypes from "prop-types";
import Header from '../../Header/Header';

const NotFound = () => {
    return (
        <React.Fragment>
            <Header/>
        </React.Fragment>
    );
};

NotFound.propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
};

export default NotFound;

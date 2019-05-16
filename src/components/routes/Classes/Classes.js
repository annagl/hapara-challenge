import React from 'react';
import PropTypes from "prop-types";
import Header from "../../Header/Header";

const Classes = () => {
    return (
        <React.Fragment>
            <Header/>
        </React.Fragment>
    );
};

Classes.propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
};

export default Classes;

import React from 'react';
import PropTypes from 'prop-types';

const Position = ({ children, position }) => {
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    );
};

Position.propTypes = {
    children: PropTypes.node.isRequired,
    position: PropTypes.oneOf(['left', 'right', 'top', 'bottom', 'main']).isRequired,
};

Position.defaultProps = {
    position: 'main',
};
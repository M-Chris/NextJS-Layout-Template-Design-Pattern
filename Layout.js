import React from 'react';
import PropTypes from 'prop-types';


const Layout = ({ children }) => {
    const left = React.Children.toArray(children).filter((child) => child.props.position === 'left').map((child) => child);
    const right = React.Children.toArray(children).filter((child) => child.props.position === 'right').map((child) => child);
    const top = React.Children.toArray(children).filter((child) => child.props.position === 'top').map((child) => child);
    const bottom = React.Children.toArray(children).filter((child) => child.props.position === 'bottom').map((child) => child);
    const main = React.Children.toArray(children).filter((child) => child.props.position === 'main').map((child) => child);
    return (
        <React.Fragment>
            <div className="left">{left}</div>
            <div className="right">{right}</div>
            <div className="top">{top}</div>
            <div className="bottom">{bottom}</div>
            <div className="main">{main}</div>
        </React.Fragment>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};


export default Layout;
import React from 'react';

import { isAuthenticated } from '../services/auth';
// import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

function RouteWrapper({
    redirectTo, isPrivate, component: Component, ...rest
}) {

    if (!isAuthenticated && isPrivate) return <Redirect to={redirectTo} />;

    return <Route {...rest} render={props => <Component {...props} />} />;
}

// RouteWrapper.propTypes = {
//     redirectTo: PropTypes.string,
//     isPrivate: PropTypes.bool,
//     component: PropTypes.element.isRequired,
// };

RouteWrapper.defaultProps = {
    redirectTo: '/login',
    isPrivate: false,
};

export default RouteWrapper;

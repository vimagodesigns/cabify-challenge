import React from 'react';
import PropTypes from 'prop-types';

const MainTitle = ({ children }) => <h1 className="main">{children}</h1>;

export default MainTitle;

MainTitle.propTypes = { children: PropTypes.node.isRequired };
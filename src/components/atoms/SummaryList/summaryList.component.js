import React from 'react';
import PropTypes from 'prop-types';

const SummaryListComponent = ({
    children,
    wrapperClassName,
    listClassName,
    title,
}) => (
    <div className={wrapperClassName}>
        {title && <h2>{title}</h2>}
        <ul className={listClassName}>
            {children}
        </ul>
    </div>
);

export default SummaryListComponent;

SummaryListComponent.propTypes = {
    children: PropTypes.node.isRequired,
    wrapperClassName: PropTypes.string,
    listClassName: PropTypes.string,
    title: PropTypes.string,
};

SummaryListComponent.defaultProps = {
    wrapperClassName: undefined,
    listClassName: undefined,
    title: undefined,
};
import React from 'react';

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
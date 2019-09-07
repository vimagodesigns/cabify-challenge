import React from 'react';

const SummaryListComponent = ({
    children,
    listClassName,
}) => (
    <div className="wrapper border">
        <ul className={listClassName}>
            {children}
        </ul>
    </div>
);

export default SummaryListComponent;
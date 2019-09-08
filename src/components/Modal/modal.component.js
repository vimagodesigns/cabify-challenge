import React from 'react';

import './modal.css';

const modal = ({ children }) => (
    <div className="modal">
        {children}
    </div>
);

export default modal;
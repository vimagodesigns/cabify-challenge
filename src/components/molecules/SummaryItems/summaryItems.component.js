import React from 'react';
import PropTypes from 'prop-types';

import SummaryListComponent from '../../atoms/SummaryList/summaryList.component';

const SummaryItemsComponent = ({ costWithoutDiscount, totalItems, currency }) => (
    <SummaryListComponent
        listClassName="summary-items"
        wrapperClassName="wrapper border"
    >
        <li>
            <span className="summary-items-number">{totalItems} Items</span>
            <span className="summary-items-price">
                {costWithoutDiscount} <span className="currency">{currency}</span>
            </span>
        </li>
    </SummaryListComponent>
);

export default SummaryItemsComponent;

SummaryItemsComponent.propTypes = {
    costWithoutDiscount: PropTypes.number.isRequired,
    totalItems: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
};
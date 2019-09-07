import React from 'react';

import SummaryListComponent from '../../components/SummaryList/summaryList.component';

const SummaryItemsContainer = ({
    itemsCount = 11,
    totalPrice = 120,
    currency = '€'
}) => {
    return (
        <SummaryListComponent>
            <li>
                <span className="summary-items-number">{itemsCount} Items</span>
                <span className="summary-items-price">
                    {totalPrice} <span className="currency">{currency}</span>
                </span>
            </li>
        </SummaryListComponent>
    )
};

export default SummaryItemsContainer;
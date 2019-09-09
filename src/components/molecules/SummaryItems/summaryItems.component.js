import React from 'react';

import SummaryListComponent from '../../atoms/SummaryList/summaryList.component';

const SummaryItemsComponent = ({ costWithoutDiscount, totalItems, currency }) => (
    <SummaryListComponent // NOTE if it is not a list, I wouldn't use a list here but a div. That needs some css changes. However, it is a shared component
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
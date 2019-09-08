import React from 'react';

import SummaryListComponent from '../../components/SummaryList/summaryList.component';
import { useStateValue } from '../../stateManagment/state';

const SummaryItemsContainer = () => {
    const [{ costWithoutDiscount, totalItems, currency }] = useStateValue();

    return (
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
    )
};

export default SummaryItemsContainer;
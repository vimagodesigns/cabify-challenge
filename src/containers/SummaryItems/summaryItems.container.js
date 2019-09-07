import React, { useGlobal } from 'reactn';

import SummaryListComponent from '../../components/SummaryList/summaryList.component';

const SummaryItemsContainer = () => {
    const [totalPrice] = useGlobal('costWithoutDiscount');
    const [totalItems] = useGlobal('totalItems');
    const [currency] = useGlobal('currency');

    return (
        <SummaryListComponent
            listClassName="summary-items"
            wrapperClassName="wrapper border"
        >
            <li>
                <span className="summary-items-number">{totalItems} Items</span>
                <span className="summary-items-price">
                    {totalPrice} <span className="currency">{currency}</span>
                </span>
            </li>
        </SummaryListComponent>
    )
};

export default SummaryItemsContainer;
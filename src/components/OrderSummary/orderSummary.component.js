import React from 'react';

import MainTitleComponent from '../MainTitle/mainTitle.component';
import SummaryItems from '../../containers/SummaryItems/summaryItems.container';
import SummaryDiscounts from '../../containers/SummaryDiscounts/summaryDiscounts.container';
import SummaryTotal from '../../containers/SummaryTotal/summary.total';

const orderSummaryComponent = props => {
    return (
        <aside className="summary">
            <MainTitleComponent>Order Summary</MainTitleComponent>
            <SummaryItems />
            <SummaryDiscounts />
            <SummaryTotal />
        </aside>
    );
};

export default orderSummaryComponent;
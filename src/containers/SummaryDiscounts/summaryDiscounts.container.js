import React from 'react';

import SummaryListComponent from '../../components/SummaryList/summaryList.component';
import { useStateValue } from '../../stateManagment/state';

const SummaryDiscountItems = ({
    discountLabel,
    discount
}) => {
    const [{ currency }] = useStateValue();

    const getDiscountString = () => {
        return discount === 0 ?
            `0${currency}` :
            `-${discount}${currency}`;
    }

    return (
        <li key={discountLabel}>
            <span>{discountLabel}</span><span>{getDiscountString()}</span>
        </li>
    );
}

const SummaryDiscountsContainer = () => {
    const [{ scannedProducts }] = useStateValue();
    const scannedProductsKeys = Object.keys(scannedProducts);

    const mapSummaryDiscounts = () => (
        scannedProductsKeys
            .filter((key) => scannedProducts[key].discountLabel !== '')
            .map((key) => SummaryDiscountItems(scannedProducts[key]))
    );

    return (
        <SummaryListComponent
            listClassName="summary-discounts"
            wrapperClassName="wrapper-half border"
            title="Discounts"
        >
            {mapSummaryDiscounts()}
        </SummaryListComponent>
    )
};

export default SummaryDiscountsContainer;
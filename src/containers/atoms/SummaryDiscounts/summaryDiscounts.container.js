import React from 'react';

import { useStateValue } from '../../../stateManagment/state';

import SummaryListComponent from '../../../components/atoms/SummaryList/summaryList.component';
import SummaryDiscountItemComponent from '../../../components/atoms/SummaryDiscountItem/summaryDiscountItem.component';

const SummaryDiscountsContainer = () => {
    const [{ scannedProducts }] = useStateValue();
    const [{ currency }] = useStateValue();
    const scannedProductsKeys = Object.keys(scannedProducts);

    const getDiscountString = (discount) => {
        return discount === 0 ?
            `0${currency}` :
            `-${discount}${currency}`;
    }

    return (
        <SummaryListComponent
            listClassName="summary-discounts"
            wrapperClassName="wrapper-half border"
            title="Discounts"
        >
            {
                scannedProductsKeys
                    .filter((key) => scannedProducts[key].discountLabel !== '')
                    .map((key) => (
                        <SummaryDiscountItemComponent
                            key={key}
                            getDiscountString={getDiscountString}
                            {...scannedProducts[key]}
                        />
                    ))
            }
        </SummaryListComponent>
    )
};

export default SummaryDiscountsContainer;
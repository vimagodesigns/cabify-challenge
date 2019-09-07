import React, { useGlobal } from 'reactn';

import SummaryListComponent from '../../components/SummaryList/summaryList.component';

const SummaryDiscountItems = ({
    discountLabel,
    discount
}) => {
    const [currency] = useGlobal('currency');

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
    const [scannedProducts] = useGlobal('scannedProducts');
    const scannedProductsKeys = Object.keys(scannedProducts);

    const mapSummaryDiscounts = () => (
        scannedProductsKeys
            .filter((key) => scannedProducts[key].discountLabel !== '')
            .map((key) => SummaryDiscountItems(scannedProducts[key]))
    );
            
            
            
            // (discountProps) => SummaryDiscountItems(discountProps)

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
import { TSHIRT, MUG } from "../constants/products.constants";
import { discountByQuantity, discountTwoForOne } from "../utils/pricingRules.utils";

export const pricingRules = {
    [TSHIRT]: {
        rule: ({ quantity }) => discountByQuantity({
            productquantity: quantity, 
            minQuantity: 3, 
            productDiscount: 1,
        }),
        label: 'x3 Shirt offer',
    },
    [MUG]: {
        rule: ({ quantity, price}) => discountTwoForOne({
            productquantity: quantity,
            productPrice: price,
        }) ,
        label: '2x1 Mug offer'
    },
};

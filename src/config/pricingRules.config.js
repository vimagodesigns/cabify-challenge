import { TSHIRT, MUG } from "../constants/products.constants";

export const pricingRules = {
    [TSHIRT]: {
        rule: (product) => {
            const { quantity } = product;
            const shirtDiscount = 1;
            const discount = quantity < 3 ? 0 : shirtDiscount;

            return quantity === 3 ?
                discount * 3 :
                discount;
        },
        label: 'x3 Shirt offer',
    },
    [MUG]: {
        rule: (product) => {
            const { quantity, price } = product;
            const isDiscountable = quantity % 2 === 0 && quantity > 1;
            const discount = isDiscountable ?  price : 0;

            return discount; 
        },
        label: '2x1 Mug offer'
    },
};

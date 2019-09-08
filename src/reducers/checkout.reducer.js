export const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS';
export const SELECT_PRODUCT = 'SELECT_PRODUCT';
export const RESET_SELECT_PRODUCT = 'RESET_SELECT_PRODUCT';
export const SET_MODAL_COMPONENT = 'SET_MODAL_COMPONENT';
export const CLOSE_MODAL_COMPONENT = 'CLOSE_MODAL_COMPONENT';

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_PRODUCTS:
            const checkout = state.checkout;
            return {
                ...state,
                costWithoutDiscount: checkout.totalWithoutDiscount,
                costWithDiscount: checkout.total(),
                totalItems: checkout.totalItems,
                scannedProducts: checkout.scannedProducts,
            };
            
        case SELECT_PRODUCT:
            return {
                ...state,
                productSelected: action.payload, 
            };
            
        case RESET_SELECT_PRODUCT:
            return {
                ...state,
                productSelected: {}, 
            };
        
        case SET_MODAL_COMPONENT:
            return {
                ...state,
                modalComponentList: [
                    action.payload,
                    ...state.modalComponentList,
                ]
            };
        
        case CLOSE_MODAL_COMPONENT:
            const newModalComponentList = state.modalComponentList
                .filter((component) => component !== action.payload);
            return {
                ...state,
                modalComponentList: newModalComponentList,
            };
        
        default:
            return state;
    }
};
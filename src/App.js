import React from 'react';
import './App.css';

import { Checkout } from './services/Checkout.class';
import { pricingRules } from './config/pricingRules.config';
import { StateProvider } from './stateManagment/state';
import Main from './containers/molecules/Main/main.container';
import { reducer } from './reducers/checkout.reducer';

const checkout = new Checkout(pricingRules);

function App() {
  const initialState = {
    checkout,
    productList: checkout.productList,
    costWithoutDiscount: 0,
    costWithDiscount: 0,
    totalItems: 0,
    currency: '€',
    scannedProducts: checkout.scannedProducts,
    modalList: [],
    productSelected: {},
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Main />
    </StateProvider>
  );
}

export default App;

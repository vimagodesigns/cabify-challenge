import React from 'react';
import './App.css';

import Products from './containers/Products/products.container';
import OrderSummaryComponent from './components/OrderSummary/orderSummary.component';

function App() {
  return (
    <main className="App">
      <Products />
      <OrderSummaryComponent />
    </main>
  );
}

export default App;

// App.js
import React, { useContext } from 'react';

import { CartContext, CartProvider } from './context/CartContext';
import ProductList from './components/ProductList';

function App() {
  const{amount} = useContext(CartContext);
  return (
    <>
    <div>
      <h3 style={{color:'black',marginLeft:'45%',marginTop:'3%'}}>Amount of items:{amount}</h3>
    </div>
    <body>
      <ProductList />
    </body>
    </>
  );
}

export default App;

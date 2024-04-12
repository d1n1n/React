import { createContext, useState } from 'react';

export const CartContext = createContext({
  amount: '',
  setAmount: () => null,
  clearAmount: () => null,
  IncreaseAmount: () => null
});

export const CartProvider = ({ children }) => {
  const [amount, setAmount] = useState('');

  const clearAmount = () => {
    setAmount('');
  };
  const IncreaseAmount = () =>{
    setAmount(parseInt(amount + 1));
  }

  const value = {
    amount,
    setAmount,
    clearAmount,
    IncreaseAmount
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

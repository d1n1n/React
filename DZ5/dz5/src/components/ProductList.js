import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';

export default function ProductList() {
  const { setAmount,IncreaseAmount  } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset  
  } = useForm();

  const onSubmit = (product) => {
    const { name, price, amount } = product;
    setAmount(amount);
    IncreaseAmount();
    setProducts([...products, { name, price, amount }]);
    reset();  
  };

  return (
    <>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name</label>
          <input {...register("name")} type="text" name="name" />
        </div>
        <div>
          <label>Price</label>
          <input {...register("price")} type="number" name="price" />
        </div>
        <div>
          <label>Amount</label>
          <input {...register("amount")} type="number" name="amount" />
        </div>
        <div>
          <button type="submit">Add product</button>
        </div>
      </form>

      <h2>Product List</h2>
      <ul>
        {products.map((u) => (
          <li key={u.id}>
            Name: {u.name}, Price: {u.price}, Amount: {u.amount}
          </li>
        ))}
      </ul>
    </>
  );
}

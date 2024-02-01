import React from 'react';
import './Product.css';

function Product({id, header, image, price, basket, setBasket}) {
  
  const product = {id, header, price}
  
  function AddToBasket() {
    const index = basket.findIndex(value => value.id === product.id)
    
    if (index === -1) {
      return (
      <>
      <button onClick={() => setBasket([...basket, product])}>В корзину</button>
      </>
      )  
      
    } else {
      const newBasket = basket.filter(value => value.id !== product.id);
      return (
        <>
        <button onClick={() => setBasket(newBasket)}>Удалить из корзины</button>
        </>
      )  
    }
  }


  return (
    <div className="Product" key={id}>
      <div></div>
      <h1>{header}</h1>
      <p>{ `${price} руб` }</p>
      <AddToBasket/>
      
    </div>
  );
}

export default Product;
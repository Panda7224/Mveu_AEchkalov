import React, {useState, useEffect} from 'react';
import './Main.css';
import Product from '../components/Product';
import image from '../images/product.jpg'

function Main({setModalBox, basket, setBasket}) {

  const[products, setProducts] = useState([])

  useEffect(() => {

    const api = 'http://localhost:9001/products'

  fetch(api)
  .then(result => result.json())
  .then((result) => {
    console.log(result)
    setProducts(result.data)
  })
    
  }, [])

  return (
    <div className="Main">
      { products.map((item) => <Product key={item._id} id={item._id} header={item.header} image={item.image} price={item.price} setModalBox={setModalBox} basket={basket} setBasket={setBasket} />) }
    </div>
  );
}

export default Main;
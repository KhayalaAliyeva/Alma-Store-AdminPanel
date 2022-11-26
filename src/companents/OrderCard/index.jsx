import React from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

// constants
import { baseUrl } from '../../utils/constants';
import "./index.scss"
const OrderCard = ({number, items}) => {
  const deleteItem = (id, e) => {
    e.preventDefault();
    axios.delete(`${baseUrl}/order/${id}`).then((response) => {});
  };
  return (
    <div className="order-card">
        <p className="order-number">Order number:{number}</p>
        {items.map((product)=>(
          <div key={product.id} className="order-product">
            <h3>{product.name.slice(0, 25)}...</h3>
            <p>Product code: {product.code}</p>


            <span className="details">
              <Link to={`/details/${product.id}`}>Details</Link>
            </span>
            
          </div>
          
        ))}

    </div>
  )
}

export default OrderCard
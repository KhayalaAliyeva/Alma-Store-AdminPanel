import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { baseUrl } from '../../utils/constants'

// companents
import OrderCard from '../../companents/OrderCard'

import "./index.scss"

const Order = () => {
  const[orderData, setOrderData]=useState([])
useEffect(()=>{
    // products
    axios.get(`${baseUrl}/orders`).then((response)=>{
      setOrderData(response.data.data);
    console.log(response.data.data)
    })
    

  },[])
  return (
    <div className="orders-page">
      <div className="container">
        <h1>Orders</h1>
        <div className="order-cards">
          {orderData.map((item, index)=>(
            <OrderCard key={item.id} number={Math.floor(Math.random() * 100)} items={item}/>
          ))}
        </div>

      </div>
      
    </div>
  )
}

export default Order
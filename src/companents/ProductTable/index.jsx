import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";

// constants
import { baseUrl } from '../../utils/constants';

// styles
import "./index.scss"

const ProductTable = (data) => {
  // const[show, setShow]=useState(true);
  const[productData, setProductData]=useState([])
useEffect(()=>{
    // products
    axios.get(`${baseUrl}/macbook-pro-data`).then((response)=>{
      setProductData(response.data.data);
    // console.log(response.data)
    })
    
    

  },[])
  const deleteItem = (id, e) => {
    e.preventDefault();
    axios.delete(`${baseUrl}/macbook-pro/${id}`).then((response) => {});
  };
  return (
    <div>
        <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Code</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {productData.map((item,index)=>(
            
                <tr key={index}>
                    <td >{item.id}</td>
                    <td >{item.code}</td>
                    <td >{item.name}</td>
                    <td >{item.price} AZN</td>
                    <td >
                    <span className="details">
                        <Link to={`/details/${item.id}`}>Details</Link>
                    </span>/
                    <span className="delete" onClick={(e)=>deleteItem(item.id, e)}>Delete</span>
                    </td>
                </tr>

              
              
            ))}
          
        </tbody>
      </table>
    </div>
  )
}

export default ProductTable
import React,{useState, useEffect} from 'react'
import {Link, useParams} from  "react-router-dom";
import axios from "axios";

import { baseUrl } from '../../utils/constants';
// mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import "./index.scss"
const Details = () => {
    const [productData, setProductData]=useState([]);
    let {id}=useParams();
    useEffect(()=>{
        axios.get(`${baseUrl}/macbook-pro/${id}`).then((response)=>{
          setProductData(response.data.data);
        })
    },[])
    console.log(productData)
  return (
    <div className="details-page">
        <Card className="details-card">
        <CardMedia
        component="img"
        image={productData.img}
        alt="product"
        className='product-img'
      />
      <CardContent>
      
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Product code: {productData.code}
        </Typography>
        <Typography variant="h5" component="div">
          {productData.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Price: {productData.price}
        </Typography>
      </CardContent>
    </Card>
    </div>
  )
}

export default Details
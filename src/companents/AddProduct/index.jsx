import React,{useState} from "react";
import axios from "axios";
import swal from "sweetalert";

// constant
import {baseUrl} from "../../utils/constants"

// styles
import "./index.scss"
const AddProduct = () => {

  // const [baseImage, setBaseImage] = useState("");

  const [product, setProduct]=useState({
    id:"",
    img:"",
    name:"",
    code:"",
    price:"",  
    vat:"",
    new:"show",
    promo:"",
    exclusive:"",
  })
  
  const handleChange=(e)=>{
    
    uploadImage();
    setProduct({...product,[e.target.name]:e.target.value});
    

  }
  const addData=()=>{
    axios.post(`${baseUrl}/add-product`,product).then((response)=>{
      swal({
        title: "Product added successfully",
        
        icon: "success",
    });
      if(response.status===201){
        
        // window.location.reload(true);
        console.log(product);  
      }
    })
  }
 

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setProduct({...product,[e.target.name]:base64});
    // setBaseImage(base64)
    // setProduct({...product.img,baseImage});
    
  };

  

const{ id, img, name, price, code, vat}=product;
  return (
    <div className="form-page">
        <div className="form">
            <span>Add Product</span>
            <input type="text" placeholder="ID" name="id" value={id} onChange={handleChange}/>
            <input type="text" placeholder="NAME" name="name" value={name} onChange={handleChange}/>
            <input type="text" placeholder="CODE" name="code" value={code} onChange={handleChange}/>
            <input type="number" placeholder="PRICE" name="price" value={price} onChange={handleChange}/> 
            <input type="number" placeholder="VAT" name="vat" value={vat} onChange={handleChange}/>
            <input type="file" onChange={uploadImage} name="img"  />
            <button onClick={addData}>Add Product</button>
        </div>
    </div>
  )
};

export default AddProduct;
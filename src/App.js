import { Routes, Route, Navigate} from "react-router-dom";
import { useState, useEffect } from "react";

// pages
import SignInUp from "./pages/SignInUp";
import Product from "./pages/Product";
import Order from "./pages/Order";
import Home from "./pages/Home";
import Details from "./pages/Details"
// companents
import Header from "./companents/Header";
// style
import './app.scss';

function App() {
  const [auth, setAuth] = useState(null);
  useEffect(()=>{
    let user = localStorage.getItem("user");
    user && JSON.parse(user) ? setAuth(true) : setAuth(false);
    const token=localStorage.getItem("token")
    if(token){
      setAuth(true)
    }
    else{
      setAuth(false)
    }
  },[]);
  return (
    <div className="app">
      <Header signOut={()=>{
            setAuth(false)
            localStorage.removeItem('token')
          }}/>
      <Routes>
        {!auth && (
        <>
        <Route
            path="/sign-in"
            element={<SignInUp authenticate={() => setAuth(true)} />}
          />

        </>
        
      )}
      {auth && (
        <>
          <Route path="/" element={<Home/>}/>
          <Route path="/order" element={<Order/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/details/:id" element={<Details/>}></Route>

        </>
        
      )} 
      <Route path="*" element={<Navigate to={
          auth ? "/" : "/sign-in"} />} />
      </Routes>
    
      
    </div>
  );
}

export default App;

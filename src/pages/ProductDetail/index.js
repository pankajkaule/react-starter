import React, { useEffect,useState,useContext } from "react";
import ProductDetails_c from "../../stories/containers/ProductDetails_c/ProductDetails";
import { getProductData } from "../../services/apis/products";
import { useParams } from 'react-router-dom';

import { CartContext } from "../../context/cart";
import * as actions from "../../actionTypes";

const ProductDetails = () => {
  const [data, setData] = useState([]);
  let {id} = useParams();
  const { cartState,cartDispatch } = useContext(CartContext);



  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductData(id);
      console.log(data);
      setData(data);
    };

    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
   console.log(cartState);
   
  }, [cartState])
  

  const addToCart=(product)=>{
    console.log(product);
    
    cartDispatch({
      type: actions.ADDPRODUCT,
      payload:product
    });
  }
  return (
    <>
    
 
      <ProductDetails_c Product_details_data={data} addToCart={addToCart}   />
    </>
  );
};

export default ProductDetails;

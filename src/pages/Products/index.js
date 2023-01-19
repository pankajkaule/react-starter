import React, { useEffect, useState } from "react";

import Products_c from "../../stories/containers/Products/Products_c";
import { getProductsData } from "../../services/apis/products";

const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductsData();
      setData(data);
    };

    fetchData().catch(console.error);
  }, []);
  return (
    <>
  
      <Products_c Product_data={data} />
    </>
  );
};

export default Products;

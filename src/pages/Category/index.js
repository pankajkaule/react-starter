import React, { useEffect, useState } from "react";
import ProductSubcategory from "../../stories/containers/ProductSubcategory/ProductSubcategory";
import { getSubCategoryData } from "../../services/apis/menu";

const Category = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getSubCategoryData();
      setData(data);
    };

    fetchData().catch(console.error);
  }, []);
  return (
    <>
      <ProductSubcategory data={data} />
    </>
  );
};

export default Category;

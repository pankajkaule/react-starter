import {productsData,ProductData} from '../../dummyData/Menu';



 export const getProductsData = async () => {
	try {
	  return productsData;
	} catch (e) {
	  console.log(e);
	}
  };

  export const getProductData = async (id) => {
	try {
		console.log(id);
		
	const selectedProduct=	productsData.filter((product)=>product.id==id)
	console.log(selectedProduct);
	
	return selectedProduct[0];
	} catch (e) {
	  console.log(e);
	}
  };
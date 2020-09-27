/** @format */
import axios from "axios";

async function getProductData(id) {
  const productData = await axios.get(`http://localhost:5000/products/product/${id}`);
  console.log(productData);
  return productData;
}
const productDetailsReducer = async (productDetails = {}, action) => {
  switch (action.type) {
    case "fetchData":
      const data = await getProductData(action.payload);
      console.log(data);
      return data;

    default:
      return { h: "nothings loaded" };
  }
};

export default productDetailsReducer;

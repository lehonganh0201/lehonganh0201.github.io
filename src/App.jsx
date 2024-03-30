import { useEffect, useState } from "react";
import axios from "axios";
import Item from "./components/Item";

function App() {
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   const apiUrl = "https://dummyjson.com/products";
  //   const fetchData = async () => {
  //     const data = await axios.get(apiUrl);
  //     setProducts(data.data.products)
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      {/* <div>
        {products.map((product) => (
          <div key={product.id}>
            <div>{product.id}</div>
            <div>{product.title}</div>
            <div>{product.description}</div>
            <div>{product.discountPercentage}</div>
          </div>
        ))}
      </div> */}

      <Item/>
    </>
  );
}

export default App;

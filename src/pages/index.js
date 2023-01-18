import { useEffect, useState } from "react";

export default function Home() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((json) => setAllProducts(json.products));
  }, []);

  return (
    <>
      <div>
        {allProducts.map((product) => {
          return (
            <div key={product.id}>
              <li>{product.name}</li>
              <p>$ {product.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export const getAllProducts = (...args) => {
  return fetch(...args).then((res) => res.json());
};

export const createProduct = async (product) => {
  let info = {
    name: product.name,
    code: product.code,
    sales: product.sales,
    price: product.price,
    stock: product.stock,
  };

  const res = await fetch("/api/products/", {
    method: "POST",
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify(info),
  });

  const data = await res.json();
  console.log(data);
  return data;
};

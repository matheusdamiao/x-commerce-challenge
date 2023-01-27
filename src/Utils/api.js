export const getAllProducts = async (...args) => {
  return await fetch(...args).then((res) => res.json());
};

export const createProduct = async (product) => {
  let info = {
    name: product.name,
    code: product.code,
    sales: Number(product.sales),
    price: Number(product.price),
    stock: Number(product.stock),
  };

  const res = await fetch("/api/products/", {
    method: "POST",
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify(info),
  });

  if (res.status === 201) {
    const data = await res.json();
    return data;
  }
};

export const createFavoriteProduct = async (product) => {
  let info = {
    // id: product.id,
    name: product.name,
    code: product.code,
    sales: Number(product.sales),
    price: Number(product.price),
    stock: Number(product.stock),
  };

  const res = await fetch("/api/favorites/", {
    method: "POST",
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify(info),
  });

  if (res.status === 201) {
    const data = await res.json();
    console.log(data);
    return data;
  }
};

export const deleteFavoriteProduct = async (productName) => {
  let name = productName;

  const res = await fetch(`/api/favorites/${name}`, {
    method: "DELETE",
    headers: { "Content-type": "application/json;charset=UTF-8" },
  });

  if (res.status === 204) {
    return res;
  } else {
    throw new Error("Ocorreu um erro");
  }
};

export const getMostSoldProducts = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (!data) {
    throw new Error("Ocorreu um erro");
  }

  return data;
};

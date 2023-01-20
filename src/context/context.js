import { createContext, useState } from "react";

export const AppContext = createContext();

export const Context = ({ children }) => {
  const [allProducts, setAllproducts] = useState([]);
  // const [allFavoriteProducts, setAllFavoriteProducts] = useState([]);
  // const [allMostSoldProducts, setAllMostSoldProducts] = useState([]);

  return (
    <AppContext.Provider
      value={{
        allProducts,
        setAllproducts,
        // Products: { allProducts, setAllproducts },
        // FavoriteProducts: { allFavoriteProducts, setAllFavoriteProducts },
        // MostSoldProducts: { allMostSoldProducts, setAllMostSoldProducts },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

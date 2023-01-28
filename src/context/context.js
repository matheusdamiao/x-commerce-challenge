import { createContext, useState } from "react";

export const AppContext = createContext();

export const Context = ({ children }) => {
  const [allProducts, setAllproducts] = useState([]);
  const [allFavoriteProducts, setAllFavoriteProducts] = useState([]);
  const [allMostSoldProducts, setAllMostSoldProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  return (
    <AppContext.Provider
      value={{
        Products: { allProducts, setAllproducts },
        FavoriteProducts: { allFavoriteProducts, setAllFavoriteProducts },
        MostSoldProducts: { allMostSoldProducts, setAllMostSoldProducts },
        Search: { searchValue, setSearchValue },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

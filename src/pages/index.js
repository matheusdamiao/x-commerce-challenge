import { useContext, useEffect, useState } from "react";
import Header from "./../components/Header";
import AllProducts from "./../components/AllProducts";
import FavoriteProducts from "./../components/FavoriteProducts";
import MostSoldProducts from "./../components/MostSoldProducts";
import SearchResult from "./../components/SearchResult";

import { WrapperContent } from "@/styles/Home/style";
import { Toaster } from "react-hot-toast";
import { AppContext } from "@/context/context";

export default function Home() {
  const [displayAllProducts, setDisplayAllProducts] = useState(true);
  const [hasSearchInput, setHasSearchInput] = useState(false);
  const context = useContext(AppContext);
  const { Search } = context;
  const { searchValue } = Search;

  useEffect(() => {
    checkSearchValue(searchValue);
  }, [searchValue]);

  const checkSearchValue = async () => {
    if (searchValue === "") {
      setHasSearchInput(false);
    } else {
      setHasSearchInput(true);
    }
  };

  return (
    <div>
      <Toaster toastOptions={{ position: "bottom-center" }} />
      <Header
        setDisplayAllProducts={setDisplayAllProducts}
        displayAllProducts={displayAllProducts}
      />
      <WrapperContent>
        <MostSoldProducts />
        {!hasSearchInput ? (
          displayAllProducts ? (
            <AllProducts />
          ) : (
            <FavoriteProducts />
          )
        ) : (
          <SearchResult />
        )}
      </WrapperContent>
    </div>
  );
}

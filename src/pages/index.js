import { useEffect, useState } from "react";
import Header from "./../components/Header";
import AllProducts from "./../components/AllProducts";
import FavoriteProducts from "./../components/FavoriteProducts";

import { WrapperContent } from "@/styles/Home/style";
import { Toaster } from "react-hot-toast";

export default function Home() {
  const [displayAllProducts, setDisplayAllProducts] = useState(true);

  return (
    <div>
      <Toaster toastOptions={{ position: "bottom-center" }} />
      <Header
        setDisplayAllProducts={setDisplayAllProducts}
        displayAllProducts={displayAllProducts}
      />
      <WrapperContent>
        {displayAllProducts ? <AllProducts /> : <FavoriteProducts />}
      </WrapperContent>
      <div></div>
    </div>
  );
}

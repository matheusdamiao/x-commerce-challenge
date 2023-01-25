import { AppContext } from "@/context/context";
import { createFavoriteProduct, getAllProducts } from "@/Utils/api";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { BsHeart, BsSuitHeartFill } from "react-icons/bs";
import useSWR, { mutate } from "swr";

const index = ({ product }) => {
  //State and data
  const context = useContext(AppContext);
  const { Products, FavoriteProducts } = context;
  const { allFavoriteProducts, setAllFavoriteProducts } = FavoriteProducts;
  const { data: favorites } = useSWR("/api/favorites", getAllProducts);

  const [isFavorite, setIsFavorite] = useState(null);

  // functions
  const addFavorite = async (prod) => {
    try {
      const favoriteProduct = await createFavoriteProduct(prod);
      console.log(favoriteProduct.favorite);
      if (favoriteProduct.favorite) {
        await mutate("/api/favorites", { ...favorites, favoriteProduct });
        toast.success("Produto favoritado!");
        setIsFavorite(true);
      }
    } catch (e) {
      toast.error("Ops, ocorreu algum erro. Tente novamente");
    }
  };

  const deleteFavorite = async (prod) => {
    try {
    } catch (error) {}
  };

  useEffect(() => {
    isProductFavorite(product, favorites);
    console.log(favorites?.favorites);
  }, [favorites]);

  //render component logic:
  // if the product is inside favorites array from database, render
  // a red heart icon, otherwise render an empty heart icon
  const isProductFavorite = async (prod, fav) => {
    const allFavorites = await fav;
    console.log(prod);
    if (allFavorites !== undefined) {
      let checkProduct = allFavorites.favorites.some((e) => e.id === prod.id);
      console.log(checkProduct);
      if (checkProduct === true) {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
      return;
    }
  };

  return (
    <>
      {isFavorite === true ? (
        <BsSuitHeartFill
          stroke="black"
          size="20"
          style={{ color: "red" }}
          onClick={() => deleteFavorite(product)}
        />
      ) : (
        <BsHeart
          size="20"
          style={{ cursor: "pointer", stroke: "10" }}
          onClick={() => addFavorite(product)}
        />
      )}
    </>
  );
};

export default index;

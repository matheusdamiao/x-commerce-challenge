import { AppContext } from "@/context/context";
import {
  createFavoriteProduct,
  deleteFavoriteProduct,
  getAllProducts,
} from "@/Utils/api";
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

  const [isFavorite, setIsFavorite] = useState(false);

  // functions
  const addFavorite = async (prod) => {
    try {
      const favoriteProduct = await createFavoriteProduct(prod);
      console.log(favoriteProduct.favorite);
      if (favoriteProduct.favorite) {
        await mutate("/api/favorites", { ...favorites, favoriteProduct });
        toast.success("Produto favoritado!");
      }
    } catch (e) {
      toast.error("Ops, ocorreu algum erro. Tente novamente favorito");
    }
  };

  const deleteFavorite = async (name) => {
    try {
      const deleteFavorite = await deleteFavoriteProduct(name);
      if (deleteFavorite) {
        await mutate("/api/favorites", { ...favorites });
        toast.success("Produto removido dos favoritos!");
        console.log(isFavorite);
      }
    } catch (e) {
      toast.error("Ops, ocorreu algum erro. Tente novamente");
    }
  };

  useEffect(() => {
    isProductFavorite(product, favorites);
    console.log(favorites?.favorites);
  }, [favorites]);

  //render component logic:
  // if one of the favorite products' name inside favorites array matches the product's name we're receiving as props,
  // render a red heart icon, otherwise render an empty heart icon.
  const isProductFavorite = async (prod, fav) => {
    const allFavorites = await fav;
    console.log(prod);
    if (allFavorites !== undefined) {
      let isProductFavorite = allFavorites.favorites.some(
        (e) => e.name === prod.name
      );
      console.log(isProductFavorite);
      if (isProductFavorite === true) {
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
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => deleteFavorite(product.name)}
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

import { AppContext } from "@/context/context";
import { getAllProducts } from "@/Utils/api";
import React, { useContext, useEffect, useState } from "react";
import useSWR from "swr";
import {
  HeaderCell,
  Table,
  TableBody,
  TableData,
  TableHead,
  TableRow,
  TableRowHeader,
  Title,
} from "../AllProducts/style";
import FavoriteProduct from "./../FavoriteProduct/index.jsx";

import { Wrapper } from "./style";

const index = () => {
  const context = useContext(AppContext);
  const { FavoriteProducts } = context;
  const { allFavoriteProducts, setAllFavoriteProducts } = FavoriteProducts;
  const { data, error, isLoading } = useSWR("/api/favorites", getAllProducts);

  useEffect(() => {
    setAllFavoriteProducts([data]);
    console.log(allFavoriteProducts);
  }, [data]);

  if (error) {
    return <Wrapper>Ops, aconteceu um erro</Wrapper>;
  }

  if (isLoading) {
    return <Wrapper>Carregando...</Wrapper>;
  }

  return (
    <Wrapper>
      <Title>Todos os favoritos</Title>
      <Table>
        <TableHead>
          <TableRowHeader>
            <HeaderCell>IDENTIFICAÇÃO</HeaderCell>
            <HeaderCell>PREÇO</HeaderCell>
            <HeaderCell>VENDAS </HeaderCell>
            <HeaderCell>ESTOQUE</HeaderCell>
          </TableRowHeader>
        </TableHead>
        <TableBody>
          {data.favorites.length != 0 ? (
            data.favorites.map((product) => {
              return (
                <TableRow key={product.id}>
                  <TableData id="identificacao">
                    <div id="pictureBox">
                      <img src="/logoPNG.png" alt="" />
                    </div>
                    <div id="nameAndCode">
                      <p>{product.name}</p>
                      <small>#{product.code}</small>
                    </div>
                  </TableData>
                  <TableData> $ {product.price}</TableData>
                  <TableData id="sold">
                    <p>{Math.floor(product.price * product.sales)}</p>
                    <small>{product.sales} vendas</small>
                  </TableData>
                  <TableData>{product.stock} und</TableData>
                  <TableData>
                    <FavoriteProduct product={product} />
                  </TableData>
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <TableData> No favorite products </TableData>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Wrapper>
  );
};

export default index;

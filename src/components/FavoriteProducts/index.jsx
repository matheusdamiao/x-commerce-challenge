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
import FavoriteProduct from "../FavoriteProductButton/index.jsx";

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
      <Table aria-label="FavoriteProducts" role="table">
        <TableHead role="rowgroup">
          <TableRowHeader role="row">
            <HeaderCell role="columnheader">IDENTIFICAÇÃO</HeaderCell>
            <HeaderCell role="columnheader">PREÇO</HeaderCell>
            <HeaderCell role="columnheader">VENDAS </HeaderCell>
            <HeaderCell role="columnheader">ESTOQUE</HeaderCell>
          </TableRowHeader>
        </TableHead>
        <TableBody role="rowgroup">
          {data.favorites.length != 0 ? (
            data.favorites.map((product) => {
              return (
                <TableRow role="row" key={product.id}>
                  <TableData role="cell" id="identificacao">
                    <div id="pictureBox">
                      <img src="images/logoPNG.png" alt="" />
                    </div>
                    <div id="nameAndCode">
                      <p>{product.name}</p>
                      <small>#{product.code}</small>
                    </div>
                  </TableData>
                  <TableData role="cell"> $ {product.price}</TableData>
                  <TableData role="cell" id="sold">
                    <p>Total de {Math.floor(product.price * product.sales)}</p>
                    <small>{product.sales} vendas</small>
                  </TableData>
                  <TableData role="cell">{product.stock} und</TableData>
                  <TableData role="cell">
                    <FavoriteProduct product={product} />
                  </TableData>
                </TableRow>
              );
            })
          ) : (
            <TableRow role="row">
              <TableData role="cell">
                {" "}
                Você ainda não possui produtos favoritados.{" "}
              </TableData>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Wrapper>
  );
};

export default index;

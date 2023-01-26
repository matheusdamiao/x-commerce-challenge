import React, { useContext, useEffect, useState } from "react";
import useSWR, { mutate } from "swr";
import { BsHeart, BsSuitHeartFill } from "react-icons/bs";
import {
  Wrapper,
  Title,
  TableHead,
  TableRow,
  TableRowHeader,
  HeaderCell,
  TableBody,
  Table,
  TableData,
} from "./style";
import FavoriteProduct from "./../FavoriteProduct/index.jsx";
import { createFavoriteProduct, getAllProducts } from "@/Utils/api";
import { AppContext } from "@/context/context";
import { toast } from "react-hot-toast";

const index = () => {
  const context = useContext(AppContext);
  // Local state and its update function
  const { Products, FavoriteProducts } = context;
  const { allProducts, setAllproducts } = Products;
  const { allFavoriteProducts, setAllFavoriteProducts } = FavoriteProducts;

  const { data, error, isLoading } = useSWR("/api/products", getAllProducts);

  const { data: favorites } = useSWR("/api/favorites", getAllProducts);

  // every time data is updated, we also update our global state
  useEffect(() => {
    setAllproducts([data]);
    // console.log(data?.products);
  }, [data]);

  useEffect(() => {
    setAllFavoriteProducts([favorites]);
    // console.log(favorites?.favorites);
  }, [favorites]);

  if (error)
    return (
      <Wrapper>
        <Title>Todos os produtos</Title>
        <Table>
          <TableHead>
            <TableRowHeader>
              <HeaderCell>
                {" "}
                Ops, ocorreu algum erro na requisição ao servidor.
              </HeaderCell>
            </TableRowHeader>
          </TableHead>
        </Table>
      </Wrapper>
    );

  if (isLoading)
    return (
      <Wrapper>
        <Title>Todos os produtos</Title>
        <Table>
          <TableHead>
            <TableRowHeader>
              <HeaderCell>carregando...</HeaderCell>
            </TableRowHeader>
          </TableHead>
        </Table>
      </Wrapper>
    );

  return (
    <Wrapper>
      <Title>Todos os produtos</Title>
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
          {data.products.length != 0 ? (
            data.products.map((product) => {
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
                  <TableData>{product.sales} vendas</TableData>
                  <TableData>{product.stock} und</TableData>
                  <TableData>
                    <FavoriteProduct product={product} />
                  </TableData>
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <TableData> No products </TableData>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Wrapper>
  );
};

export default index;

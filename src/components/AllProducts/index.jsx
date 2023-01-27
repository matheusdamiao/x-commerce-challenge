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
  WrapperHeaderProducts,
  PagesAllProducts,
  TableData,
} from "./style";
import FavoriteProduct from "./../FavoriteProduct/index.jsx";
import { getAllProducts } from "@/Utils/api";
import { AppContext } from "@/context/context";
import { ArrowLeft, ArrowRight, PageButtons } from "../MostSoldProducts/style";

const index = () => {
  const context = useContext(AppContext);
  // Local state and its update function
  const { Products, FavoriteProducts } = context;
  const { allProducts, setAllproducts } = Products;
  const { allFavoriteProducts, setAllFavoriteProducts } = FavoriteProducts;

  const { data: products } = useSWR("/api/products", getAllProducts);
  const [pageIndex, setPageIndex] = useState(1);
  const { data, error, isLoading, mutate } = useSWR(
    `api/productsPaginated?page=${pageIndex}&limit=5`,
    getAllProducts
  );

  // This is commented-out code, because right now we are not using our global state
  //
  // Logic: every time product or favorite products are updated, we also update their respective global states
  //
  // const { data: favorites } = useSWR("/api/favorites", getAllProducts);
  //
  // useEffect(() => {
  //   setAllproducts([data]);
  //   // console.log(data?.products);
  // }, [data]);

  // useEffect(() => {
  //   setAllFavoriteProducts([favorites]);
  //   // console.log(favorites?.favorites);
  // }, [favorites]);

  useEffect(() => {
    // make a new request to the api whenever products' database is changed
    mutate(`api/productsPaginated?page=${pageIndex}&limit=5`);
  }, [products]);

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
      <WrapperHeaderProducts>
        <Title>Todos os produtos</Title>
        <PageButtons>
          <ArrowLeft
            role="button"
            onClick={
              pageIndex !== 1
                ? () => setPageIndex(pageIndex - 1)
                : () => setPageIndex(data?.totalPages)
            }
          />
          <ArrowRight
            role="button"
            onClick={
              data?.totalPages !== pageIndex
                ? () => setPageIndex(pageIndex + 1)
                : () => setPageIndex(1)
            }
          />
        </PageButtons>
      </WrapperHeaderProducts>
      <Table aria-label="AllProducts" role="table">
        <TableHead role="rowgroup">
          <TableRowHeader role="row">
            <HeaderCell role="columnheader">IDENTIFICAÇÃO</HeaderCell>
            <HeaderCell role="columnheader">PREÇO</HeaderCell>
            <HeaderCell role="columnheader">VENDAS </HeaderCell>
            <HeaderCell role="columnheader">ESTOQUE</HeaderCell>
          </TableRowHeader>
        </TableHead>
        <TableBody role="rowgroup">
          {data?.result?.length != 0 ? (
            data?.result?.map((product) => {
              return (
                <TableRow role="row" key={product.id}>
                  <TableData role="cell" id="identificacao">
                    <div id="pictureBox">
                      <img src="/logoPNG.png" alt="" />
                    </div>
                    <div id="nameAndCode">
                      <p>{product.name}</p>
                      <small>#{product.code}</small>
                    </div>
                  </TableData>
                  <TableData role="cell"> $ {product.price}</TableData>
                  <TableData role="cell" id="sold">
                    <p> Total de {Math.floor(product.price * product.sales)}</p>
                    <small>{product.sales} vendas</small>
                  </TableData>
                  <TableData role="cell">{product.stock} und</TableData>
                  <TableData role="cell">
                    <FavoriteProduct role="button" product={product} />
                  </TableData>
                </TableRow>
              );
            })
          ) : (
            <TableRow role="row">
              <TableData role="cell"> No products </TableData>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <PagesAllProducts>
        Página {pageIndex} de {data?.totalPages}
      </PagesAllProducts>
    </Wrapper>
  );
};

export default index;

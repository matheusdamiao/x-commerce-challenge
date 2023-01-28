import { AppContext } from "@/context/context";
import { getAllProducts } from "@/Utils/api";
import React, { useContext, useState } from "react";
import useSWR, { mutate } from "swr";
import {
  HeaderCell,
  PagesAllProducts,
  Table,
  TableBody,
  TableHead,
  TableData,
  TableRowHeader,
  Title,
  Wrapper,
  WrapperHeaderProducts,
  TableRow,
} from "../AllProducts/style";
import { ArrowLeft, ArrowRight, PageButtons } from "../MostSoldProducts/style";
import FavoriteProduct from "../FavoriteProductButton/index.jsx";

const index = () => {
  const context = useContext(AppContext);
  const { Search } = context;
  const { searchValue } = Search;

  const [pageIndex, setPageIndex] = useState(1);

  const { data, error, isLoading } = useSWR(
    `api/products/name?search=${searchValue}&page=${pageIndex}&limit=5`,
    getAllProducts
  );

  if (error)
    return (
      <Wrapper>
        <Title>Busca com a palavra "{searchValue}"</Title>
        <Table>
          <TableHead>
            <TableRowHeader>
              <HeaderCell>
                {" "}
                Ops, ocorreu algum erro na requisição ao servidor. Tente
                novamente
              </HeaderCell>
            </TableRowHeader>
          </TableHead>
        </Table>
      </Wrapper>
    );

  if (isLoading)
    return (
      <Wrapper>
        <Title>Busca com a palavra "{searchValue}"</Title>
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
        <Title>Os resultados para sua busca de "{searchValue}"</Title>
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
              <TableData role="cell"> Nenhum produto encontrado! </TableData>
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

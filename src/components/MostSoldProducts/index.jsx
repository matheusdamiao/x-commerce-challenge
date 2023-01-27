import React, { useEffect, useState } from "react";
import {
  WrapperMostSoldProducts,
  Title,
  WrapperHeader,
  ArrowRight,
  ArrowLeft,
  PageButtons,
  WrapperContent,
  ProductCard,
  Image,
  Values,
  Name,
  Pages,
} from "./style";
import useSWR from "swr";
import { getAllProducts } from "@/Utils/api";

const index = () => {
  const { data: products } = useSWR("/api/products", getAllProducts);

  const [pageIndex, setPageIndex] = useState(1);
  const { data, mutate, error, isLoading } = useSWR(
    `/api/productsPaginated?page=${pageIndex}&limit=6`,
    getAllProducts
  );

  useEffect(() => {
    // make a new request to the api whenever products' database is changed
    mutate(`/api/productsPaginated?page=${pageIndex}&limit=6`);
  }, [products]);

  if (error) {
    return (
      <WrapperMostSoldProducts>
        <WrapperHeader>
          <Title>Mais vendidos</Title>
          <PageButtons>
            <ArrowLeft />
            <ArrowRight />
          </PageButtons>
        </WrapperHeader>
        <WrapperContent>Ops, aconteceu um erro</WrapperContent>
      </WrapperMostSoldProducts>
    );
  }

  if (isLoading) {
    return (
      <WrapperMostSoldProducts>
        <WrapperHeader>
          <Title>Mais vendidos</Title>
          <PageButtons>
            <ArrowLeft />
            <ArrowRight />
          </PageButtons>
        </WrapperHeader>
        <WrapperContent>carregando...</WrapperContent>
      </WrapperMostSoldProducts>
    );
  }

  return (
    <WrapperMostSoldProducts>
      <WrapperHeader>
        <Title>Mais vendidos</Title>
        <PageButtons>
          <ArrowLeft
            onClick={
              pageIndex !== 1
                ? () => setPageIndex(pageIndex - 1)
                : () => setPageIndex(data?.totalPages)
            }
          />
          <ArrowRight
            onClick={
              data?.totalPages !== pageIndex
                ? () => setPageIndex(pageIndex + 1)
                : () => setPageIndex(1)
            }
          />
        </PageButtons>
      </WrapperHeader>
      <WrapperContent>
        {data?.result?.length != 0 ? (
          data?.result?.map((product) => {
            return (
              <ProductCard key={product.id}>
                <Image>
                  <img src="/logoPNG.png" alt="" />
                </Image>
                <Values>
                  <p>R$ {product.price}</p>
                  <small>{product.sales} vendas</small>
                </Values>
                <Name>{product.name}</Name>
              </ProductCard>
            );
          })
        ) : (
          <> Nenhum produto cadastrado! </>
        )}
      </WrapperContent>
      <Pages>
        {" "}
        Página {pageIndex} de {data?.totalPages}
      </Pages>
    </WrapperMostSoldProducts>
  );
};

export default index;

import React from "react";
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
} from "./style";
import useSWR from "swr";
import { getAllProducts, getMostSoldProducts } from "@/Utils/api";

const index = () => {
  const { data, error, isLoading, mutate } = useSWR(
    "/api/products",
    getAllProducts
  );

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
          <ArrowLeft />
          <ArrowRight />
        </PageButtons>
      </WrapperHeader>
      <WrapperContent>
        {data.products.length != 0 ? (
          data.products
            .sort((a, b) => b.sales - a.sales)
            .map((product) => {
              return (
                <ProductCard>
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
      <p>Pagination will come here</p>
    </WrapperMostSoldProducts>
  );
};

export default index;

import React, { useEffect, useState } from "react";
import {
  Wrapper,
  WrapperContent,
  TopBar,
  CentralHeader,
  ButtonsHeader,
  ShowAllProducts,
  ShowFavorites,
  CreateProduct,
} from "./style";
import ModalCreateProduct from "./../ModalCreateProduct";
import SearchButton from "../SearchButton";

const index = ({ displayAllProducts, setDisplayAllProducts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Wrapper>
      <WrapperContent>
        <TopBar>Logo</TopBar>
        <CentralHeader>
          <h1>Produtos</h1> <SearchButton />
        </CentralHeader>
        <ButtonsHeader>
          <div>
            <ShowAllProducts
              displayAllProducts={displayAllProducts}
              role="button"
              onClick={() => setDisplayAllProducts(true)}
            >
              Todos
            </ShowAllProducts>
            <ShowFavorites
              displayAllProducts={displayAllProducts}
              role="button"
              onClick={() => setDisplayAllProducts(false)}
            >
              Favoritos
            </ShowFavorites>
          </div>
          <CreateProduct role="button" onClick={() => setIsModalOpen(true)}>
            Criar novo
          </CreateProduct>
        </ButtonsHeader>
      </WrapperContent>
      {isModalOpen && <ModalCreateProduct setIsModalOpen={setIsModalOpen} />}
    </Wrapper>
  );
};

export default index;

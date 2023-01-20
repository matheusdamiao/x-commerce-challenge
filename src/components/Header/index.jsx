import React, { useState } from "react";
import {
  Wrapper,
  WrapperContent,
  TopBar,
  CentralHeader,
  ButtonsHeader,
} from "./style";
import ModalCreateProduct from "./../ModalCreateProduct";

const index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Wrapper>
      <WrapperContent>
        <TopBar>Logo</TopBar>
        <CentralHeader>
          <h1>Produtos</h1>{" "}
        </CentralHeader>
        <ButtonsHeader>
          <div>
            <button>Todos</button>
            <button>Favoritos</button>
          </div>
          <button onClick={() => setIsModalOpen(true)}>Criar novo</button>
        </ButtonsHeader>
      </WrapperContent>
      {isModalOpen && <ModalCreateProduct setIsModalOpen={setIsModalOpen} />}
    </Wrapper>
  );
};

export default index;

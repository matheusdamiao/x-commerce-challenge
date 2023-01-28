import { AppContext } from "@/context/context";
import React, { useContext, useState } from "react";

import { Wrapper, Input, CiSearchStyled } from "./style";

const index = () => {
  const context = useContext(AppContext);
  const { Search } = context;
  const { searchValue, setSearchValue } = Search;

  return (
    <Wrapper>
      <CiSearchStyled />
      <Input
        placeholder="Buscar por produtos"
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </Wrapper>
  );
};

export default index;

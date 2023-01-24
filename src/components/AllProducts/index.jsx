import React, { useContext, useEffect, useState } from "react";
import useSWR from "swr";
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
import { getAllProducts } from "@/Utils/api";
import { AppContext } from "@/context/context";

const index = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const context = useContext(AppContext);
  // Local state and its update function
  const { allProducts, setAllproducts } = context;

  const { data, error, isLoading } = useSWR("/api/products", getAllProducts);

  // every time data is updated, we also update our local state
  useEffect(() => {
    setAllproducts([data]);
    console.log(data);
  }, [data]);

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
          {data.products.map((product) => {
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
                  {!isFavorite && (
                    <BsHeart
                      size="20"
                      style={{ cursor: "pointer", stroke: "10" }}
                      onClick={() => setIsFavorite(!isFavorite)}
                    />
                  )}
                  {isFavorite && (
                    <BsSuitHeartFill
                      stroke="black"
                      size="20"
                      style={{ color: "red" }}
                    />
                  )}
                </TableData>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Wrapper>
  );
};

export default index;

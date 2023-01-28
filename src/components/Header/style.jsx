import styled from "styled-components";

export const Wrapper = styled.header`
  background-color: #17223e;
  height: 372px;
  width: 100%;
  color: white;
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 50px;
  height: 100%;
`;

export const TopBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const CentralHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  h1 {
    font-size: 36px;
  }
`;

export const ButtonsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  div {
    display: flex;
    gap: 15px;
  }
`;

export const ShowAllProducts = styled.button`
  background-color: ${(props) =>
    props.displayAllProducts === true ? "red" : "rgba(211, 40, 17, 0.5)"};
  color: white;
  padding: 8px 10px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  cursor: pointer;
`;

export const ShowFavorites = styled.button`
  background-color: ${(props) =>
    props.displayAllProducts === false ? "red" : "rgba(211, 40, 17, 0.5)"};
  color: white;
  padding: 8px 10px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  cursor: pointer;
`;

export const CreateProduct = styled.button`
  background-color: #d32811;
  color: white;
  padding: 8px 10px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  cursor: pointer;
`;

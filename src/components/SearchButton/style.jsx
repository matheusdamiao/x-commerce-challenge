import { CiSearch } from "react-icons/ci";
import styled from "styled-components";

export const Wrapper = styled.div``;

export const CiSearchStyled = styled(CiSearch)`
  position: absolute;
  right: 435px;
  z-index: 99;
  color: rgba(153, 160, 176, 0.5);
  top: 174px;
  font-size: 25px;
`;

export const Input = styled.input`
  width: 426px;
  height: 50px;
  border-radius: 9px;
  padding: 15px 23px;
  padding-left: 50px;
  position: relative;

  ::placeholder {
    color: rgba(153, 160, 176, 1);
    font-size: 16px;
    font-weight: 400;
    line-height: 103%;
  }
`;

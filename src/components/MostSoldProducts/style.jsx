import styled from "styled-components";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

export const WrapperMostSoldProducts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 427px;
  /* width: 100%; */
  /* border: 1px solid orange; */
  margin-left: 45px;
`;

export const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  margin-top: 80px;
  margin-bottom: 34px;
`;

export const PageButtons = styled.div`
  display: flex;
  margin-bottom: 34px;
  margin-top: 85px;
  gap: 18px;
`;

export const ArrowRight = styled(HiArrowRight)`
  color: rgba(35, 94, 231, 1);
  cursor: pointer;
`;

export const ArrowLeft = styled(HiArrowLeft)`
  color: rgba(35, 94, 231, 1);
  cursor: pointer;
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const ProductCard = styled.div`
  > img {
    width: 120px;
  }
`;

export const Image = styled.div`
  width: 168px;
  height: 148px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  > img {
    width: 120px;
  }
`;

export const Values = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;

  > p {
    color: rgba(107, 113, 131, 1);
    font-weight: 600;
    margin: 0;
  }

  > small {
    color: rgba(107, 113, 131, 1);
    font-weight: 400;
  }
`;

export const Name = styled.p`
  white-space: nowrap;
  width: 150px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  margin-top: 5px;
  color: rgba(35, 94, 231, 1);
  font-weight: 600;
`;

export const Pages = styled.p`
  text-align: right;
  margin-top: 20px;
  margin-bottom: 30px;
  color: rgba(99, 99, 99, 1);
  font-weight: 500;
  font-size: 14px;
`;

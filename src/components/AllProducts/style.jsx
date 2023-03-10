import styled from "styled-components";
import { Pages, WrapperHeader } from "../MostSoldProducts/style.jsx";

export const Wrapper = styled.div`
  height: 900px;
  width: fit-content;
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  margin-top: 80px;
  margin-bottom: 34px;
`;

export const Table = styled.table`
  min-width: 883px;
  max-height: 700px;
  margin-left: 30px;
  margin-right: 30px;
  border-collapse: collapse;

  @media screen and (max-width: 800px) {
    max-width: 800px;
    min-width: 300px;
  }
`;

export const TableHead = styled.thead`
  text-align: left;
  color: #99a0b0;
  font-weight: 600;
  font-size: 14px;
  line-height: 135%;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  vertical-align: middle;
  height: 120px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  // add some constraints only to 'Identificação' data table, so we can control its size and grow
  > #identificacao {
    max-width: 250px;
    height: 120px;
    flex-direction: column;
    display: flex;
    gap: 29px;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
  }

  > #sold {
    color: rgba(107, 113, 131, 1);

    > p {
      font-weight: 700;
      margin: 0;
      margin-bottom: 5px;
    }
  }
`;

export const HeaderCell = styled.th``;

export const TableRowHeader = styled.tr`
  height: 60px;
`;

export const TableData = styled.td`
  > #nameAndCode {
    display: flex;
    flex-direction: column;

    > p {
      width: 217px;
      margin: 0;
      margin-bottom: 6px;
      color: #235ee7;
      font-weight: 600;
      font-size: 14px;
      line-height: 135%;
    }

    > small {
      color: #6b7183;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
    }
  }

  > #pictureBox {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 85px;
    height: 85px;
    background: #ffffff;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
`;

export const PagesAllProducts = styled(Pages)`
  margin-bottom: 40px;
  margin-right: 50px;
`;

export const WrapperHeaderProducts = styled(WrapperHeader)`
  width: 90%;
  justify-content: space-between;
  margin-left: 20px;
`;

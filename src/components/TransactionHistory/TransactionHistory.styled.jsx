import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  margin: 40px auto;
  padding: 5px;
  table-layout: auto;
  border: 2px solid silver;
  width: 400px;
  background-color: #fffafa;
`;

export const TheadTitle = styled.th`
  padding: 10px 80px;
  text-align: center;
  background-color: #87cefa;
  color: #ffffff;
  }
`;

export const TableRow = styled.tr`
  cursor: pointer;
  :nth-of-type(even) {
    background-color: #d3d3d3;
  }

  :hover,
  :focus {
    background-color: #ff0000;
    transition: background-color 0.5s;
  }
`;
export const TableData = styled.td`
  padding: 8px;
  text-align: center;
  border-bottom: 1px solid #ddd;
  :not(:last-child) {
    border-right: 2px solid #778899;
  }
`;

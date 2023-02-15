import styled from '@emotion/styled';

export const Table = styled.table`
  width: 90%;
  margin: 0 auto;
  background-color: white;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  th {
    padding: 12px 0;
    text-transform: uppercase;
    background-color: #60b9ce;
    color: #ffffff;
  }
  td {
    width: 30%;
    padding: 8px 0;
    text-align: center;
    font-size: 12px;
    font-weight: 600;
    border: 1px solid #888888;
  }
  tr:nth-of-type(2n + 1) {
    background-color: #f1f1f1;
  }
`;

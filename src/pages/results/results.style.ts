import styled, { css } from "styled-components";
import { DataColumnType } from "types/style.type";

const textOverflow = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ResultsWrapper = styled.div`
  padding: 30px 0;
  margin: 0 auto;
  width: calc(100% - 324px);
`;

const ResultsTable = styled.table`
  margin-bottom: 20px;
  width: 100%;
  min-width: 730px;

  border-collapse: collapse;
  border-width: 0;
  border-bottom: ${({ theme }) => `7px solid ${theme.color.grey}`};
`;

const ResultTableHead = styled.thead`
  font-weight: 700px;
`;

const ResultTableHeadRow = styled.tr`
  font-size: ${({ theme }) => theme.font.regularOver};
  line-height: 30px;

  border-top: ${({ theme }) => `7px solid ${theme.color.grey}`};
  border-bottom: ${({ theme }) => `7px solid ${theme.color.grey}`};
`;

const CellHeadPadding = styled.th`
  padding: 20px 14px;
`;

const HeadColumnFirst = styled(CellHeadPadding)`
  width: 200px;

  text-align: left;
`;

const HeadColumnSecond = styled(CellHeadPadding)`
  width: auto;
`;

const HeadColumnThird = styled(CellHeadPadding)`
  width: 100px;
`;

const HeadColumnFourth = styled(CellHeadPadding)`
  width: 250px;
`;

const DataRow = styled.tr`
  &:not(:last-of-type) {
    border-bottom: ${({ theme }) => `1px solid ${theme.color.greyLight}`};
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.greyLight};
  }
`;

const DataColumn = styled.td<DataColumnType>`
  padding: 10px 14px;
  max-width: ${({ $width }) => $width ? $width + 'px' : 'none'};

  ${({ $width }) => $width && textOverflow};

  &:first-of-type {
    color: ${({ theme }) => theme.color.blue};
  }
`;

const DataColumnThird = styled(DataColumn)`
  text-align: center;
`;

export {
  ResultsWrapper,
  ResultsTable,
  ResultTableHead,
  ResultTableHeadRow,
  HeadColumnFirst,
  HeadColumnSecond,
  HeadColumnThird,
  HeadColumnFourth,
  DataRow,
  DataColumn,
  DataColumnThird,
}

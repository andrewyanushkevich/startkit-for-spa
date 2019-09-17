import styled from 'styled-components';
import { Table } from 'antd';

export const StyledTable = styled(Table)`
  .ant-table-bordered .ant-table-thead > tr > th,
  .ant-table-bordered .ant-table-tbody > tr > td {
    padding: 5px;
  }
`;

export const HeaderCell = styled.div`
  text-align: center;
  font-size: 14px;
  font-weight: bold;
`;

const RowCell = styled.div`
  font-size: 14px;
  padding: 0px;
  margin: 0 0px;
  color: ${props => (props.transparent ? 'rgb(0,0,0, 0.25)' : 'black')};
`;

export const TextCell = styled(RowCell)`
  text-align: left;
`;

export const NumberCell = styled(RowCell)`
  text-align: right;
`;

export const DateCell = styled(RowCell)`
  text-align: center;
`;

export const IconCell = styled(RowCell)`
  text-align: center;
`;

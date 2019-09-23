import styled from 'styled-components';
import { Form, Modal } from 'antd';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  & > div {
    display: flex;
    flex-direction: row;
    flex-basis: 200px;
    align-content: space-between;
    justify-content: space-between;
  }
`;

export const StyledModal = styled(Modal)`
`;

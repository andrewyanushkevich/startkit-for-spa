import styled from 'styled-components';
import { Checkbox, Collapse } from 'antd';

export const FilterWrapper = styled.div`
  flex-direction: row;
  flex-basis: 300px;
  margin: 0px 50px;
`;

export const StyledCollapse = styled(Collapse)`
  background-color: LightSkyBlue;
`;

export const Sites = styled(Checkbox.Group)`
  display: flex;
  flex-direction: column;
  & > label {
    font-size: 14px;
  }
`;

export const Cities = styled(Checkbox.Group)`
  display: flex;
  flex-direction: column;
`;

export const Dates = styled(Checkbox.Group)`
  display: flex;
  flex-direction: column;
`;

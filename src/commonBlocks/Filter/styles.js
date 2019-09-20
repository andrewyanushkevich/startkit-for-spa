import styled from 'styled-components';
import { Checkbox, Collapse } from 'antd';

export const FilterWrapper = styled.div`
  flex-direction: column;
  flex-basis: 250px;
  margin: 30px 50px;
  display: flex;
  & > button {
    margin: 0px 100px 20px;
  }
`;

export const StyledCollapse = styled(Collapse)`
  background-color: LightSkyBlue;
  display: flex;
  flex-direction: column;
`;

export const Sites = styled(Checkbox.Group)`
  display: flex;
  flex-direction: column;
`;

export const Cities = styled(Checkbox.Group)`
  display: flex;
  flex-direction: column;
`;

export const Dates = styled(Checkbox.Group)`
  display: flex;
  flex-direction: column;
`;

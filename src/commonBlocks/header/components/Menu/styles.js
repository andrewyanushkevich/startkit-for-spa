import styled from 'styled-components';
import { Menu } from 'antd';

export const StyleMenuWrapper = styled.div`
  width: 75%;
`;

export const StyledAntMenu = styled(Menu)`
  border: none !important;
  line-height: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  li {
    &.ant-menu-item {
      border: none;
      padding: 0;
      color: #9dc0e0;
      top: 0;

      &.ant-menu-item-active {
        color: #043464;
        border: none;
      }
      &.ant-menu-item-selected {
        color: #043464;
      }
      &.ant-menu-item-disabled {
        color: #9dc0e0 !important;
        cursor: pointer;
        border: none;
      }

      .anticon {
        font-size: 30px;

        &.ant-dropdown-open {
          color: #043464;
        }
      }
    }
  }
`;

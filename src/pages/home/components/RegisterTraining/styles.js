import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: space-between;
  & > div {
    flex-direction: row;
    display: flex;
    flex-basis: 100%;
    height: 100%;
    margin: 0px auto;
    align-content: space-between;
  }
`;

export const ButtonsWrapper = styled.section`
  margin: auto;
  justify-content: space-between;
  & > button {
    margin: 10px;
  }
`;

import styled from '@emotion/styled';

export const ThemePickerContainer = styled.div`
  display: flex;
  margin-top: 20px;
  overflow: hidden;
  max-width: 500px;
  width: 80%;
  box-sizing: content-box;
  justify-content: flex-start;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  & > button {
    margin-left: 5px;
    margin-right: 5px;
    flex-shrink: 0;
  }
`;

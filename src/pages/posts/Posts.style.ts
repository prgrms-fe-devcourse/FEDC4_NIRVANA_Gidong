import styled from '@emotion/styled';

const StyledPostsPage = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.white};
  overflow-y: scroll;
`;

const ThemePickerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export { StyledPostsPage, ThemePickerContainer };

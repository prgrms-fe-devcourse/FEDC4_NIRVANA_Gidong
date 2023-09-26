import styled from '@emotion/styled';

const StyledPostsPage = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.white};
  overflow-y: scroll;
`;

const ThemePickerContainer = styled.div`
  width: 100%;
  height: 70px;
  ${({ theme }) => theme.style.flexCenter};
`;

const StyledNoPosts = styled.div`
  width: 100%;
  height: 300px;
  ${({ theme }) => theme.style.flexCenter};
  color: ${({ theme }) => theme.color.greyLight};
`;

const PostsContainer = styled.div``;

export { StyledPostsPage, ThemePickerContainer, PostsContainer, StyledNoPosts };

import styled from '@emotion/styled';

export const NoPostsContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.white};
`;
export const NoPostsText = styled.p`
  width: 100%;
  height: 200px;
  ${({ theme }) => theme.style.flexCenter};
  color: ${({ theme }) => theme.color.greyLight};
`;

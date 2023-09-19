import styled from '@emotion/styled';

export const PostCommentHeaderContainer = styled.div`
  ${({ theme }) => theme.style.flexAlignCenter};
  background-color: ${({ theme }) => theme.color.white};
  position: fixed;
  width: 100%;
  height: 30px;
  > span {
    margin-top: 2px;
  }
`;

export const PostCommentHeaderText = styled.p`
  margin: 0 5px 0 3px;
  font-size: 14px;
  font-weight: 800;
`;

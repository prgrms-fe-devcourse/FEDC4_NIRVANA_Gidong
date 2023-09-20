import styled from '@emotion/styled';

export const PostCommentHeaderContainer = styled.header`
  ${({ theme }) => theme.style.flexAlignCenter};
  background-color: ${({ theme }) => theme.color.white};
  position: fixed;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  height: 40px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  > span {
    margin-top: 2px;
  }
`;

export const PostCommentHeaderText = styled.p`
  margin: 0 5px 0 3px;
  font-size: 14px;
  font-weight: 800;
`;

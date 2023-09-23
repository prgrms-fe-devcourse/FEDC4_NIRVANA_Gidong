import styled from '@emotion/styled';

export const PostCommentHeaderContainer = styled.header`
  ${({ theme }) => theme.style.flexAlignCenter};
  background-color: ${({ theme }) => theme.color.white};
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  height: 40px;
`;

export const PostCommentHeaderText = styled.p`
  margin: 0 5px 0 3px;
  font-size: 14px;
  font-weight: 800;
`;

export const PostLikeContainer = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
  user-select: none;
  > span {
    transition: transform 0.2s ease-in-out;
    margin-top: 1px;
    &:active {
      animation: shake 1s infinite;
    }
    :hover {
      transform: scale(1.2);
    }
  }

  @keyframes shake {
    0% {
      transform: rotate(0) scale(1.2);
    }
    10% {
      transform: rotate(15deg) scale(1.2);
    }
    30% {
      transform: rotate(-15deg) scale(1.2);
    }
    50% {
      transform: rotate(15deg) scale(1.2);
    }
    70% {
      transform: rotate(0) scale(1.2);
    }
    100% {
      transform: rotate(0) scale(1.2);
    }
  }
`;

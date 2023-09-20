import styled from '@emotion/styled';

export const PostCommentContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
`;

export const PostCommentAvatarContainer = styled.div`
  ${({ theme }) => theme.style.flexCenter}
  height: 50px;
  width: 50px;
  min-width: 50px;
  margin-right: 10px;
`;

export const PostCommentUserContainer = styled.div`
  height: 20px;
  > span:last-of-type {
    margin-left: 5px;
  }
`;

export const PostCommentContentContainer = styled.div``;

import styled from '@emotion/styled';

export const PostCommentContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
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
  margin-bottom: 2px;
  > span:last-of-type {
    margin-left: 5px;
  }
`;

export const PostCommentContentContainer = styled.div`
  flex: 1;
  margin-top: 4px;
  line-height: 1.5;
`;

export const PostCommentDeleteContainer = styled.div`
  color: ${({ theme }) => theme.color.greyLight};
  height: 16px;
  display: flex;
  justify-content: flex-end;
  > p {
    margin-top: 8px;
    height: 20px;
    cursor: pointer;
  }
`;

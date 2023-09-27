import styled from '@emotion/styled';

export const PostDetailSkeletonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const PostDetailSkeletonContentContainer = styled.div`
  width: 100%;
  height: 200px;
  padding: 30px 20px;
`;

export const PostDetailSkeletonCommentContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  flex: 1;
  > div {
    margin-bottom: 20px;
  }
`;

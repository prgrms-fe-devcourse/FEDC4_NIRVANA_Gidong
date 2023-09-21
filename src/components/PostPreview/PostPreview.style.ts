import styled from '@emotion/styled';

export const PreviewContainer = styled.div`
  max-width: 600px;
  width: 100%;
  height: 150px;
  margin: 0 auto;
  padding: 15px 60px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 0.5px solid ${({ theme }) => theme.color.greyLight};
`;

export const PostHeaderContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
`;

export const AvatarContainer = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PostInfoContainer = styled.div`
  width: calc(100% - 50px);
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
`;

export const UserNameContainer = styled.div`
  width: 100%;
  height: 50%;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  align-items: center;
`;

export const PostDetailInfoContainer = styled.div`
  width: 100%;
  height: 50%;
  color: ${({ theme }) => theme.color.greyLight};
  font-size: 14px;
  display: flex;
  align-items: center;

  div {
    display: flex;
    align-items: center;

    & > * {
      margin: 0px 2px;
    }
  }
`;

export const PostContent = styled.div`
  width: 100%;
  height: 100px;
  padding: 5px 10px;
  font-size: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  word-wrap: break-word;
  line-height: 1.4;
  position: relative;
`;

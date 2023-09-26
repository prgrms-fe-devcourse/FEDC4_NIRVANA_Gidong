import styled from '@emotion/styled';

export const PreviewContainer = styled.div`
  max-width: 600px;
  width: 100%;
  min-height: 160px;
  max-height: 200px;
  margin: 0 auto;
  padding: 15px 26px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 0.5px solid ${({ theme }) => theme.color.white800};
  &:hover {
    background-color: ${({ theme }) => theme.color.white900};
  }
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
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
  line-height: 1.5;
`;

export const UserContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
`;

export const NameContainer = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

export const IdContainer = styled.div`
  padding-left: 5px;
  font-weight: 300;
  color: ${({ theme }) => theme.color.greyLight};
`;

export const PostDetailInfoContainer = styled.div<{ noneProfile: boolean }>`
  width: 100%;
  height: 50%;
  color: ${({ theme }) => theme.color.greyLight};
  font-size: ${({ noneProfile }) => (noneProfile ? 16 : 14)}px;
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

export const PostContentContainer = styled.div`
  flex-grow: 1;
  width: 100%;
`;

export const PostContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px 5px;
  padding-bottom: 0px;
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

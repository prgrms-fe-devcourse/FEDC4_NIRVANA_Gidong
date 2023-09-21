import styled from '@emotion/styled';

export const PostContentSection = styled.section`
  width: 100%;
`;

export const PostContentHeader = styled.header`
  display: flex;
  width: 100%;
  height: 50px;
`;

export const PostContentAvatarContainer = styled.div`
  ${({ theme }) => theme.style.flexCenter}
  width: 50px;
  height: 100%;
`;

export const PostContentUserInfo = styled.div`
  ${({ theme }) => theme.style.flexJustifyCenter}
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 6px;
`;

export const PostContentUserName = styled.div`
  > span:first-of-type {
    margin-right: 2px;
  }
  margin-bottom: 3px;
`;

export const PostContentTime = styled.div`
  color: ${({ theme }) => theme.color.greyLight};
  font-size: 12px;
`;

export const PostContentMenu = styled.div`
  ${({ theme }) => theme.style.flexCenter}
  user-select: none;
  cursor: pointer;
  width: 50px;
  height: 100%;
  > span {
    transition: transform 0.4s ease-in-out;
    &:hover {
      transform: rotate(180deg);
    }
  }
`;

export const PostContentBody = styled.div`
  padding: 20px;
  width: 100%;
`;

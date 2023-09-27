import styled from '@emotion/styled';

interface PostContentMenuProps {
  opened: boolean;
}

interface contentEditMode {
  contentEditMode: boolean;
}

export const PostContentSection = styled.section`
  width: 100%;
`;

export const PostContentHeader = styled.header`
  position: relative;
  display: flex;
  width: 100%;
  height: 50px;
`;

export const PostContentMenuIconContainer = styled.div<PostContentMenuProps>`
  ${({ theme }) => theme.style.flexCenter}
  user-select: none;
  position: relative;
  cursor: pointer;
  width: 50px;
  height: 100%;
  border-radius: 50%;
  border-left: none;
  z-index: 2;
  > span {
    transition: transform 0.4s ease-in-out;
    transform: rotate(${(props) => (props.opened ? '-180deg' : '0deg')});
  }

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.color.white800};
  }
`;

export const PostContentMenu = styled.div<PostContentMenuProps>`
  z-index: 1;
  ${({ theme }) => theme.style.flexAlignCenter}
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  right: 50px;
  width: 70px;
  height: 50px;
  opacity: ${(props) => (props.opened ? '1' : '0')};
  transform: ${(props) =>
    props.opened ? 'translateX(0)' : 'translateX(60px)'};
  transition: all 0.3s ease;

  & > p {
    width: 100%;
    text-align: center;
    padding: 5px;
    font-size: 14px;
    border-bottom: 1px solid ${({ theme }) => theme.color.white800};
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover,
    &:active {
      background-color: ${({ theme }) => theme.color.white800};
    }
  }

  & > p:first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  & > p:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export const PostContentBody = styled.div`
  padding: 20px;
  width: 100%;
  line-height: 1.5;
`;

export const PostEditConfirmButtonContainer = styled.div<contentEditMode>`
  padding: 10px;
  float: right;
  transition: all 0.2s ease-out;
  opacity: ${(props) => (props.contentEditMode ? '1' : '0')};
  z-index: ${(props) => (props.contentEditMode ? '1' : '-1')};
  > button {
    transition: all 0.2s ease-out;
    cursor: ${(props) => (props.contentEditMode ? 'pointer' : 'default')};
    :hover,
    &:active {
      background-color: ${({ theme }) => theme.color.white800};
    }
    &:first-of-type {
      margin-right: 5px;
    }
  }
`;

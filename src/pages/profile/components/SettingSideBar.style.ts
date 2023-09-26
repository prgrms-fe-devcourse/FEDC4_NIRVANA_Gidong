import styled from '@emotion/styled';

interface SettingSideBarProps {
  sideBarOpened: boolean;
}

export const SettingSideBarSection = styled.section<SettingSideBarProps>`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  width: 100vw;
  height: 100vh;
  max-width: 768px;
  overflow: hidden;
  z-index: 3;
  transform: ${({ sideBarOpened }) =>
    sideBarOpened ? 'translateX(0)' : 'translateX(100%)'};
`;

export const SettingSideBarBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.transparentGreyBackground};
  cursor: pointer;
`;

export const SettingRightSideBar = styled.div<SettingSideBarProps>`
  z-index: 4;
  padding: 43px 20px 0;
  width: 300px;
  max-width: 80%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.white};
  transform: ${({ sideBarOpened }) =>
    sideBarOpened ? 'translateX(0)' : 'translateX(100%)'};
  transition: all 0.1s ease-out;
`;

export const Heading = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.black};
  margin-bottom: 24px;
`;

export const SettingUl = styled.ul<SettingSideBarProps>`
  z-index: 1;
  animation: ${({ sideBarOpened }) => (sideBarOpened ? 'fadeIn' : 'fadeOut')}
    0.3s;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const SettingLi = styled.li`
  ${({ theme }) => theme.style.flexAlignCenter}
  height: 51px;
  width: 100%;
  padding: 0 5px;
  color: ${({ theme }) => theme.color.black};
  font-size: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.color.white800};
  transition: all 0.2s ease-out;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.color.white900};
  }

  > a.active,
  > a,
  > p {
    ${({ theme }) => theme.style.flexAlignCenter}
    font-weight: normal;
    text-decoration: none;
    color: ${({ theme }) => theme.color.black};
    width: 100%;
    height: 100%;
  }
`;

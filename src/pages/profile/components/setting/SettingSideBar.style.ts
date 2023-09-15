import styled from '@emotion/styled';

interface SettingSideBarProps {
  active: boolean;
}

export const SettingSideBarSection = styled.section<SettingSideBarProps>`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  transform: ${({ active }) =>
    active ? 'translateX(0%)' : 'translateX(200%)'};
`;

export const SettingSideBarBackground = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.transparentGreyBackground};
  flex: 1;
`;

export const SettingSideBarPage = styled.div<SettingSideBarProps>`
  padding: 43px 20px 0;
  right: 0;
  position: relative;
  pointer-events: none;
  width: 100%;
  height: 100%;
  float: right;
  background-color: ${({ theme }) => theme.color.white};
  flex: 5;
`;

export const Heading = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.black};
  margin-bottom: 24px;
`;

export const SettingUl = styled.ul``;

export const SettingLi = styled.li`
  ${({ theme }) => theme.style.flexAlignCenter}
  height: 51px;
  padding: 0 5px;
  font-size: 16px;
  color: ${({ theme }) => theme.color.black};
  border-bottom: 0.5px solid ${({ theme }) => theme.color.greyLight};
  cursor: pointer;
`;

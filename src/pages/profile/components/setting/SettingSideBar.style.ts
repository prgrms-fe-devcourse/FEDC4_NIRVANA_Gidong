import styled from '@emotion/styled';

export const SettingSideBarSection = styled.section`
  display: flex;
  width: 100vw;
  height: 100vh;
  max-width: 768px;
`;

export const SettingSideBarBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.transparentGreyBackground};
  flex: 1;
`;

export const SettingRightSideBar = styled.div`
  padding: 43px 20px 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.white};
  flex: 5;
`;

export const Heading = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.black};
  margin-bottom: 24px;
`;

export const SettingUl = styled.ul`
  z-index: 1;
`;

export const SettingLi = styled.li`
  ${({ theme }) => theme.style.flexAlignCenter}
  height: 51px;
  padding: 0 5px;
  font-size: 16px;
  color: ${({ theme }) => theme.color.black};
  border-bottom: 0.5px solid ${({ theme }) => theme.color.greyLight};
`;

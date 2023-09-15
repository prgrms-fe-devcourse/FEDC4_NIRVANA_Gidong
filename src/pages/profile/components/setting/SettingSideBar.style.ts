import styled from '@emotion/styled';

export const SettingSideBarBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: ${({ theme }) => theme.color.transparentGreyBackground};
`;

export const SettingSideBarPage = styled.div`
  padding: 43px 20px 0;

  right: 0;
  z-index: 3;
  width: 80%;
  height: 100%;
  float: right;
  background-color: ${({ theme }) => theme.color.white};
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

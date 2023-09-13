import styled from '@emotion/styled';

export const SettingPage = styled.div`
  padding: 43px 20px 0;
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

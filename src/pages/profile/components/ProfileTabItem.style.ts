import styled from '@emotion/styled';

interface ProfileTabsItemProps {
  selected: boolean;
}

export const ProfileTabItemContainer = styled.div<ProfileTabsItemProps>`
  height: 35px;
  color: ${({ selected, theme }) =>
    selected ? theme.color.black : theme.color.greyLight};
  font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  cursor: pointer;
  user-select: none;
  font-size: 12px;
  > strong {
    font-weight: bold;
  }
`;

import styled from '@emotion/styled';

interface ProfileTabsItemProps {
  selected: boolean;
}

export const ProfileTabItemContainer = styled.div<ProfileTabsItemProps>`
  height: 50px;
  border-bottom: 3px solid
    ${({ selected, theme }) =>
      selected ? theme.color.purpleVivid : 'transparent'};
  color: ${({ selected, theme }) =>
    selected ? theme.color.black : theme.color.greyLight};
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  cursor: pointer;
  user-select: none;
  font-size: 14px;
  > strong {
    font-weight: bold;
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.white900};
  }
`;

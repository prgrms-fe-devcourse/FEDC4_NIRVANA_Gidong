import styled from '@emotion/styled';

interface ProfileTabsItemProps {
  selected: boolean;
}

export const ProfileTabsContainer = styled.div`
  display: flex;
  height: 50px;
  margin-top: 10px;
`;

export const ProfileTabsItem = styled.div<ProfileTabsItemProps>`
  border-bottom: 3px solid
    ${({ selected, theme }) =>
      selected ? theme['purpleVivid'] : 'transparent'};
  color: ${({ selected, theme }) =>
    selected ? theme['black'] : theme['greyLight']};
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

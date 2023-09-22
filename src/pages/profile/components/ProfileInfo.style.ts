import styled from '@emotion/styled';

export const ProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 117px;
  top: -35px;
  position: absolute;
`;
export const ProfileAvatarContainer = styled.div`
  flex-grow: 1;
`;

export const ProfileInfoNameAndBadge = styled.div`
  ${({ theme }) => theme.style.flexAlignCenter};
  > span {
    ${({ theme }) => theme.style.textEllipsis};
  }
  > span:first-of-type {
    margin-right: 3px;
  }
`;

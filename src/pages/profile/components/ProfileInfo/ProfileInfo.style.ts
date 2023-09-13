import styled from '@emotion/styled';

export const ProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 122px;
  height: 117px;
  top: -35px;
  position: absolute;
`;
export const ProfileAvatarContainer = styled.div`
  flex-grow: 1;
`;

export const ProfileInfoNameAndBadge = styled.div`
  ${({ theme }) => theme.style.flexAlignCenter};
  justify-content: space-between;
`;

export const EditIconContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.transparentGreyBackground};
  ${({ theme }) => theme.style.flexCenter};
  > span {
    ${({ theme }) => theme.style.absoluteCenter};
  }
`;

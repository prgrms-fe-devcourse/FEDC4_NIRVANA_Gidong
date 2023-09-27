import styled from '@emotion/styled';

export const ProfileHeaderSection = styled.div`
  width: 100%;
`;

export const ProfileHeaderButtonContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  width: 55px;
  height: 40px;
  border-radius: 50%;
  ${({ theme }) => theme.style.flexCenter};
  > button {
    transition: all 0.2s ease-out;
  }
`;

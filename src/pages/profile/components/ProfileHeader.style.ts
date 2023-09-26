import styled from '@emotion/styled';

export const ProfileHeaderSection = styled.div`
  height: 82px;
`;

export const ProfileHeaderButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  > button {
    transition: all 0.2s ease-out;
    ${({ theme }) => theme.style.flexCenter};
    margin-right: 6px;

    &:last-child {
      margin-right: 0;
    }
<<<<<<< HEAD
    :hover {
      background-color: ${({ theme }) => theme.color.white900};
=======
    :active {
      background-color: ${({ theme }) => theme.color.purpleLight};
>>>>>>> 9e80ca6e9ba8c2d4dd0d767ba3d5e293fe5ba887
    }
  }
`;

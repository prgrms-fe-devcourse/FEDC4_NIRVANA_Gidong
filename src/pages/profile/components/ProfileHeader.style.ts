import styled from '@emotion/styled';

export const ProfileHeaderSection = styled.div`
  height: 82px;
`;

export const ProfileHeaderButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  > button {
    transition: all 0.3s ease-in-out;
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
      transform: scale(0.9);
    }
  }
`;
